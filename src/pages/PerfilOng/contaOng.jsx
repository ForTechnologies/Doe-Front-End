import { Link } from 'react-router-dom';
import CardCampanhasStyled from '../../components/Campanhas/style'
import ContaOngEstrutura from '../../components/PerfilOng/contaOngEstrutura';
import api from "../../api";
import Header from '../../components/Headeer/header';
import React, { useState, useEffect } from 'react';
import { set } from 'react-hook-form';

function ContaOng(props) {

  const estilo = {
    backgroundImage: `${props.urlImagem})`
  };


  const [posts, setPosts] = useState([])


  useEffect(() => {
    api
      .get("/campanhas/2")
      .then(res => {
        setPosts(res.data.reverse())
      }).catch((erro) => {
        console.log(erro);
      });
  }, []);

  function deletePost(id) {
    api.delete(`/campanhas/${id}`)
    set(posts.filter(posts => posts.id !== id))
    console.log(id)
  }


  return (
    <>

      <Header></Header>
      <ContaOngEstrutura></ContaOngEstrutura>

      <div className='divEspacoHeaderCampanha containerPaginaCampanha divEspacoHeaderCampanha'>
        <div className="container">
          <div className="music-boxes">
            {
              posts.map((posts, index) => (

                <CardCampanhasStyled>
                  <div className='cardCampanha divEspacoCardCampanha' key={index}>

                    <div className='divCapaCampanha'>
                      <img src={posts.urlImagem} alt= "imagem da postagem" style={estilo}></img>
                    </div>


                    <div className='divInformacoesCampanha'>
                      <div className='tituloCardCampanha'>

                        <input
                          disabled="true"
                          defaultValue={posts.titulo}
                        ></input>

                      </div>

                      <div className='descricaoCardCampanha'>
                        <textarea
                          disabled="true"
                          maxLength={250}
                          defaultValue={posts.descricao}

                        />

                      </div>
                      <div className='divBotaoCardCampanha'>
                        <Link to={{ pathname: `/atualizarCampan/${posts.id}` }} >
                          <button
                            className='botaoCardCampanha botaoAtualizarCampanha'>Atualizar</button>
                        </Link>
                        <button
                          className='botaoCardCampanha botaoExcluirCampanha'
                          onClick={() => deletePost(posts.id)}
                        > Excluir</button>
                      </div>
                    </div>
                  </div>
                </CardCampanhasStyled>
              ))}
          </div>
        </div>
      </div>


    </>

  )
}
export default ContaOng;