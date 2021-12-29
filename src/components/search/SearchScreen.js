import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getHeroesByName from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../hero/HeroCard';

function SearchScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search Hero</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search</h4>
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='hero name'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}
            />
            <button type='submit' className='btn btn-outline-danger mt-2'>
              Search Now
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          {q === '' ? (
            <div className='alert alert-info'>
              Please enter a hero name to search
            </div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className='alert alert-danger'>
                No hero found with the name <strong>{q}</strong>
              </div>
            )
          )}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} className='list-group-item'>
              {hero.name}
            </HeroCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchScreen;
