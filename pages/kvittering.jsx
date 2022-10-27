import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from '../components/Button';
import productImage from '../public/assets/products/product_2332233444.jpg';
import styled from '../styles/Success.module.scss';

const Kvittering = () => {
  function getRandomOrder(min, max) {
    min = Math.ceil(min * 100000);
    max = Math.floor(max * 100000);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  return (
    <>
      <Head>
        <title>Smuk.Nu</title>
        <meta name='description' content='Din sted to beauty' />
        <link rel='icon' href='/smuknu_logo.png' />
      </Head>

      <div className={styled.success}>
        <div className={`${styled.container} ${styled.successFlex}`}>
          <h1 className={styled.title}>Tak!</h1>
          <p className={styled.span} style={{ animationDelay: '200ms' }}>
            Ordre n. {getRandomOrder(1, 2)}
          </p>
          <p style={{ animationDelay: '400ms' }}>Din pakke vil blive sent idag.</p>
          <div className={styled.imageCircle} style={{ animationDelay: '600ms' }}>
            <Image src={productImage} alt='product gold' layout='fill' objectFit='cover' priority />
          </div>
          <p style={{ animationDelay: '800ms' }}>Husk at give feedback om din oplevelse ❤️!</p>

          <Link href='/' passHref>
            <Button style={{ animationDelay: '1000ms' }}>Til Forsiden</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Kvittering;
