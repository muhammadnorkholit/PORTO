import React, { Fragment, useEffect, useState } from "react";

import headerImg from "../assets/images/header-image.png";
import aboutImg from "../assets/images/about-image.png";
import porto1Img from "../assets/images/porto1.jpg";
import porto2Img from "../assets/images/porto2.jpg";
import porto3Img from "../assets/images/porto3.jpg";
import porto4Img from "../assets/images/porto4.jpg";
import porto5Img from "../assets/images/porto5.jpg";
import porto6Img from "../assets/images/porto6.jpg";
import { Link } from "react-router-dom";
import CardArticel from "../components/CardArticel";
import Axios from "../Axios";
import formatApi from "../FormatApi";
import Image from "../Image";

const Main = () => {
  const [Portofolio, setPortofolio] = useState([]);
  useEffect(() => {
    Axios.get("/portofolios?populate=*&sort[0]=id:desc").then((data) =>
      setPortofolio(formatApi(data))
    );
  }, []);

  return (
    <>
      <section
        className="header"
        style={{ "--clr-border": "var(--clr-primary)" }}
      >
        <div className="container">
          <div className="header-left">
            <h1>
              Halo Saya Muhammad Nor <span>Kholit</span>
            </h1>
            <h3>Saya Web dan Mobile Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              ducimus, rem explicabo quam amet voluptatibus.
            </p>
            <Link to={"/"} className="btn btn-primary">
              <i className="fa fa-phone"></i> Hubungi Saya
            </Link>
          </div>
          <div className="header-right">
            <figure>
              <img loading="lazy" src={headerImg} alt="header-image" />
              <div className="shape-left"></div>
              <div className="shape-right"></div>
            </figure>
          </div>
        </div>
      </section>

      <section className="about" style={{ "--clr-border": "black" }}>
        <div className="container">
          <div className="about-left">
            <figure>
              <img loading="lazy" src={aboutImg} alt="header-image" />
              <div className="shape-left"></div>
              <div className="shape-right"></div>
            </figure>
          </div>
          <div className="about-right">
            <h1>
              <i className="fa fa-circle-info"></i> Tentang Saya
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos
              fugiat sunt numquam. Nobis, sequi eos? Officiis vitae natus ipsam!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
              dignissimos eius quod excepturi asperiores et porro deserunt iste
              vel nam.
            </p>
            <p>
              Lorem, ipsum Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Iusto, veniam.
            </p>
            <Link to={"/"} className="btn btn-primary">
              <i className="fa fa-phone"></i> Hubungi Saya
            </Link>
          </div>
        </div>
      </section>

      <section
        className="portofolio right top"
        style={{ "--clr-border": "var(--clr-primary)" }}
      >
        <div className="container">
          <h1>
            <i className="fa fa-unlock"></i> Portofolio
          </h1>
          <div className="items">
            {Portofolio?.map((p, i) => {
              return (
                <div className="item" key={i}>
                  <CardArticel
                    slug={"/porto/" + p.slug}
                    created={p?.createdAt}
                    title={p.title}
                    shortDesc={p.short_desc}
                    img={Image(p.img.data[0].attributes.url)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
