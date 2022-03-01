import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

export default function Hero({ data }) {
  console.log(data);
  return (
    <>
      <Fade
        prevArrow={
          <div style={{ width: "30px", marginRight: "-30px" }}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ marginLeft: "10px", width: "2em", color: "white" }}
            />
          </div>
        }
        nextArrow={
          <div style={{ width: "30px", marginLeft: "-30px" }}>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ marginLeft: "-10px", width: "2em", color: "white" }}
            />
          </div>
        }
      >
        {data?.map((el, index) => {
          if (index < 3) {
            return (
              <div className="slide" key={index}>
                <div className="image-container">
                  <img
                    src={`https://image.tmdb.org/t/p/original${el?.backdrop_path}`}
                    alt={`${el?.title}`}
                  />
                </div>
                <div className="box-container">
                  <div className="container-custom">
                    <div className="text-box">
                      <div>
                        {Array(Math.round(el.vote_average / 2)).map(() => {
                          return <div>&#9733;</div>;
                        })}
                      </div>
                      <div className="mb-5">
                        {[...Array(Math.round(el.vote_average / 2))].map(
                          (e, i) => {
                            return (
                              <FontAwesomeIcon
                                key={i}
                                icon={faStar}
                                style={{
                                  color: "#fff",
                                  fontSize: "1em",
                                  marginRight: "0.5em",
                                }}
                              />
                            );
                          }
                        )}
                      </div>
                      <h1
                        className="title"
                        style={{
                          color: "white",
                          fontWeight: 500,
                          fontSize: "54px",
                        }}
                      >
                        {el?.title}
                      </h1>
                      <p>{el.overview}</p>
                      <Link to="/detail" state={el}>
                        <div className="button is-rounded mt-4 header-button">
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
    </>
  );
}
