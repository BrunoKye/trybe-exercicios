import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { changeSignal } from './redux/actions';

const renderSignal = (signalColor) => {
  switch (signalColor) {
  case 'red':
    return redSignal;
  case 'green':
    return greenSignal;
  case 'yellow':
    return yellowSignal;
  default:
    return null;
  }
};

function TrafficSignal({ signalColor, dispatch }) {  
  return (
    <div>
      <div className="button-container">
      <button
            type="button"
            onClick={ () => dispatch(changeSignal('red')) }
          >
            Red
          </button>
          <button
            type="button"
            onClick={ () => dispatch(changeSignal('yellow')) }
          >
            Yellow
          </button>
          <button
            type="button"
            onClick={ () => dispatch(changeSignal('green')) }
          >
            Green
          </button>
      </div>
      <img className="signal" src={ renderSignal(signalColor) } alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.trafficSignalReducer.color,
});

TrafficSignal.propTypes = {
  signalColor: PropTypes.string,
  changeSignal: PropTypes.func,
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(TrafficSignal);
