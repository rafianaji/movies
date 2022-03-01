import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getSimiliarMovie } from "../../../Services/Movies/Movies";
import Card from "../../../Shared/Components/Card/Card";
import Loading from "../../../Shared/Components/Loading/Loading";
import LoadingPage from "../../../Shared/Components/Loading/LoadingPage";
import Poster from "../../../Shared/Components/Poster/Poster";
import "./Detail.scss";

export default function Detail() {
  const { state } = useLocation();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastPage, setLastPage] = useState(99);
  const [loadingPage, setLoadingPage] = useState(false);

  window.onscroll = function () {
    if (
      window.innerHeight + window.pageYOffset >=
      document?.body?.offsetHeight - 2
    ) {
      similiarMovies();
    }
  };

  function similiarMovies() {
    if (page + 1 <= lastPage) {
      if (page + 1 === 1) {
        setLoadingPage(true);
      }
      setLoading(true);
      getSimiliarMovie(state?.id, page + 1)
        .then((res) => {
          if (res.data) {
            setPage(page + 1);
            setMovies(movies.concat(res?.data?.results));
            setLastPage(res?.data?.total_pages);
          }
        })
        .finally(() => {
          setLoading(false);
          setLoadingPage(false);
        });
    }
  }

  useEffect(() => {
    similiarMovies();
  }, []);

  useEffect(() => {
    setMovies([]);
  }, [state]);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#1d1d1d",
          margin: 0,
        }}
        className="fluid"
      >
        <div className="movie-detail">
          <Poster data={state} key={state.id} releaseYear={true} />
          <div className="movie-detail-info">
            <h1 className="header-one">Synopsis</h1>
            <div className="overview-container">
              <p style={{ color: "white" }}>{state.overview}</p>
            </div>
          </div>
        </div>
        <div className="similiar-movies-container">
          <h1 className="header-one">You Might Also Like This!</h1>
          <div className="similiar-movies-list">
            {movies &&
              movies.map((el, index) => {
                return (
                  <div
                    key={index}
                    style={{ marginRight: "3%", marginBottom: "3%" }}
                  >
                    <Card data={el} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#1d1d1d" }}>{loading && <Loading />}</div>
      {loadingPage && <LoadingPage />}
    </div>
  );
}
