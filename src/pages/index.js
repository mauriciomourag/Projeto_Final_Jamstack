import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {

  return (
    <Layout>
      <section className="banner"></section>
      <div className="jogos">
        <h1>Nossos Jogos</h1>
        <div class="flexbox">
          <div class="item">
            <div class="content">
              <h2>O Bruxo</h2>
              <section className="foto1"></section>
            </div>
          </div>
          <div class="item">
            <div class="content">
            <h2>Cowboy</h2>
            <section className="foto2"></section>              
              <section className="cowboy"></section>
            </div>
          </div>
          <div class="item">
            <div class="content">
            <h2>Runner Blade</h2>
              <section className="foto3"></section>
            </div>
          </div>
          <div class="item">
            <div class="content">
            <h2>Impérios da Terra</h2>
              <section className="foto4"></section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Index</title>;
