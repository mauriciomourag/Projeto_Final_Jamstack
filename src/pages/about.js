import React from "react";
import Layout from "../components/layout";

const SobreNos = () => {
  return (
    <Layout>
      <h1>Sobre Nós</h1>
      <p>Colocar Banner</p>
      <p>Quem nós somos</p>
      <p>Texto sobre nós</p>
      <h2>Nossos valores</h2>
      <div class="flexboxabout">
        <div class="itemabout">
          <div class="contentabout">
            <p>11111</p>
          </div>
        </div>
        <div class="itemabout">
          <div class="contentabout">
            <p>22222</p>
          </div>
        </div>
        <div class="itemabout">
          <div class="contentabout">
            <p>33333</p>
          </div>
        </div>
        <div class="itemabout">
          <div class="contentabout">
            <p>44444</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SobreNos;

export const Head = () => <title>Sobre Nós</title>;
