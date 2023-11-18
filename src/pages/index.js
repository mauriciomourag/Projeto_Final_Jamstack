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
            </div>
          </div>
          <div class="item">
            <div class="content">
              <p>22222</p>
              <section className="cowboy"></section>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <p>33333</p>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <p>44444</p>
              <p>44444</p>
              <p>44444</p>
              <p>44444</p>
              <p>44444</p>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <p>55555</p>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <p>66666</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Index</title>;
