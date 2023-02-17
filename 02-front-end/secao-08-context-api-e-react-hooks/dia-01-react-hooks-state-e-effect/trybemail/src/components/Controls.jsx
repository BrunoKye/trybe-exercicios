import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';
import PropTypes from 'prop-types';
import '../styles/controls.css'

function Controls({ markAllAsRead, markAllAsUnread }) {
  return (
    <div className="controls-container">
      <button
        className="button-container"
        type="button"
        onClick={ markAllAsRead }
      >
        <img src={ readIcon } alt="" />
        Marcar todas como lida
      </button>

      <button
        className="button-container"
        type="button"
        onClick={ markAllAsUnread }
      >
        <img src={ unreadIcon } alt="" />
        Marcar todas como não lida
      </button>
    </div>
  )
}

Controls.propTypes = {
  markAllAsRead: PropTypes.func,
  markAllAsUnread: PropTypes.func,
}.isRequired;

export default Controls;
