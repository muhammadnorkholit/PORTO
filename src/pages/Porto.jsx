import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import Axios from "../Axios";
import formatApi from "../FormatApi";
import Image from "../Image";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function Porto() {
  let { slug } = useParams();
  const [Porto, setPorto] = useState({});
  useEffect(() => {
    Axios.get(`/portofolios?filters[slug][$eq]=${slug}&populate=*`).then(
      (data) => setPorto(formatApi(data)[0])
    );
  }, []);
  // console.log(Porto);
  return (
    <section className="porto-detail first">
      <div className="container">
        <h1>{Porto?.title}</h1>
        <div className="info">
          <p>{Porto?.short_desc}</p>
          <span className="date">
            <i class="fa fa-calendar"></i>{" "}
            {moment(Porto?.createdAt).format("MMMM DD")}
          </span>
        </div>
        <img
          className="thumnail"
          src={Image(Porto?.img?.data[0]?.attributes.url)}
          alt=""
        />
        <ReactMarkdown children={Porto?.desc} />{" "}
      </div>
    </section>
  );
}
