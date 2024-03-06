import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fish1 from "../Images/fish1.jpg";
import fish2 from "../Images/fish2.jpg";
import fish3 from "../Images/fish3.jpg";
import fish4 from "../Images/fish4.jpg";
import fish5 from "../Images/fish5.jpg";




const Slider=()=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='slider-background' interval={2000}>
     
        <div className='d-flex flex-row justify-content-center align-items-center '>
        <img 
          style={{height:'300px',width:'100%',position:'cover'}}
          src={fish1}
          alt='First slide'
        />
 
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-background1' interval={1000}>
      <div className='d-flex flex-row justify-content-center align-items-center' >
        <img 
          style={{height:'300px',width:'100%',position:'cover'}}
          src={fish2}
          alt='First slide'
        />
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-background2' interval={1000}>
    
      <div className='d-flex flex-row justify-content-center align-items-center'>
        <img 
          style={{height:'300px',width:'100%',position:'cover'}}
          src={fish3}
          alt='First slide'
        />
        </div>
      </Carousel.Item>
      <Carousel.Item className='slider-background3' interval={1000}>
    
    <div className='d-flex flex-row justify-content-center align-items-center'>
      <img 
        style={{height:'300px',width:'100%',position:'cover'}}
        src={fish4}
        alt='First slide'
      />
      </div>
    </Carousel.Item>
    <Carousel.Item className='slider-background3' interval={1000}>
    
    <div className='d-flex flex-row justify-content-center align-items-center'>
      <img 
        style={{height:'300px',width:'100%', position:'cover'}}
        src={fish5}
        alt='First slide'
      />
      </div>
    </Carousel.Item>
    </Carousel>
  );
}

export default Slider;