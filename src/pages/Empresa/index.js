import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import { GiFireExtinguisher } from "react-icons/gi";
import empresa from '../../img/quem-somos.jpg';
import { TiBusinessCard } from "react-icons/ti";

function Empresa() {
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
            <div className="contain-empresa">
                <section className="descricao desc-empresa">
                    <h2>Empresa</h2>
                    <p><strong>Extintores 9 de Julho</strong> atua em Salto-SP há 30 anos, prestando serviços de vendas e recargas de extintores.</p><br/>
                    <p>Temos parcerias com engenheiros para sua comodidade para todos os tipos de documentos.</p><br/>
                    <p>Trabalhamos e entregamos seu pedido à qualquer dia e horário sem cobrar taxas e nem instalações.</p><br/>
                    <p>Para mais informações entre em contato, será um prazer atendê-lo.</p>
                </section>

                <section className="img-empresa2">
                    <figure>
                        <img className="img-emp2" src={empresa} alt="" />
                    </figure>
                </section>
            </div>
            <footer>
                <p>Copyright © 2020 Extintores 9 de Julho Ltda.</p>
                <div>
                    <a href="https://portifoliorenatoribeiro.netlify.app" target="_blank"><TiBusinessCard color="#612cf5" /> Renato Ribeiro - Criação de Sites</a>
                    <a href="https://api.whatsapp.com/send?phone=5511944011960" target="_blank"><IoLogoWhatsapp color="#01e675" /> (11) 94401-1960</a>
                </div>
            </footer>
        </div>
    );
}

export default Empresa;