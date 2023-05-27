import PropTypes from 'prop-types';

// importar as constantes de status do e-mail;
import { READ, UNREAD } from '../constants';

// importar os ícones que vamos usar nos botões;
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

// receber uma nova prop chamada setMessageStatus;
function List({ messages, setMessageStatus }) {
  return (
    // adicionar uma lógica para alterar a classe CSS do título do e-mail de acordo com seu estado.
    <ul className="messages-list">
      {messages.map((message) => {
        const messageClass = message.status === READ
          ? 'message-read'
          : 'message-unread';

        return (
          // criando os emails a partir da data;
          <li key={ message.id }>
            <p
              className={ `message-title ${messageClass}` }
            >
              {message.title}
            </p>
            <div>
              <button
                type="button"
                title="Marcar como lida"
                onClick={ () => setMessageStatus(message.id, READ) }
              >
                <img src={ readIcon } alt="" />
              </button>
              <button
                type="button"
                title="Marcar como não lida"
                onClick={ () => setMessageStatus(message.id, UNREAD) }
              >
                <img src={ unreadIcon } alt="" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

List.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
  setMessageStatus: PropTypes.func.isRequired,
};

export default List;