import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';

import logo from '../images/logo-adalab.png';
import user from '../images/user.jpg';


//Usar una variable objeto para todos los inputs

function App() {
  //const [name, setName] = useState('');
  const [data, setData] = useState({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    image:
      'https://cdn.shopify.com/s/files/1/0265/0272/5680/products/punto-de-cruz-diamante-gatito-lindo_433_540x.jpg',
    photo:
      'https://cdn.shopify.com/s/files/1/0265/0272/5680/products/punto-de-cruz-diamante-gatito-lindo_433_540x.jpg',
  });

  const [message, setMessage] = useState();

  const handleInput = (ev) => {
    //setData({ ...data, [ev.target.id]: ev.target.value });
    const clonedData = { ...data };
    clonedData[ev.target.id] = ev.target.value;
    setData(clonedData);
  };

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    callToApi(data).then((data) => {
      if (data.success) {
        setMessage(renderMsgSuccess(data));
        console.log(data.cardURL);
      } else {
        setMessage(renderMsgError(data));
      }
    });
  };

  const renderMsgSuccess = (data) => {
    return (
      <>
        <span className="form__card--success">
          {' '}
          La tarjeta ha sido creada:{' '}
        </span>
        <a
          href={data.cardURL}
          className="success__link"
          target="_blank"
          rel="noreferrer"
        >
          {data.cardURL}
        </a>
      </>
    );
  };

  const renderMsgError = () => {
    return (
      <span className="form__card--error">
        Ha habido un error al crear la tarjeta
      </span>
    );
  };

  return (
    <div className="container">
      <Header logo={logo}/>
      <main className="main">
        <section className="description">
          <h1 className="description__title">Proyectos Molones</h1>
          <p className="description__text">
            Escaparate en línea para recoger ideas a través de la tecnología.
          </p>
          <button className="description__button">ver proyectos</button>
        </section>
        <section className="mainContainer">
          <Preview image={user} data={data}/>
          <Form data={data} message={message}/>
        </section>
      </main>
      <Footer logo={logo}/>
    </div>
  );
}

export default App;
