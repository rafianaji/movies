import {
  faChevronRight,
  faCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Poster.scss";

export default function Poster({ data, key }) {
  return (
    <div>
      <div className="poster-container">
        <img
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          alt={data.title}
          className="card-image"
        />
        <div className="poster-bg">
          <div
            style={{
              display: "flex",
            }}
            className="mb-2"
          >
            <span>
              {[...Array(Math.round(data.vote_average / 2))].map((e, i) => {
                return (
                  <FontAwesomeIcon key={i} icon={faStar} className="fa-start" />
                );
              })}
            </span>
            <span>
              <span>
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{
                    color: "white",
                    fontSize: "0.5em",
                    paddingBottom: "0.25em",
                  }}
                  className="ml-1"
                />
              </span>
              <span style={{ fontWeight: 400, color: "#ddd" }} className="ml-3">
                Release Year : {data.release_date.split("-")[0]}
              </span>
            </span>
          </div>
          <p className="poster-title">{data.title}</p>
        </div>
      </div>
    </div>
  );
}
