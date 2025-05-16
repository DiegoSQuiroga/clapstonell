import { useNavigate } from 'react-router-dom';

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');

    setTimeout(() => {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>¡CONFIRMED PAPURRI!</h1>
      <p>Looking forward to see you 😁🦍.</p>
      <button
        onClick={handleGoHome}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#F4CE14',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Back to top
      </button>
    </div>
  );
};

export default ConfirmedBooking;