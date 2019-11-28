import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import LineChart from "../components/vis/LineChart";
import BarChart from "../components/vis/BarChart";
import ScatterChart from "../components/vis/ScatterChart";
import SankeyChart from "../components/vis/Sankey";
import Map from "../components/vis/Map";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <div className="hero">
      <h1 className="title">Visualisering</h1>
      <p className="description">Byggstenar för Datavisualisering i React</p>
    </div>
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", height: "400px" }}>
        <LineChart />
      </div>

      <div style={{ width: "50%", height: "400px" }}>
        <BarChart />
      </div>
    </div>

    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", height: "400px" }}>
        <SankeyChart />
      </div>

      <div style={{ width: "50%", height: "400px" }}>
        <ScatterChart />
      </div>
    </div>

    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", height: "400px" }}>
        <Map />
      </div>
      <div style={{ width: "50%", height: "400px" }}>
        <Map type="muni" />
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

export default Home;
