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

type PictureAction =
  | {type: 'GET_PICTURES_PENDING'}
  | {
      type: 'GET_PICTURES_FULLFILLED';
      payload: {
        result: Picture[];
        status: string;
        message: string;
        error: boolean;
      };
    }
  | {
      type: 'GET_PICTURES_REJECTED';
      payload: {
        result: Picture[];
        status: string;
        message: string;
        error: boolean;
      };
    };

export const pictureReducer = (
  state: PictureState,
  action: PictureAction,
): PictureState => {
  switch (action.type) {
    case 'GET_PICTURES_PENDING': {
      return {
        ...state,
        status: 'fetching',
      };
    }
    case 'GET_PICTURES_FULLFILLED': {
      const {result, status, message, error} = action.payload;

      return {
        ...state,
        status: 'fetched',
        message,
        error: false,
        result,
      };
    }

    case 'GET_PICTURES_REJECTED': {
      const {result, status, message, error} = action.payload;

      return {
        ...state,
        status: 'error',
        message,
        error: true,
        result,
      };
    }
    default: {
      break;
    }
  }

  return state;
};
