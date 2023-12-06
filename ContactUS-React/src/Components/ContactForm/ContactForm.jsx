import React, { useState } from "react";
import styles from './ContactForm.module.css';
import { MdOutlineMessage, MdCall, MdEmail } from "react-icons/md";
import Button from "../Button/Button";
import contact_logo from './contact_form.svg';

export default function ContactFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (e) =>{
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.contact_top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button text="VIA EMAIL FORM" isOutline = {true} icon={<MdEmail fontSize="24px" />} />
        <div>{name + " " + email + " " + text}</div>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name"></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email"></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Text</label>
            <textarea name="text" />
          </div>
          <div className={styles.submit_btn}><Button text="SUBMIT"/></div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src={contact_logo} alt="contact image"/>
      </div>
      
    </section>
  );
}
