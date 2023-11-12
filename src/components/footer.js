import React from "react";
import * as footerStyles from "./footer.module.css";

export default function Footer(props){
    return(
        <p className={footerStyles.footer}>
           &copy; {props.copyrightYear} Estudos de gatsby 
        </p>
    )
}