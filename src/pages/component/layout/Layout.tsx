import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='description' content='الطريقة الاسرع لإنشاء تصويت' />
        <meta name='author' content='Inovatik' />
        <meta property='og:site_name' content='' />
        <meta property='og:site' content='' />
        <meta property='og:title' content='' />
        <meta property='og:description' content='' />
        <meta property='og:image' content='' />
        <meta property='og:url' content='' />
        <meta property='og:type' content='article' />

        <title>اصوات</title>

        <link rel='icon' href='/images/logo.png' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
