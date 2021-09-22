// import P from 'prop-types';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import styles from './contact.module.scss';
import { Modal } from '../../components/Modal';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      console.log(e.target);
    emailjs.sendForm('gmail', 'template_oq0dtiv', form.current, 'user_X72CcncOSJfx3ZCKOJ6z3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section className={styles.contact}>
      <h2>Contact me</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.contactInput}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label >Message</label>
        <textarea className={styles.message} name="message" />
        <Modal trigger={<input className={styles.send} type="submit" value="Send" />}/>
      </form>
    </section>
  );
};

// Contact.propTypes = {
//   children: P.node.isRequired,
// };