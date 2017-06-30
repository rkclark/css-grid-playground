import { connect } from 'react-redux';
import Home from './components/home';
import * as actions from './actions';

const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(actions.increment());
  },
  decrement() {
    dispatch(actions.decrement());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
