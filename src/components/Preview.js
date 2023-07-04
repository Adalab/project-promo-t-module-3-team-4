import '../styles/layout/Preview.scss';
import image from '../images/cover.jpeg';
import user from '../images/user.jpg';

const Preview = (props) => {
  return (
    <section className='preview'>
      <div className='preview__imageContainer' style={{ backgroundImage: `url(${props.data.photo || image})` }}></div>
      <section className='card'>
        <div className='card__autor'>
          <img className='card__autor--image' src={props.data.image || user} alt='user' />
          <p className='card__autor--job'>{props.data.job || 'Full Stack Developer'}</p>
          <p className='card__autor--name'>{props.data.autor || 'Emmelie Björklund'}</p>
        </div>
        <div className='card__infoProject'>
          <p className='card__infoProject--subtitle'>Personal Project Card</p>
          <hr className='line' />

          <h2 className='card__infoProject--title'>{props.data.name || 'Elegant Workspace'}</h2>
          <p className='card__infoProject--slogan'>{props.data.slogan || 'Diseños Exclusivos'}</p>
          <p className='card__infoProject--desc'>
            {props.data.desc ||
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus? Voluptates at hic aliquam porro ad suscipit harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!'}
          </p>
          <div className='card__technologies'>
            <p className='card__technologies--text'>{props.data.technologies || 'React JS, MongoDB'}</p>
            <div className='card__technologies--icons'>
              <a href={props.data.demo} className='icons__link' target='_blank' rel='noreferrer'>
                <i className='fa-solid fa-globe card__technologies--globe'></i>
              </a>
              <a href={props.data.repo} className='icons__link' target='_blank' rel='noreferrer'>
                <i className='fa-brands fa-github card__technologies--github'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Preview;
