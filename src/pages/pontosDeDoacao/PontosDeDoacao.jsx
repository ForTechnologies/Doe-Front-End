import { Component } from "react";
import React from "react";
import { HeaderGeo } from '../../components/HeaderGeo/HeaderGeo'
import Mapa from "../../components/pontos/Mapa";
import Cards from '../../components/pontos/Cards';
import ModalEdtEndereco from '../../components/pontos/ModalEdtEndereco'
import ModalCardInfo from '../../components/pontos/ModalCardInfo'
import '../../styles/pontos.css';
import { Footer } from '../../components/Footer/Footer'


export default function PontosDeDoacao() {

    const [isModalEnderecoVisible, setModalEnderecoVisible] = React.useState(false);
    const [isModalCardVisible, setModalCardVisible] = React.useState(false);

    return (
        <div>
                        <HeaderGeo isLogado={true}></HeaderGeo>

            <div className="divEspacoHeaderTop"> 

            {isModalEnderecoVisible ? <ModalEdtEndereco onClose={() => setModalEnderecoVisible(false)} /> : null}
            {isModalCardVisible ? <ModalCardInfo onClose={() => setModalCardVisible(false)} /> : null}


            <section className="pontos">
                <Mapa onOpen={() => setModalEnderecoVisible(true)} />
                <Cards onOpen={() => setModalCardVisible(true)}/>
            </section>
            </div>

            <Footer></Footer>
        </div>

       
    )

};