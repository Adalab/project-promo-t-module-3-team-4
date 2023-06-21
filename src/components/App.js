import '../styles/App.scss';
import { useState } from 'react';

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
    author: '',
    job: '',
  });

  const handleInputName = (ev) => {
    //setName(ev.target.value);
    setData({ name: ev.target.value, slogan: data.slogan, repo: data.repo, demo: data.demo, technologies: data.technologies, desc: data.desc, author: data.author, job: data.job });
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header__title">
        <i className="fa-solid fa-laptop-code header__laptopIcon"></i>
        <p className="header__text">Proyectos Molones</p>
        </div>
        <img className="header__logo" src={logo} alt="logo Adalab" />
      </header>
      <main className="main">
        <section className="description">
          <h1 className="description__title">Proyectos Molones</h1>
          <p className="description__text">
            Escaparate en línea para recoger ideas a través de la tecnología.
          </p>
          <button className="description__button">ver proyectos</button>
        </section>
        <section className='mainContainer'>
        <section className="preview">
          <div className="preview__imageContainer"></div>

          <section className="card">
            <div className="card__author">
              <img className="card__author--image" src={user} alt="user" />
              <p className="card__author--job">Full Stack Developer</p>
              <p className="card__author--name">Emmelie Björklund</p>
            </div>
            <div className="card__infoProject">
              <p className="card__infoProject--subtitle">
                Personal Project Card
              </p>
              <hr className="line" />

              <h2 className="card__infoProject--title">
                {data.name || 'Elegant Workspace'}
              </h2>
              <p className="card__infoProject--slogan">{data.slogan || 'Diseños Exclusivos'}</p>
              <p className="card__infoProject--desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!
              </p>
              <div className="card__technologies">
                <p className="card__technologies--text">React JS, MongoDB</p>
                <div className="card__technologies--icons">
                  <i className="fa-solid fa-globe card__technologies--globe"></i>
                  <i className="fa-brands fa-github card__technologies--github"></i>
                </div>
              </div>
            </div>
          </section>
        </section>
        <form className="form">
          <h2 className="form__title">Información</h2>
          <section className="form__ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>
          <fieldset className="form__project">
            <input
              className="form__project--input"
              type="text"
              placeholder="Nombre del proyecto"
              name="name"
              id="name"
              value={data.name}
              onInput={handleInputName}
            />
            <input
              className="form__project--input"
              type="text"
              name="slogan"
              id="slogan"
              placeholder="Slogan"
            />
            <section className="form__project--container">
              <input
                className="form__project--input repo"
                type="text"
                name="repo"
                id="repo"
                placeholder="Repo"
              />
              <input
                className="form__project--input demo"
                type="text"
                placeholder="Demo"
                name="demo"
                id="demo"
              />
            </section>
            <input
              className="form__project--input"
              type="text"
              placeholder="Tecnologías"
              name="technologies"
              id="technologies"
            />
            <textarea
              className="form__project--textarea"
              type="text"
              placeholder="Descripción"
              name="desc"
              id="desc"
            ></textarea>
          </fieldset>

          <section className="form__ask-info author">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="form__author">
            <input
              className="form__author--input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
            />
            <input
              className="form__author--input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
            />
          </fieldset>

          <section className="form__btn">
            <button className="form__btn--item">Subir foto de proyecto</button>
            <button className="form__btn--item">Subir foto de autora</button>
          </section>
          <section className="form__submit">
            <button
              className="form__btn--item btn-large" /* onClick='{handleClickCreateCard}' */
            >
              Crear Tarjeta
            </button>
          </section>

          <section className="form__card">
            <span className="form__card--success">
              {' '}
              La tarjeta ha sido creada:{' '}
            </span>
            <a href="" className="" target="_blank" rel="noreferrer">
              {' '}
            </a>
          </section>
        </form>
        </section>
      </main>
      <footer className="footer">
        <img className="footer__img" src={logo} alt="Logo de Adalab" />
      </footer>
    </div>
  );
}

export default App;
