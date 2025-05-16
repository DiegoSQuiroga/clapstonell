const SpecialsCard = ({ title, price, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title} <span>{price}</span></h3>
        <p>{description}</p>
        <button>Order for delivery</button>
      </div>
    </div>
  );
};

export default SpecialsCard;