import '../styles/layout/Footer.scss';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <img className='footer__img' src={props.logo} alt='Logo de Adalab' />
    </footer>
  );
};

export default Footer;
