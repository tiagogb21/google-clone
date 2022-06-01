import React from 'react';

import './Menu.css';

import { paths1, paths2 } from '../../data/data';

import conta from '../../assets/img/conta.png';
import pesquisa from '../../assets/img/pesquisa.png';
import perfilEmpresa from '../../assets/img/perfil-empresa.png';
import maps from '../../assets/img/maps.png';
import youtube from '../../assets/img/youtube.png';
import play from '../../assets/img/play.png';
import noticias from '../../assets/img/noticias.png';
import mail from '../../assets/img/mail.png';
import meet from '../../assets/img/meet.png';
import chat from '../../assets/img/chat.png';
import contatos from '../../assets/img/contatos.png';
import drive from '../../assets/img/drive.png';
import agenda from '../../assets/img/agenda.png';
import tradutor from '../../assets/img/tradutor.png';
import fotos from '../../assets/img/fotos.png';
import duo from '../../assets/img/duo.png';
import shopping from '../../assets/img/shopping.png';

import financas from '../../assets/img/financas.png';
import documentos from '../../assets/img/documentos.png';
import planilhas from '../../assets/img/planilhas.png';
import apresentacoes from '../../assets/img/apresentacoes.png';
import livros from '../../assets/img/livros.png';
import blogger from '../../assets/img/blogger.png';
import hangouts from '../../assets/img/hangouts.png';
import keep from '../../assets/img/keep.png';
import jamboard from '../../assets/img/jamboard.png';
import aula from '../../assets/img/aula.png';
import earth from '../../assets/img/google-earth.png';
import colecoes from '../../assets/img/colecoes.png';
import arts from '../../assets/img/arts-culture.png';
import ads from '../../assets/img/ads.png';
import podcasts from '../../assets/img/podcasts.png';
import one from '../../assets/img/one.png';
import viagens from '../../assets/img/viagens.png';
import formularios from '../../assets/img/forms.png';

function Menu() {
  const imgs1 = [
    conta, pesquisa, perfilEmpresa, maps, youtube,
    play, noticias, mail, meet, chat, contatos,
    drive, agenda, tradutor, fotos, duo, shopping,
  ];
  const imgs2 = [
    financas, documentos, planilhas, apresentacoes,
    livros, blogger, hangouts, keep, jamboard,
    aula, earth, colecoes, arts, ads, podcasts,
    one, viagens, formularios,
  ];
  return (
    <section className="path__container">
      <section className="path1__box">
        {
          paths1.map((path, index) => (
            <a href={path.link} key={path.name}>
              <img src={imgs1[index]} alt={path.name} />
              {path.name}
            </a>
          ))
        }
      </section>
      <section className="path2__box">
        {
          paths2.map((path, index) => (
            <a href={path.link} key={path.name}>
              <img src={imgs2[index]} alt={path.name} />
              {path.name}
            </a>
          ))
        }
      </section>
      <button
        type="button"
      >
        mais do google
      </button>
    </section>
  );
}

export default Menu;
