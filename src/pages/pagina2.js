import React from "react";
import Layout from "../components/layout"

const Pagina2 = () =>{
  return (
    <Layout>
      <h1>Pagina 2</h1>
      <div>
        <p>Paragrafo 1</p>
        <p>Paragrafo 2</p>
      </div>
    </Layout>
  )
}

export default Pagina2;

export const Head = () => <title>Pagina 2</title>