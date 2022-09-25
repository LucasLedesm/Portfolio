import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsMailbox2 } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => <footer className="footer page-footer font-small">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
                <h6>Designed and Developed by Lucas Ledesma</h6>
            </div>
            <div className="col-md-3">
                <ul className="list-unstyled">
                    <li ><a className="btn " href="https://ar.linkedin.com/"><BsLinkedin /></a></li>
                    <li ><a className="btn " href="https://mail.google.com/"><BsMailbox2 /></a></li>
                    <li ><a className="btn " href="www.google.com"><BsWhatsapp /></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

export default Footer