import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/loadImg/Imgload";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";


const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0 ) {
      navigate(`/search/${query}`);
    }
  };
  const searchButton = () => {
    navigate(`/search/${query}`);
  }

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer">
        
      </div>
      <ContentWrapper>
        
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subtitle">
              All Things Movies and TV, All in One Place. Explore Now!!!
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a Movies or TV shows...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <button onClick={searchButton}>Search</button>
            </div>
          </div>
        
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
