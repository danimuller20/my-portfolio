// import P from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

import styles from './contact.module.scss';
import { Modal } from '../../components/Modal';

export const Contact = () => {
  const form = useRef();
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [inputMessage, setInputMessage] = useState('')

  const onHandleChange = ({target}) => {
    const { name, value } = target;
    setInputValue({ ...inputValue, [name]: value });
  }

  useEffect(() => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const email = inputValue.email;
    if (inputValue.name === '') {
      setInputMessage('Please, enter your name!')
    } else if (email === '') {
      setInputMessage('Please, enter your email!')
    } else if (!regexEmail.test(email)) {
      setInputMessage('Please, enter a valid email!')
    } else if (inputValue.subject === '') {
      setInputMessage('Please, enter some subject!')
    } else if (inputValue.message === '') {
      setInputMessage('Please, type a message!')
    } else {
      setInputMessage('')
    }
}, [inputValue])

  const sendEmail = (e) => {
    e.preventDefault();
    if (inputMessage === '') {
      emailjs.sendForm('gmail', 'template_oq0dtiv', form.current, 'user_X72CcncOSJfx3ZCKOJ6z3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
         e.target.reset();
    }
  };

  return (
    <section className={styles.contact}>
      <h2>Contact me</h2>
      <form onChange={(e) => onHandleChange(e)} ref={form} onSubmit={sendEmail} className={styles.contactInput}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="text" name="email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label >Message</label>
        <textarea className={styles.message} name="message" />
        <Modal message={inputMessage} trigger={<input className={styles.send} type="submit" value="Send" />}/>
      </form>
    </section>
  );
};

// Contact.propTypes = {
//   children: P.node.isRequired,
// };