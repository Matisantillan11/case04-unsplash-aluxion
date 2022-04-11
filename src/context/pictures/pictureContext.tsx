import React, {createContext,  useReducer} from 'react';
import {Picture} from '../../interfaces/interfaces';
import {unsplashAPI} from '../../lib/api/unsplash.config';
import {
  pictureInitialState,
  pictureReducer,
} from './picture.reducer';

type PictureContextProps = {
  getAll: () => void;
  getPhotosByUser: (username: string, randomPictures: Picture[]) => void;
  result: {pictures: Picture[], authorCollection: Picture[]};
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


  const getAll = async () => {
    dispatch({type: 'GET_PICTURES_PENDING'});

    try {
      const payload = await unsplashAPI.get(`/photos/random?count=20`);
      
      if (Array.isArray(payload.data)) {
        return dispatch({
          type: 'GET_PICTURES_FULLFILLED',
          payload: {
            result: { pictures: payload.data },
            message: 'Consulta exitosa',
            error: false,
          },
        });
      } else {
        return dispatch({
          type: 'GET_PICTURES_REJECTED',
          payload: {
            result:  {pictures: [], authorCollection: []},
            message: 'No se pudieron obtener los datos de la API.',
            error: true,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPhotosByUser = async (username: string, randomPictures: Picture[]) => {
    dispatch({type: 'GET_PICTURES_BY_USER_PENDING'});
    try {
      const payload = await unsplashAPI.get(`/users/${username}/photos`);
      if (Array.isArray(payload.data)) {
        return dispatch({
          type: 'GET_PICTURES_BY_USER_FULLFILLED',
          payload: {
            result: { pictures: randomPictures , authorCollection: payload.data},
            message: 'Consulta exitosa',
            error: false,
          },
        });
      } else {
        return dispatch({
          type: 'GET_PICTURES_BY_USER_REJECTED',
          payload: {
            result:  {pictures: [], authorCollection: []},
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
        getAll,
        getPhotosByUser,
      }}>
      {children}
    </PictureContext.Provider>
  );
};
