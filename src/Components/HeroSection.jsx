import photo from '../assets/images/restauranfood.jpg';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Your Mediterranean escape in the heart of Chicago. Located just steps from the city's vibrant downtown, our restaurant brings the rich flavors of the Mediterranean coast to your table. From Greek moussaka and Spanish tapas to Lebanese hummus and Italian seafood pasta, we offer a diverse menu that celebrates the best of Mediterranean cuisine.</p>
        <a href="#reservation"><button>Reserve a Table</button></a>
      </div>
      <div className="hero-image">
        <img src={photo} alt="Restaurant" />
      </div>
    </section>
  );
};

export default HeroSection;
