import React from "react";
import "./layout.css";
import "./flexbox.css";
import "./header.css";
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
      <header id="header">
        <div className="container">
          <div className="flex">
            <h1>{data.site.siteMetadata.title}</h1>
            <nav>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/about">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/diary/">Diary</Link>
              </li>
            </nav>
            <div className="contato">
              <li>
                <Link to="/form">Contato</Link>
              </li>
            </div>
          </div>
        </div>
      </header>

      <div className="main">{children}</div>
      <Footer copyrightYear="2023"></Footer>
    </main>
  );
}
