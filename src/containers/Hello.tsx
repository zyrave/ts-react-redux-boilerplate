import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Hello from '../components/hello/Hello';
import {
  EnthusiasmAction,
  incrementEnthusiasm,
  decrementEnthusiasm
} from '../ducks/modules/hello';

export interface StateToProps {
  hello: {
    languageName: string;
    enthusiasmLevel: number;
  };
}

const mapStateToProps = (state: StateToProps) => {
  return {
    name: state.hello.languageName,
    enthusiasmLevel: state.hello.enthusiasmLevel
  };
};

const mapDispatchToProps = (dispatch: Dispatch<EnthusiasmAction>) => ({
  onIncrement: () => dispatch(incrementEnthusiasm()),
  onDecrement: () => dispatch(decrementEnthusiasm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
