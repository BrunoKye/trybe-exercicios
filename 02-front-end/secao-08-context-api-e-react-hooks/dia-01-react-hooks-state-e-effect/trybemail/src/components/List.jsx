import PropTypes from 'prop-types';
import { UNREAD, READ } from '../constants';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';
import '../styles/list.css';

function List({ emails, setEmailStatus }) {
  return (
    <ul className="emails-list">
      { emails.map(({ id, title, status }) => {
          const newStatus = status === READ ? 'email-read' : 'email-unread';

          return (
            <li key={ id }>
              <p className={ `email-title ${newStatus}` }>
                { title }
              </p>

              <div>
                <button
                  type="button"
                  title="Marcar como lido"
                  onClick={ () => setEmailStatus(id, READ) }
                >
                  <img src={ readIcon } alt="Lido" />
                </button>

                <button
                  type="button"
                  title="Marcar como não lido"
                  onClick={ () => setEmailStatus(id, UNREAD) }
                >
                  <img src={ unreadIcon } alt="" />
                </button>
              </div>
            </li>
          );
      })}
    </ul>
  )
}

List.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ),
  setEmailStatus: PropTypes.func,
}.isRequired;

export default List;
