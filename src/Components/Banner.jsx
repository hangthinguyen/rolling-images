import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import './Banner.css';

const Banner = ({id, img, href, genra, description}) => {
  return (
    <div className='banner-container' id = {id}>
        <a
            href={href}
            style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'block',
                height: '42vw',
                width: '100%',
                position: 'relative'
            }}
        >
            <div className='info-bottom'>
                <button className='btn'>
                    Stream now
                    <FontAwesomeIcon icon={faCirclePlay} className = 'play-btn'/>
                </button>
                <section className='bottom-right'>
                    <h3>{genra}</h3>
                    <div className='dot'></div>
                    <p>{description}</p>
                </section>
            </div>
        </a>
    </div>
  )
}

export default Banner