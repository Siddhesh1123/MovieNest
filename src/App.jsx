import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataFromApi } from "./utlis/api.js";
import { getApiConfigurations ,getGenres } from "./store/homeSlice.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";


//compontens
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";
import Explore from "./pages/explore/Explore.jsx";
import SearchResults from "./pages/searchResults/SearchResult.jsx";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((Response) => {
      console.log(Response);
      const url = {
        backdrop: Response.images.secure_base_url + "original",
        poster: Response.images.secure_base_url + "original",
        profile: Response.images.secure_base_url + "original",
      };

      dispatch(getApiConfigurations(url));
    });
  };

  const genresCall = async () => {
    let promises = []
    let endPoints = ["tv", "movie"]
    let allGenres = {}
    
    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })
    
    dispatch(getGenres(allGenres))
  }
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
