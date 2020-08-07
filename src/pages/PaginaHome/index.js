import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import empresa from '../../img/quem-somos.jpg';
import extintorpqsbc4 from '../../img/extintor1.jpg';
import extintorpqsbc6 from '../../img/extintor2.jpg';
import extintorpqsbc8 from '../../img/extintor3.jpg';
import extintorpqsbc12 from '../../img/extintor4.jpg';
import extintorpqsbc20 from '../../img/extintor5.jpg';
import extintorpqsbc50 from '../../img/extintor6.jpg';
import extintorap10 from '../../img/extintor7.jpg';
import extintorco24 from '../../img/extintor8.jpg';
import extintorco26 from '../../img/extintor9.jpg';
import extintorco210 from '../../img/extintor10.jpg';
import extintorpqsabc4 from '../../img/extintor11.jpg';
import extintorpqsabc6 from '../../img/extintor12.jpg';
import extintorpqsabc8 from '../../img/extintor13.jpg';
import extintorpqsabc12 from '../../img/extintor14.jpg';
import extintorpqsabc20 from '../../img/extintor15.jpg';
import { IoLogoWhatsapp, IoMdBusiness } from "react-icons/io";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { FaMapMarker } from "react-icons/fa";
import { GiFireExtinguisher } from "react-icons/gi";
import { TiBusinessCard } from "react-icons/ti";


function Home() {
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
            <div className="empresa">
                <section className="descricao">
                    <h2>Empresa</h2>
                    <p><strong>Extintores 9 de Julho</strong> atua em Salto-SP há 30 anos, prestando serviços de vendas e recargas de extintores.</p><br/>
                    <p>Temos parcerias com engenheiros para sua comodidade para todos os tipos de documentos.</p><br/>
                    <p>Trabalhamos e entregamos seu pedido à qualquer dia e horário sem cobrar taxas e nem instalações.</p><br/>
                    <p>Para mais informações entre em contato, será um prazer atendê-lo.</p>
                </section>

                <section className="img-empresa">
                    <figure>
                        <img className="img-emp" src={empresa} alt="" />
                    </figure>
                </section>
            </div>
            <div className="produtos">
                <section className=" descricao-produtos">
                    <div>
                        <h2>Extintores</h2>
                        <ul>
                            <li>- Extintores de Incêndio CO2 6kg, Dióxido de Carbono.</li>
                            <li>- Extintores de Incêndio AP 10 Lt Água Pressurizada.</li>
                            <li>- Extintores de Incêndio PQS 4KG Pó Químico Seco.</li>
                            <li>- Extintores de Incêndio Sobre Rodas (carretas).</li>
                            <li>- Extintores Sobre Rodas - Água, Pó Químico e CO2.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Classificação</h3>
                        <p>Água Pressurizada - Classe A</p>
                        <p>Pó Quimico - Classe BC</p>
                        <p>Pó Quimico - Classe ABC</p>
                        <p>Gás Carbonico - Classe BC</p>
                        <p>Pó Químico Premium - Classe ABC</p>
                        <p>Pó Químico Residencial - Classe ABC</p>
                        <p>Espuma Mecânica - Classe AB</p>
                        <p>Classe D - Metais Pirofóricos</p>
                        <p>Classe K - Cozinhas</p>
                        <p>Halotron</p>
                    </div>
                </section>
                <section className="extintores">
                    <figure className="card-estintores">
                        <img src={extintorpqsbc4} alt="" />
                        <p>Extintor PQS-BC 4 kg (10 B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorpqsbc6} alt="" />
                        <p>Extintor PQS-BC 6 kg (20 B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorpqsbc8} alt="" />
                        <p>Extintor PQS-BC 8 kg (30 B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorpqsbc12} alt="" />
                        <p>Extintor PQS-BC 12 kg (40 B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorpqsbc20} alt="" />
                        <p>Extintor PQS-BC 20 kg (40 B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorpqsbc50} alt="" />
                        <p>Extintor PQS-BC 50 kg (80 B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorap10} alt="" />
                        <p>Extintor AP 10 L (2 A)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorco24} alt="" />
                        <p>Extintor CO2 4 kg (5B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorco26} alt="" />
                        <p>Extintor CO2 6 kg (5B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorco210} alt="" />
                        <p>Extintor CO2 10 kg (5B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorpqsabc4} alt="" />
                        <p>Extintor PQS-ABC 4 kg (2A - 20B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorpqsabc6} alt="" />
                        <p>Extintor PQS-ABC 6 kg (2A - 20B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorpqsabc8} alt="" />
                        <p>Extintor PQS-ABC 8 kg (4A - 30B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorpqsabc12} alt="" />
                        <p>Extintor PQS-ABC 12 kg (3A - 30B)</p>
                    </figure>
                    <figure className="card-estintores">
                        <img src={extintorpqsabc20} alt="" />
                        <p>Extintor PQS-ABC 20 kg (6A - 40B)</p>
                    </figure>
                </section>
            </div>
            <div className="contato">
                <div className="box-contato">
                    <h2 >Contato</h2>
                    <p><IoMdBusiness /> CNPJ: 10.290.523/0001-73</p>
                    <p><FaMapMarker /> Rua São Pedro, 431 - São Judas Tadeu - Salto-SP</p>
                    <p><AiFillPhone /> Telefone: (11)4021-3579</p>
                    <a href="https://api.whatsapp.com/send?phone=5511991011682" target="_blank" ><IoLogoWhatsapp color="#01e675" /> Whatsapp: (11)99101-1682</a>
                    <a href="mailto:extintoresnovedejulho@yahoo.com.br" target="_blank"><AiFillMail color="#612cf5"/> Email: extintoresnovedejulho@yahoo.com.br</a>
                </div>
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

export default Home;