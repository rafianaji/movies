import {
  faChevronRight,
  faCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
// import CardStyle from "./Card.module.scss";
import "./Card.scss";

export default function Card({ data, key, releaseYear }) {
  return (
    <Link to="/detail" state={data} key={key}>
      <div className="card-container">
        <img
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          alt={data.title}
          className="card-image"
        />
        <div className="card-bg">
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
          </div>
          <p className="card-title">{data.title}</p>
          <div className="card-info">
            <span>Watch now&nbsp;&nbsp;</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "#FFE922", fontSize: "0.8em" }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
