/* ---------------- Types & Constants ---------------- */

export type ApiResponse = Record<string, any>;

export interface User extends ApiResponse {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UserState {
  readonly loading: boolean;
  readonly data: User[];
  readonly errors?: string;
}

export const FETCH_REQUEST = 'FETCH_REQUEST';
export type FETCH_REQUEST = typeof FETCH_REQUEST;

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export type FETCH_SUCCESS = typeof FETCH_SUCCESS;

export const FETCH_ERROR = 'FETCH_ERROR';
export type FETCH_ERROR = typeof FETCH_ERROR;

export interface fetchRequest {
  type: FETCH_REQUEST;
}

export interface fetchSuccess {
  type: FETCH_SUCCESS;
  payload: User[];
}

export interface fetchError {
  type: FETCH_ERROR;
  payload: string;
}

export type UserAction = fetchRequest | fetchSuccess | fetchError;

/* ---------------- Action Creators ---------------- */

export const fetchRequest = (): fetchRequest => ({
  type: FETCH_REQUEST
});

export const fetchSuccess = (data: User[]): fetchSuccess => ({
  type: FETCH_SUCCESS,
  payload: data
});

export const fetchError = (message: string): fetchError => ({
  type: FETCH_ERROR,
  payload: message
});

/* ---------------- Reducer ---------------- */

const initialState: UserState = {
  loading: false,
  data: [],
  errors: undefined
};

export default (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, errors: action.payload };
    default:
      return state;
  }
};
