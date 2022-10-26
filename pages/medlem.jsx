import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import GenericHeader from '../components/GenericHeader';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import medlemHeader from '../public/assets/headers/subscribers.jpg';
import { medlemHeaderText } from '../constants/index';
import { useAppContext } from '../context/state';
import styled from '../styles/Medlem.module.scss';

const Medlem = () => {
  const { setMedlemName } = useAppContext();
  const router = useRouter();
  const defaultformFields = {
    name: '',
    email: '',
    message: '',
  };

  const [formFields, setFormFields] = useState(defaultformFields);
  const { name, email, message } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://smuknu.webmcdm.dk/subscribe', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });

    resetFormFields();
    setMedlemName(name);
    router.push('/success');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <Head>
        <title>Smuk.Nu</title>
        <meta name='description' content='Din sted to beauty' />
        <link rel='icon' href='/smuknu_logo.png' />
      </Head>
      <GenericHeader style={{ backgroundImage: `url(${medlemHeader.src})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} title={medlemHeaderText.title} text={medlemHeaderText.text} text2={medlemHeaderText.text2} boxStyle='invertedBox' />
      <form onSubmit={handleSubmit} className={`${styled.form} ${styled.container}`}>
        <Input labelName='Fulde navn *' type='text' required name='name' value={name} onChange={handleChange} />
        <Input labelName='E-mail *' type='email' required name='email' value={email} onChange={handleChange} pattern='\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b' title='Enter a valid email' />
        <Textarea labelName='Ris og/eller ros' type='text' required name='message' value={message} onChange={handleChange} />
        <Button type='submit' style={{ width: 'fit-content' }}>
          Opret
        </Button>
      </form>
    </>
  );
};

export default Medlem;
