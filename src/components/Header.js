import '../styles/layout/Header.scss';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header__title'>
        <i className='fa-solid fa-laptop-code header__laptopIcon'></i>
        <p className='header__text'>Proyectos Molones</p>
      </div>
      <div className='header__img'>
        <img className='header__logo' src={props.logo} alt='logo Adalab' />
      </div>
    </header>
  );
};

export default Header;
