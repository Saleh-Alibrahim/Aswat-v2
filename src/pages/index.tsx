import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import styles from './index.module.css';
import Navbar from './component/layout/Navbar';
import Header from './component/home/Header';
import Service from './component/home/Service';

const Home: NextPage = () => {
  const { data } = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <>
      <Header />
      <Service />
    </>
  );
};

export default Home;
