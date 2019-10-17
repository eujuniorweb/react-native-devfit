import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

// import { Container } from './styles';

const Preload = props => {
  if (!props.name) {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
      }),
    );
  } else {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'AppTab'})],
      }),
    );
  }
  return null;
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
  };
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Preload);
