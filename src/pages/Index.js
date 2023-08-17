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
import { motion } from "framer-motion";
import animation from "../utils";
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
            <motion.h1
              initial={{ ...animation({ direction: "left" }).initial }}
              whileInView={{ ...animation({ direction: "left" }).whileInView }}
              viewport={{ ...animation({ direction: "left" }).viewport }}
              transition={{ ...animation({ direction: "left" }).transition }}
            >
              Halo Saya Muhammad Nor <span>Kholit</span>
            </motion.h1>
            <motion.h3
              initial={{ ...animation({ direction: "left" }).initial }}
              whileInView={{ ...animation({ direction: "left" }).whileInView }}
              viewport={{ ...animation({ direction: "left" }).viewport }}
              transition={{
                ...animation({ direction: "left", delay: 1 }).transition,
              }}
            >
              Saya Web dan Mobile Developer
            </motion.h3>
            <motion.p
              initial={{ ...animation({ direction: "left" }).initial }}
              whileInView={{ ...animation({ direction: "left" }).whileInView }}
              viewport={{ ...animation({ direction: "left" }).viewport }}
              transition={{
                ...animation({ direction: "left", delay: 2 }).transition,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              ducimus, rem explicabo quam amet voluptatibus.
            </motion.p>
            <motion.span
              initial={{ ...animation({ direction: "left" }).initial }}
              whileInView={{ ...animation({ direction: "left" }).whileInView }}
              viewport={{ ...animation({ direction: "left" }).viewport }}
              transition={{
                ...animation({ direction: "left", delay: 3 }).transition,
              }}
            >
              <Link to={"/"} className="btn btn-primary">
                <i className="fa fa-phone"></i> Hubungi Saya
              </Link>
            </motion.span>
          </div>
          <div className="header-right">
            <motion.figure
              initial={{ ...animation({ direction: "right" }).initial }}
              whileInView={{ ...animation({ direction: "right" }).whileInView }}
              viewport={{ ...animation({ direction: "right" }).viewport }}
              transition={{
                ...animation({ direction: "right" }).transition,
              }}
            >
              <img loading="lazy" src={headerImg} alt="header-image" />
              <div className="shape-left"></div>
              <div className="shape-right"></div>
            </motion.figure>
          </div>
        </div>
      </section>

      <section className="about" style={{ "--clr-border": "black" }}>
        <div className="container">
          <div className="about-left">
            <motion.figure {...animation({ direction: "left" })}>
              <img loading="lazy" src={aboutImg} alt="header-image" />
              <div className="shape-left"></div>
              <div className="shape-right"></div>
            </motion.figure>
          </div>
          <div className="about-right">
            <motion.h1
              initial={{ ...animation({ direction: "right" }).initial }}
              whileInView={{ ...animation({ direction: "right" }).whileInView }}
              viewport={{ ...animation({ direction: "right" }).viewport }}
              transition={{
                ...animation({ direction: "right" }).transition,
              }}
            >
              <i className="fa fa-circle-info"></i> Tentang Saya
            </motion.h1>
            <motion.div
              initial={{ ...animation({ direction: "right" }).initial }}
              whileInView={{ ...animation({ direction: "right" }).whileInView }}
              viewport={{ ...animation({ direction: "right" }).viewport }}
              transition={{
                ...animation({ direction: "right", delay: 1 }).transition,
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quos fugiat sunt numquam. Nobis, sequi eos? Officiis vitae natus
                ipsam!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, dignissimos eius quod excepturi asperiores et porro
                deserunt iste vel nam.
              </p>
              <p>
                Lorem, ipsum Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Iusto, veniam.
              </p>
            </motion.div>
            <motion.span
              initial={{ ...animation({ direction: "right" }).initial }}
              whileInView={{ ...animation({ direction: "right" }).whileInView }}
              viewport={{ ...animation({ direction: "right" }).viewport }}
              transition={{
                ...animation({ direction: "right", delay: 2 }).transition,
              }}
            >
              <Link to={"/"} className="btn btn-primary">
                <i className="fa fa-phone"></i> Hubungi Saya
              </Link>
            </motion.span>
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
                    index={i}
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
