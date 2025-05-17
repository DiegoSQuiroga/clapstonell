import Slider from 'react-slick';
import TestimonialsCard from './TestimonialsCard';

const Testimonials = () => {
  const testimonials = [
    { name: 'John', rating: 5, comment: 'Amazing food!' },
    { name: 'Lisa', rating: 4, comment: 'Loved the ambiance.' },
    { name: 'Mike', rating: 5, comment: 'Great service!' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <TestimonialsCard key={index} {...t} />
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
