import * as React from "react";
import Layout from "../components/Layout.js";
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes.js";
import Seo from "../components/seo.js";

export default function Home() {
  return (
    <Layout>
      <Seo title="Home " />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            class="hero-img"
            placeholder="traceSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
}