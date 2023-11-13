import React from "react";
import Layout from "../components/layout"

const SobreNos = () =>{
  return (
    <Layout>
      <h1>Sobre Nós</h1>
      <div>
        <p>Paragrafo 1</p>
        <p>Paragrafo 2</p>
      </div>
    </Layout>
  )
}

export default SobreNos;

export const Head = () => <title>Sobre Nós</title>