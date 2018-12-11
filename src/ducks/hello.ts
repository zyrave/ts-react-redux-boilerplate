/* ---------------- Types & Constants ---------------- */

export interface HelloState {
  languageName: string;
  enthusiasmLevel: number;
}

export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

export interface IncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

/* ---------------- Action Creators ---------------- */

export const incrementEnthusiasm = (): IncrementEnthusiasm => ({
  type: INCREMENT_ENTHUSIASM
});

export const decrementEnthusiasm = (): DecrementEnthusiasm => ({
  type: DECREMENT_ENTHUSIASM
});

/* ---------------- Reducer ---------------- */

const initialState: HelloState = {
  languageName: 'TypeScript',
  enthusiasmLevel: 1
};

export default (
  state: HelloState = initialState,
  action: EnthusiasmAction
): HelloState => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel + 1
      };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel - 1
      };
    default:
      return state;
  }
};
