import '../styles/App.scss';
import { useState, useEffect } from 'react';
import callToApi from '../services/api';

import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';
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
    image: 'https://cdn.shopify.com/s/files/1/0265/0272/5680/products/punto-de-cruz-diamante-gatito-lindo_433_540x.jpg',
    photo: 'https://cdn.shopify.com/s/files/1/0265/0272/5680/products/punto-de-cruz-diamante-gatito-lindo_433_540x.jpg',
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
    callToApi(data)
    .then((data) => {
      if (data.success) {
      setMessage(renderMsgSuccess(data));
      console.log(data.cardURL);
    } else {
      setMessage(renderMsgError(data));
    }
    })
    };

    const renderMsgSuccess = (data) => {
      return <><span className='form__card--success'> La tarjeta ha sido creada: </span>
      <a href={data.cardURL} className='success__link' target='_blank' rel='noreferrer'>
        {data.cardURL}
      </a></>
    };

    const renderMsgError = () => {
      return <span className='form__card--error'>Ha habido un error al crear la tarjeta</span>
    };
  
  return (
    <div className='container'>
      <header className='header'>
        <div className='header__title'>
          <i className='fa-solid fa-laptop-code header__laptopIcon'></i>
          <p className='header__text'>Proyectos Molones</p>
        </div>
        <div className='header__img'>
          <img className='header__logo' src={logo} alt='logo Adalab' />
        </div>
      </header>
      <main className='main'>
        <section className='description'>
          <h1 className='description__title'>Proyectos Molones</h1>
          <p className='description__text'>Escaparate en línea para recoger ideas a través de la tecnología.</p>
          <button className='description__button'>ver proyectos</button>
        </section>
        <section className='mainContainer'>
          <section className='preview'>
            <div className='preview__imageContainer'></div>

            <section className='card'>
              <div className='card__autor'>
                <img className='card__autor--image' src={user} alt='user' />
                <p className='card__autor--job'>{data.job || 'Full Stack Developer'}</p>
                <p className='card__autor--name'>{data.autor || 'Emmelie Björklund'}</p>
              </div>
              <div className='card__infoProject'>
                <p className='card__infoProject--subtitle'>Personal Project Card</p>
                <hr className='line' />

                <h2 className='card__infoProject--title'>{data.name || 'Elegant Workspace'}</h2>
                <p className='card__infoProject--slogan'>{data.slogan || 'Diseños Exclusivos'}</p>
                <p className='card__infoProject--desc'>
                  {data.desc ||
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
                </p>
                <div className='card__technologies'>
                  <p className='card__technologies--text'>{data.technologies || 'React JS, MongoDB'}</p>
                  <div className='card__technologies--icons'>
                    <a href={data.demo} className='icons__link' target='_blank' rel='noreferrer'>
                      <i className='fa-solid fa-globe card__technologies--globe'></i>
                    </a>
                    <a href={data.repo} className='icons__link' target='_blank' rel='noreferrer'>
                      <i className='fa-brands fa-github card__technologies--github'></i>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <form className='form'>
            <h2 className='form__title'>Información</h2>
            <section className='form__ask-info'>
              <p className='subtitle'>Cuéntanos sobre el proyecto</p>
              <hr className='line' />
            </section>
            <fieldset className='form__project'>
              <input
                className='form__project--input'
                type='text'
                placeholder='Nombre del proyecto'
                name='name'
                id='name'
                value={data.name}
                onInput={handleInput}
              />
              <input
                className='form__project--input'
                type='text'
                name='slogan'
                id='slogan'
                placeholder='Slogan'
                value={data.slogan}
                onInput={handleInput}
              />
              <section className='form__project--container'>
                <input
                  className='form__project--input repo'
                  type='text'
                  name='repo'
                  id='repo'
                  placeholder='Repo'
                  value={data.repo}
                  onInput={handleInput}
                />
                <input
                  className='form__project--input demo'
                  type='text'
                  placeholder='Demo'
                  name='demo'
                  id='demo'
                  value={data.demo}
                  onInput={handleInput}
                />
              </section>
              <input
                className='form__project--input'
                type='text'
                placeholder='Tecnologías'
                name='technologies'
                id='technologies'
                value={data.technologies}
                onInput={handleInput}
              />
              <textarea
                className='form__project--textarea'
                type='text'
                placeholder='Descripción'
                name='desc'
                id='desc'
                value={data.desc}
                onInput={handleInput}
              ></textarea>
            </fieldset>

            <section className='form__ask-info autor'>
              <p className='subtitle'>Cuéntanos sobre la autora</p>
              <hr className='line' />
            </section>

            <fieldset className='form__autor'>
              <input
                className='form__autor--input'
                type='text'
                placeholder='Nombre'
                name='autor'
                id='autor'
                value={data.autor}
                onInput={handleInput}
              />
              <input
                className='form__autor--input'
                type='text'
                placeholder='Trabajo'
                name='job'
                id='job'
                value={data.job}
                onInput={handleInput}
              />
            </fieldset>

            <section className='form__btn'>
              <button disabled className='form__btn--item'>
                Subir foto de proyecto
              </button>
              <button disabled className='form__btn--item'>
                Subir foto de autora
              </button>
            </section>
            <section className='form__submit'>
              <button className='form__btn--item btn-large' onClick={handleClickCreateCard}>
                Crear Tarjeta
              </button>
            </section>

            <section className='form__card'>{message}</section>
          </form>
        </section>
      </main>
      <footer className='footer'>
        <img className='footer__img' src={logo} alt='Logo de Adalab' />
      </footer>
    </div>
  );
}

export default App;
