
import * as React from 'react';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


import Localizacao from '../../assets/localizacao.png';
import Telefone from '../../assets/telefone.png';
import Email from '../../assets/email.png';

import RolagemGeo from '../../assets/rolagemGeo.png'

import '../CardsGeo/CardsGeo.css'


import dados from './dados';

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", filter: "invert(1)" }}
            onClick={onClick}
        />
    );
}

/* onOpen é a função para abrir o modal do card */
const Cards = ({ onOpen = () => { } }) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='div-cards'>
            <Typography variant='subtitle' sx={{ borderBottom: '5px solid #C1272D', textAlign: 'left' }}>
                PONTOS MAIS PROXIMOS:
            </Typography>
            <div className='container-cards'>

                <div className='cardsGeo'>
                    <div className='cardGeo tituloGeo'> <h2>ONG DOE ALIMENTOS </h2></div>
                    <div className='cardGeo'>
                        <img src={Localizacao} alt="" />
                        Rua Tauí, 354 - Jardim Paulista, São Paulo - SP
                    </div>
                    <div className='cardGeo'>
                        <img src={Telefone} alt="" />
                        11 92459-8735
                    </div>
                    <div className='cardGeo'>
                        <img src={Email} alt="" />
                        <span>ongdoealime@gmail.com</span>
                    </div>
                </div>

               
                <div className='cardsGeo'>
                    <div className='cardGeo tituloGeo'> <h2>ONG ANJOS DA NOITE</h2></div>
                    <div className='cardGeo'>
                        <img src={Localizacao} alt="" />
                        Rua jose egito, 678 - Jardim Paulista, São Paulo - SP
                    </div>
                    <div className='cardGeo'>
                        <img src={Telefone} alt="" />
                        11 93759-8705
                    </div>
                    <div className='cardGeo'>
                        <img src={Email} alt="" />
                        <span>anjosdanoite@gmail.com</span>
                    </div>
                </div>

                

                <div className='cardsGeo'>
                    <div className='cardGeo tituloGeo'> <h2>ONG CRIANCA FUTURO </h2></div>
                    <div className='cardGeo'>
                        <img src={Localizacao} alt="" />
                        Rua alanistexeira,  236 - Jardim Paulista, São Paulo - SP
                    </div>
                    <div className='cardGeo'>
                        <img src={Telefone} alt="" />
                        11 98954-8903
                    </div>
                    <div className='cardGeo'>
                        <img src={Email} alt="" />
                        <span>ongdoealime@gmail.com</span>
                    </div>
                </div>
           
           <div className='rolagemGeo'>
            <img src={RolagemGeo}></img>
           
           </div>



            </div>

        </div>



    )
}

export default Cards;