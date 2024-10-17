import Carousel from 'react-bootstrap/Carousel';
import hero1 from './../assets/i.jpg'
import hero2 from './../assets/o.jpg'
import hero3 from './../assets/0162d3974aff83208890c8e9a5a9c77f.jpg'

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
            className="d-blok w-100"
            src={hero1}
            alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-blok w-100"
            src={hero2}
            alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-blok w-100"
            src={hero3}
            alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;