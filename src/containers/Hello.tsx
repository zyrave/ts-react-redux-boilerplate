import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Hello from '../components/Hello';
import * as actions from '../actions';
import { StoreState } from '../types';

export const mapStateToProps = ({
  enthusiasmLevel,
  languageName
}: StoreState) => {
  return {
    enthusiasmLevel,
    name: languageName
  };
};

export const mapDispatchToProps = (
  dispatch: Dispatch<actions.EnthusiasmAction>
) => {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
