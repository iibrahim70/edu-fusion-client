import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroImageOne from '../../assets/hero/1.jpg';
import heroImageTwo from '../../assets/hero/2.jpg';
import heroImageThree from '../../assets/hero/3.jpg';
import heroImageFour from '../../assets/hero/4.avif';

const MyCarousel = () => {
  return (
    <div className='mt-20'>
      <Carousel>
        <div style={{ height: '100vh' }}>
          <img src={heroImageOne} />
        </div>
        <div style={{ height: '100vh' }}>
          <img src={heroImageTwo} />
        </div>
        <div style={{ height: '100vh' }}>
          <img src={heroImageThree} />
        </div>
        <div style={{ height: '100vh' }}>
          <img src={heroImageFour} />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
