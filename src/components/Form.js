import '../styles/layout/Form.scss';
import GetAvatar from './GetAvatar';

const Form = (props) => {

  const handleInput = (ev) => {
    //setData({ ...data, [ev.target.id]: ev.target.value });
    props.handleChangeForm(ev.target.id, ev.target.value);
    
  };
  
  const handleImage = (fichero) => {
    props.handleChangeForm ('image', fichero);
  }

  const handlePhoto = (fichero) => {
    props.handleChangeForm('photo', fichero);
  }

  return (
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
          value={props.data.name}
          onInput={handleInput}
        />
        <input
          className="form__project--input"
          type="text"
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          value={props.data.slogan}
          onInput={handleInput}
        />
        <section className="form__project--container">
          <input
            className="form__project--input repo"
            type="text"
            name="repo"
            id="repo"
            placeholder="Repo"
            value={props.data.repo}
            onInput={handleInput}
          />
          <input
            className="form__project--input demo"
            type="text"
            placeholder="Demo"
            name="demo"
            id="demo"
            value={props.data.demo}
            onInput={handleInput}
          />
        </section>
        <input
          className="form__project--input"
          type="text"
          placeholder="Tecnologías"
          name="technologies"
          id="technologies"
          value={props.data.technologies}
          onInput={handleInput}
        />
        <textarea
          className="form__project--textarea"
          type="text"
          placeholder="Descripción"
          name="desc"
          id="desc"
          value={props.data.desc}
          onInput={handleInput}
        ></textarea>
      </fieldset>

      <section className="form__ask-info autor">
        <p className="subtitle">Cuéntanos sobre la autora</p>
        <hr className="line" />
      </section>

      <fieldset className="form__autor">
        <input
          className="form__autor--input"
          type="text"
          placeholder="Nombre"
          name="autor"
          id="autor"
          value={props.data.autor}
          onInput={handleInput}
        />
        <input
          className="form__autor--input"
          type="text"
          placeholder="Trabajo"
          name="job"
          id="job"
          value={props.data.job}
          onInput={handleInput}
        />
      </fieldset>

      <section className="form__btn">
        <GetAvatar text="Subir foto de proyecto"
        avatar={props.data.image}
        updateAvatar={handleImage}
        />
        <GetAvatar text="Subir foto de autora"
        avatar={props.data.photo}
        updateAvatar={handlePhoto}/>
      </section>
      <section className="form__submit">
        <button
          className="form__btn-large"
          onClick={props.handleClickCreateCard}
        >
          Crear Tarjeta
        </button>
      </section>

      <section className="form__card">{props.message}</section>
    </form>
  );
};

export default Form;
