const TestimonialsCard = ({ name, rating, comment }) => {
  return (
    <div className="testimonial-card">
      <p>Rating: {rating}⭐</p>
      <p>{comment}</p>
      <h4>- {name}</h4>
    </div>
  );
};

export default TestimonialsCard;