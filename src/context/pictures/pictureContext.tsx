import React, {createContext, useReducer} from 'react';
import {Picture} from '../../interfaces/interfaces';
import {unsplashAPI} from '../../lib/api/unsplash.config';
import {pictureInitialState, pictureReducer} from './picture.reducer';

type PictureContextProps = {
  getAll: () => void;
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

  const getAll = async () => {
    dispatch({type: 'GET_PICTURES_PENDING'});

    try {
      const payload = await unsplashAPI.get(`/photos/random?count=10`);

      if (Array.isArray(payload.data)) {
        return dispatch({
          type: 'GET_PICTURES_FULLFILLED',
          payload: {
            result: payload.data,
            status: 'fetched',
            message: 'payload.message',
            error: false,
          },
        });
      } else {
        return dispatch({
          type: 'GET_PICTURES_REJECTED',
          payload: {
            result: [],
            status: 'error',
            message: 'payload.data.message',
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
      }}>
      {children}
    </PictureContext.Provider>
  );
};
