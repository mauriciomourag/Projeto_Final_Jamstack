import React from "react";
import {Link} from "gatsby";
import "./layout.css"
import Footer from "./footer";

export default function Layout ({children}){
    return (
        <main className="layout">
            <div className="header">
                <h3>Estudos Jamstack - Gastby</h3>
                <nav className="topnav">
                    <Link to="/">Início</Link>
                    <Link to="/pagina2">Pagina2</Link>
                    <Link to="/form">Fale Conosco</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <Footer copyrightYear="2023"></Footer>
        </main>
    )
}