import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div class="flexbox">
        <div class="item">
          <div class="content">
            <p>11111</p>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <p>22222</p>
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
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Index</title>;
