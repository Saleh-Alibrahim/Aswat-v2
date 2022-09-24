import type { NextPage } from 'next';
import Header from './component/home/Header';
import Service from './component/home/Service';
import Contact from './component/home/Contact';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Service />
      <Contact />
    </>
  );
};

export default Home;
