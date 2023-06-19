import '../styles/App.scss';
import cover from '../images/cover.jpeg';
import laptop from '../images/laptop.svg';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpeg';


function App() {
  return (
    <div className="container">
      <header className="header">
        <img className="header__laptopIcon"src={laptop} alt="laptop" />
        <p className="header__text">Proyectos Molones</p>
        <img className="header__logo" src={logo} alt="logo Adalab" />
      </header>
      <main className="main">
        <section className="description">
          <h1 className="description__title">Proyectos Molones</h1>
          <p className="description__text">Escaparate en línea para recoger ideas a través de la tecnología.</p>
          <button className="description__button">ver proyectos</button>
        </section>
        <section className="preview">
          <img className="image" src={cover} alt="image of web" />

          <section className="autor">
            <div className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title">Elegant Workspace</h2>
              <p className="slogan">Diseños Exclusivos</p>
              <p className="desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!
              </p>
              <div className="technologies">
                <p className="text">React JS, MongoDB</p>
              </div>
            </div>

            <div className="info-autor">
              <img className="image" src={user} alt="user Image" />
              <p className="job">Full Stack Developer</p>
              <p className="name">Emmelie Björklund</p>
            </div>
          </section>
        </section>
        </main>
    </div>
  );
}

export default App;
