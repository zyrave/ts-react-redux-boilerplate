import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Users from '../components/Users';
import { UserAction, fetchRequest, User } from '../ducks/users';

export interface StateToProps {
  users: {
    loading: boolean;
    data: User[];
    errors?: string;
  };
}

const mapStateToProps = (state: StateToProps) => {
  return {
    loading: state.users.loading,
    data: state.users.data,
    errors: state.users.errors,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  fetchRequest: () => dispatch(fetchRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
