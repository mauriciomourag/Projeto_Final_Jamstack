import React from "react";
import {Link} from "gatsby";
import "./layout.css"

export default function Layout ({children}){
    return (
        <main className="layout">
            <div className="header">
                <h3>Estudos Jamstack - Gastby</h3>
                <nav className="topnav">
                    <Link to="/">Início</Link>
                    <Link to="/pagina2">Pagina2</Link>
                </nav>
            </div>
            <div className="main">
                {children}
            </div>
            <div className="footer">
                <h3>Rodapé</h3>
            </div>
        </main>
    )
}