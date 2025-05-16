import SpecialsCard from './SpecialsCard';
import salad from '../assets/images/greek salad.jpg';
import bruschetta from '../assets/images/bruchetta.svg';
import dessert from '../assets/images/lemon dessert.jpg';

const Specials = () => {
  const dishes = [
    { title: 'Greek Salad', price: '$12.99', description: 'Fresh vegetables, feta cheese...', image: salad },
    { title: 'Bruschetta', price: '$5.99', description: 'Grilled bread with tomatoes...', image: bruschetta },
    { title: 'Lemon Dessert', price: '$4.99', description: 'Sweet lemon dessert...', image: dessert },
  ];

  return (
    <section className="specials" id="menu">
      <div className="specials-header">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-grid">
        {dishes.map((dish, index) => (
          <SpecialsCard key={index} {...dish} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
