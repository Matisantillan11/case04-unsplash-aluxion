import {Picture} from '../../interfaces/interfaces';

export interface PictureState {
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  message: string;
  error: boolean;
  result: {
    pictures: Picture[],
    authorCollection: Picture[]
  };
}

export const pictureInitialState: PictureState = {
  status: 'initial',
  message: '',
  error: false,
  result: {
    pictures: [],
    authorCollection: []
  },
};

export type PictureAction =
  | {type: 'GET_PICTURES_BY_USER_PENDING'}
  | {
      type: 'GET_PICTURES_BY_USER_FULLFILLED';
      payload: {
        result: {pictures: Picture[], authorCollection: Picture[]}; 
        message: string;
        error: boolean;
      };
    }
  | {
      type: 'GET_PICTURES_BY_USER_REJECTED';
      payload: {
        result: {pictures: Picture[], authorCollection: Picture[]};
        message: string;
        error: boolean;
      };
    }
  | {type: 'GET_PICTURES_PENDING'}
  | {
      type: 'GET_PICTURES_FULLFILLED';
      payload: {
        result: {pictures: Picture[]};
        message: string;
        error: boolean;
      };
    }
  | {
      type: 'GET_PICTURES_REJECTED';
      payload: {
        result: {pictures: Picture[], authorCollection: Picture[]};
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

    
    case 'GET_PICTURES_FULLFILLED': {
      const {result, message, error} = action.payload;

      return {
        ...state,
        status: 'fetched',
        message,
        error,
        result: { pictures: result.pictures, authorCollection: [] },
      };
    }

    case 'GET_PICTURES_BY_USER_FULLFILLED': {
      const {result, message, error} = action.payload;

      return {
        ...state,
        status: 'fetched',
        message,
        error,
        result: { ...result, pictures: result.pictures , authorCollection: result.authorCollection },
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
        result: { pictures: result.pictures, authorCollection: result.authorCollection },
      };
    }

    
    default: {
      break;
    }
  }

  return state;
};
