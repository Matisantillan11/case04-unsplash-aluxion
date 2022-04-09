import React, {createContext, useReducer} from 'react';
import {Picture} from '../../interfaces/interfaces';
import {unsplashAPI} from '../../lib/api/unsplash.config';
import {
  PictureAction,
  pictureInitialState,
  pictureReducer,
} from './picture.reducer';

type PictureContextProps = {
  getAll: () => void;
  getPhotosByUser: (username: string) => void;
  tryAgain: () => void;
  dispatch: React.Dispatch<PictureAction>;
  result: Picture[];
  error: boolean;
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  message: string;
};

export const PictureContext = createContext({} as PictureContextProps);

export const PictureProvider = ({children}: any) => {
  const [pictureState, dispatch] = useReducer(
    pictureReducer,
    pictureInitialState,
  );

  const tryAgain = () => {
    dispatch({type: 'REINTENTAR'});
  };

  const getAll = async () => {
    dispatch({type: 'GET_PICTURES_PENDING'});

    try {
      const payload = await unsplashAPI.get(`/photos/random?count=20`);
      console.log({payload});
      if (Array.isArray(payload.data)) {
        return dispatch({
          type: 'GET_PICTURES_FULLFILLED',
          payload: {
            result: payload.data,
            message: 'Consulta exitosa',
            error: false,
          },
        });
      } else {
        return dispatch({
          type: 'GET_PICTURES_REJECTED',
          payload: {
            result: [],
            message: 'No se pudieron obtener los datos de la API.',
            error: true,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPhotosByUser = async (username: string) => {
    dispatch({type: 'GET_PICTURES_BY_USER_PENDING'});
    try {
      const payload = await unsplashAPI.get(`/users/${username}/photos`);
      if (Array.isArray(payload.data)) {
        return dispatch({
          type: 'GET_PICTURES_BY_USER_FULLFILLED',
          payload: {
            result: payload.data,
            message: 'Consulta exitosa',
            error: false,
          },
        });
      } else {
        return dispatch({
          type: 'GET_PICTURES_BY_USER_REJECTED',
          payload: {
            result: [],
            message: 'No se pudieron obtener los datos de la API.',
            error: true,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PictureContext.Provider
      value={{
        ...pictureState,
        dispatch,
        tryAgain,
        getAll,
        getPhotosByUser,
      }}>
      {children}
    </PictureContext.Provider>
  );
};
