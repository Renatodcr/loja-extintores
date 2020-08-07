import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp, IoMdBusiness } from "react-icons/io";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaMapMarker } from "react-icons/fa";
import { GiFireExtinguisher } from "react-icons/gi";
import { TiBusinessCard } from "react-icons/ti";

function Contato() {
    return (
        <div className="conatiner">
            <header>
                <div>
                    <GiFireExtinguisher className="img-head" />
                    <h1 className="titulo">Extintores 9 de Julho</h1>
                </div>
                <span>
                    <input type="checkbox" id="check" />

                    <label htmlFor="check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <nav>
                        <Link className="link-nav" to="/">Home</Link>
                        <Link className="link-nav" to="/extintores">Extintores</Link>
                        <Link className="link-nav" to="/empresa">Empresa</Link>
                        <Link className="link-nav" to="/contato">Contato</Link>
                    </nav>
                </span>
            </header>
            <div className="contato1">
                <div className="box-contato1">
                    <h2 >Contato</h2>
                    <p><IoMdBusiness /> CNPJ: 10.290.523/0001-73</p>
                    <p><FaMapMarker /> Rua São Pedro, 431 - São Judas Tadeu - Salto-SP</p>
                    <p><AiFillPhone /> Telefone: (11)4021-3579</p>
                    <a href="https://api.whatsapp.com/send?phone=5511991011682" target="_blank" ><IoLogoWhatsapp color="#01e675" /> Whatsapp: (11)99101-1682</a>
                    <a href="mailto:extintoresnovedejulho@yahoo.com.br" target="_blank"><AiFillMail color="#612cf5"/> Email: extintoresnovedejulho@yahoo.com.br</a> </div>
            </div>
            <footer>
                <p>Copyright © 2020 Extintores 9 de Julho Ltda.</p>
                <div>
                    <a href="https://portifoliorenatoribeiro.netlify.app" target="_blank"><TiBusinessCard color="#612cf5"/> Renato Ribeiro - Criação de Sites</a>
                    <a href="https://api.whatsapp.com/send?phone=5511944011960" target="_blank"><IoLogoWhatsapp color="#01e675" /> (11) 94401-1960</a>
                </div>
            </footer>
        </div>
    );
}

export default Contato;