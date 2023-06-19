import '../styles/main.scss';
import logo from '../images/logo-adalab.png';
function App() {
  return (
    <div>
      <form className='form'>
        <h2 className='form__title'>Información</h2>
        <section className='form__ask-info'>
          <p className='subtitle'>Cuéntanos sobre el proyecto</p>
          <hr className='line' />
        </section>
        <fieldset className='form__project'>
          <input className='form__project--input' type='text' placeholder='Nombre del proyecto' name='name' id='name' />
          <input className='form__project--input' type='text' name='slogan' id='slogan' placeholder='Slogan' />
          <section className='form__project--container'>
            <input className='form__project--input repo' type='text' name='repo' id='repo' placeholder='Repo' />
            <input className='form__project--input demo' type='text' placeholder='Demo' name='demo' id='demo' />
          </section>
          <input
            className='form__project--input'
            type='text'
            placeholder='Tecnologías'
            name='technologies'
            id='technologies'
          />
          <textarea
            className='form__project--textarea'
            type='text'
            placeholder='Descripción'
            name='desc'
            id='desc'
          ></textarea>
        </fieldset>

        <section className='form__ask-info author'>
          <p className='subtitle'>Cuéntanos sobre la autora</p>
        </section>

        <fieldset className='form__author'>
          <input className='form__author--input' type='text' placeholder='Nombre' name='autor' id='autor' />
          <input className='form__author--input' type='text' placeholder='Trabajo' name='job' id='job' />
        </fieldset>

        <section className='form__btn'>
          <button className='form__btn--item'>Subir foto de proyecto</button>
          <button className='form__btn--item'>Subir foto de autora</button>
        </section>
        <section className='form__submit'>
          <button className='form__btn--item btn-large' /* onClick='{handleClickCreateCard}' */>Crear Tarjeta</button>
        </section>

        <section className='form__card'>
          <span className='form__card--success'> La tarjeta ha sido creada: </span>
          <a href='' className='' target='_blank' rel='noreferrer'>
            {' '}
          </a>
        </section>
      </form>
      <footer className='footer'>
        <img className='footer__img' src={logo} alt='Logo de Adalab' />
      </footer>
    </div>
  );
}

export default App;
