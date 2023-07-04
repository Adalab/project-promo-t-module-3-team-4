import '../styles/App.scss';
import { useState } from 'react';
import Header from './Header';
import Preview from './Preview';
import Form from './Form';
import Footer from './Footer';
import logo from '../images/logo-adalab.png';
import user from '../images/user.jpg';
import ls from '../services/localStorage';

//Usar una variable objeto para todos los inputs

function App() {
  const [data, setData] = useState(
    ls.get('data', {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    })
  );

  const clearData = () => {
    setData({
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    });
  };

  const handleChangeForm = (propName, value) => {
    const clonedData = { ...data, [propName]: value };
    setData(clonedData);
  };

  return (
    <div className='container'>
      <Header logo={logo} />
      <main className='main'>
        <section className='description'>
          <h1 className='description__title'>Proyectos Molones</h1>
          <p className='description__text'>Escaparate en línea para recoger ideas a través de la tecnología.</p>
          <button className='description__button'>ver proyectos</button>
        </section>
        <section className='mainContainer'>
          <Preview image={user} data={data} />
          <Form data={data} handleChangeForm={handleChangeForm} clearData={clearData} />
        </section>
      </main>
      <Footer logo={logo} />
    </div>
  );
}

export default App;
