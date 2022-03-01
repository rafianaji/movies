import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";
import { getNowPlaying } from "../../../Services/Movies/Movies";
import "react-slideshow-image/dist/styles.css";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "../../../Shared/Components/Card/Card";
import Loading from "../../../Shared/Components/Loading/Loading";
import LoadingPage from "../../../Shared/Components/Loading/LoadingPage";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [lastPage, setLastPage] = useState(99);

  useEffect(() => {
    getMoviesNowPlaying();
  }, []);

  window.onscroll = function () {
    if (
      window.innerHeight + window.pageYOffset >=
      document?.body?.offsetHeight - 2
    ) {
      getMoviesNowPlaying();
    }
  };

  function getMoviesNowPlaying() {
    if (page + 1 <= lastPage) {
      page + 1 == 1 && setLoadingPage(true);
      setLoading(true);
      getNowPlaying(page + 1)
        .then((res) => {
          setPage(page + 1);
          setMovies(movies.concat(res?.data?.results));
          setLastPage(res?.data?.total_pages);
        })
        .finally(() => {
          setLoading(false);
          setLoadingPage(false);
        });
    }
  }

  return (
    <div className="home-container">
      <div>
        {movies && (
          <Fade
            prevArrow={
              <div className="prev-arrow">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ marginLeft: "10px" }}
                  className="fa-chevron"
                />
              </div>
            }
            nextArrow={
              <div className="next-arrow">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ marginLeft: "-10px" }}
                  className="fa-chevron"
                />
              </div>
            }
          >
            {movies?.map((el, index) => {
              if (index < 3) {
                return (
                  <div className="slide" key={index}>
                    <div className="image-container">
                      <img
                        src={`https://image.tmdb.org/t/p/original${el?.backdrop_path}`}
                        alt={`${el?.title}`}
                      />
                    </div>
                    <div className="bg-container">
                      <div className="header-container">
                        <div className="text-box">
                          <div className="mb-3 icon-container">
                            {[...Array(Math.round(el.vote_average / 2))].map(
                              (e, i) => {
                                return (
                                  <FontAwesomeIcon
                                    key={i}
                                    icon={faStar}
                                    className="fa-start"
                                  />
                                );
                              }
                            )}
                          </div>
                          <h1 className="title">{el?.title}</h1>
                          <p className="overview">{el.overview}</p>
                          <Link to="/detail" state={el}>
                            <div className="header-button button is-rounded is-reponsive">
                              Watch Now
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </Fade>
        )}
      </div>
      <div className="fluid home-content">
        <h1 className="header-one">New Release</h1>
        <div className="list-card-container">
          {movies &&
            movies?.map((el, index) => {
              return (
                <div
                  style={{ marginBottom: "3%", marginRight: "3%" }}
                  className="mb-5 mr-5"
                >
                  {/* // <div style={{ marginBottom: "3%", marginRight: "3%" }}> */}
                  <Card data={el} key={index} />
                </div>
              );
            })}
        </div>
      </div>
      {loading && <Loading />}
      {loadingPage && <LoadingPage />}
    </div>
  );
}
