import '../styles/App.scss';
import cover from '../images/cover.jpeg';
import laptop from '../images/laptop.svg';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';

function App() {
  return (
    <div className="container">
      <header className="header">
        <i className="fa-solid fa-laptop-code header__laptopIcon"></i>
        <p className="header__text">Proyectos Molones</p>
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
        <section className="preview">
          <div className="preview__imageContainer"></div>

          <section className="card">
            <div className="card__author">
              <img
                className="card__author--image"
                src={user}
                alt="user Image"
              />
              <p className="card__author--job">Full Stack Developer</p>
              <p className="card__author--name">Emmelie Björklund</p>
            </div>
            <div className="card__infoProject">
              <p className="card__infoProject--subtitle">
                Personal Project Card
              </p>
              <hr className="line" />

              <h2 className="card__infoProject--title">Elegant Workspace</h2>
              <p className="card__infoProject--slogan">Diseños Exclusivos</p>
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
      </main>
    </div>
  );
}

export default App;
