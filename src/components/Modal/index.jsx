import { useState} from 'react';
import Popup from 'reactjs-popup';

import styles from './modal.module.scss';
const contentStyle = { background: '#242222',
                        width: '30rem',
                        height: '15rem',
                        padding: '2rem',
                        borderRadius: '5px',
                        boxShadow: '0 0 0.5rem #04d804',
                      };
const overlayStyle = { background: 'rgba(0,0,0,0.5)'};
const modal = {display: 'flex'}

export const Modal = ({trigger, message}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={styles.sendButton}
      >
          {trigger}
      </button>
      <Popup
        open={open} closeOnDocumentClick onClose={closeModal}
        position="top center"
        {...{ modal, contentStyle, overlayStyle }}
      >
        <div className={styles.modal}>
          <button className={styles.close} onClick={closeModal}>
          &times;
          </button>
          <span> {message.length ? message : 'Email successfully sent!'}</span>
        </div>
      </Popup>
    </div>
  )
}