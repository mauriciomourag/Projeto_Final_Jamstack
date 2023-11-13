import React from "react";
import "./layout.css";
import Footer from "./footer";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <main className="layout">
      <div className="header">
        <h3>{data.site.siteMetadata.title}</h3>
        <nav className="topnav">
          <Link to="/">Início</Link>
          <Link to="/about">Sobre Nós</Link>
          <Link to="/form">Fale Conosco</Link>
          <Link to="/diary/">Diary</Link>
        </nav>
      </div>
      <div className="main">{children}</div>
      <Footer copyrightYear="2023"></Footer>
    </main>
  );
}
