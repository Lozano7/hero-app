import { Link } from 'react-router-dom';

const HeroCard = ({ id, superhero, alter_ego, first_appearance }) => {
  const imagePath = `/assets/${id}.jpg`;
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card h-100'>
        <div className='row no-gutters h-100'>
          <div className='col-4'>
            <img className='card-img h-100' src={imagePath} alt={superhero} />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              <p className='card-text'>{first_appearance}</p>
              <Link to={`/hero/${id}`}>mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
