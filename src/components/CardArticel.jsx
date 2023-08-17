import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { motion } from "framer-motion";
import animation from "../utils";
export default function CardArticel({
  img,
  title,
  shortDesc,
  slug,
  created,
  index,
}) {
  return (
    <Link to={slug}>
      <motion.article
        initial={{ ...animation({ direction: "bottom" }).initial }}
        whileInView={{ ...animation({ direction: "bottom" }).whileInView }}
        viewport={{ ...animation({ direction: "bottom" }).viewport }}
        transition={{
          ...animation({ direction: "bottom", delay: index }).transition,
        }}
      >
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
      </motion.article>
    </Link>
  );
}
