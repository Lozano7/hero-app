import authReducer from '../auth/authReducer';
import { types } from '../types/types';

describe('tests in AuthReducer', () => {
  test('Debe retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({
      logged: false,
    });
  });
  test('debe de autenticar y colocar el name del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'anthony',
      },
    };
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      name: 'anthony',
    });
  });

  test('debe borrar el nombre del usuario y devolver el logged en falso', () => {
    const action = {
      type: types.logout,
    };
    const state = authReducer({ logged: true, name: 'anthony' }, action);
    expect(state).toEqual({
      logged: false,
    });
  });
});
