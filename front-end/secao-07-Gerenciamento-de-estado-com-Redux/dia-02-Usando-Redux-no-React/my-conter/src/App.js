// ./src/App.js
import React from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';


class App extends React.Component {
render() {
  const { dispatch, countState } = this.props;
  return (
    <div>
        <h1>Contador</h1>
        <h2>{countState}</h2>
      <button onClick={() => dispatch(actionCreator())}>Incrementa</button>
    </div>
    );
  }
}
  
const mapStateToProps = (state) => ({
  countState: state.count,
})

export default connect(mapStateToProps)(App);

