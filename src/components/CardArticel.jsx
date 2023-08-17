import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function CardArticel({ img, title, shortDesc, slug, created }) {
  return (
    <Link to={slug}>
      <article>
        <figure>
          <img loading="lazy" src={img} alt="porto-image" />
        </figure>
        <div className="content">
          <h4>{title}</h4>
          <p>{shortDesc}</p>
          <span className="date">
            <i class="fa fa-calendar"></i> {moment(created).format("MMMM DD")}
          </span>
        </div>
        <div className="shape-left"></div>
        <div className="shape-right"></div>
      </article>
    </Link>
  );
}
