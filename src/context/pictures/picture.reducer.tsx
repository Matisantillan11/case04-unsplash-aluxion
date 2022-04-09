import {Picture} from '../../interfaces/interfaces';

export interface PictureState {
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  message: string;
  error: boolean;
  result: Picture[];
}

export const pictureInitialState: PictureState = {
  status: 'initial',
  message: '',
  error: false,
  result: [],
};

export type PictureAction =
  | {type: 'REINTENTAR'}
  | {type: 'GET_PICTURES_BY_USER_PENDING'}
  | {
      type: 'GET_PICTURES_BY_USER_FULLFILLED';
      payload: {
        result: Picture[];
        message: string;
        error: boolean;
      };
    }
  | {
      type: 'GET_PICTURES_BY_USER_REJECTED';
      payload: {
        result: Picture[];
        message: string;
        error: boolean;
      };
    }
  | {type: 'GET_PICTURES_PENDING'}
  | {
      type: 'GET_PICTURES_FULLFILLED';
      payload: {
        result: Picture[];
        message: string;
        error: boolean;
      };
    }
  | {
      type: 'GET_PICTURES_REJECTED';
      payload: {
        result: Picture[];
        message: string;
        error: boolean;
      };
    };

export const pictureReducer = (
  state: PictureState,
  action: PictureAction,
): PictureState => {
  switch (action.type) {
    case 'GET_PICTURES_BY_USER_PENDING':
    case 'GET_PICTURES_PENDING': {
      return {
        ...state,
        status: 'fetching',
      };
    }

    case 'GET_PICTURES_BY_USER_FULLFILLED':
    case 'GET_PICTURES_FULLFILLED': {
      const {result, message, error} = action.payload;

      return {
        ...state,
        status: 'fetched',
        message,
        error,
        result,
      };
    }
    case 'GET_PICTURES_BY_USER_REJECTED':
    case 'GET_PICTURES_REJECTED': {
      const {result, message, error} = action.payload;

      return {
        ...state,
        status: 'error',
        message,
        error,
        result,
      };
    }

    case 'REINTENTAR': {
      return {
        status: 'initial',
        message: '',
        error: false,
        result: [],
      };
    }
    default: {
      break;
    }
  }

  return state;
};
