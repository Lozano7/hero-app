import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import getHeroById from '../../helpers/getHeroById';

function HeroScreen() {
  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to='/' />;
  }
  const { id, superhero, alter_ego, first_appearance, characters, publisher } =
    hero;
  const imagePath = `/assets/${id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className='row mt-5 '>
      <div className='col-4 animate__animated animate__backInLeft'>
        <img src={imagePath} alt={superhero} className='img-thumbnail' />
      </div>
      <div className='col-8 animate__animated animate__fadeIn'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>First appearance:</b> {first_appearance}
          </li>
          <li className='list-group-item'>
            <b>Publisher:</b> {publisher}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>

        <button className='btn btn-outline-info' onClick={handleReturn}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default HeroScreen;
