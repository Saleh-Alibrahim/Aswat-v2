import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';
import styles from './index.module.css';
import Navbar from './component/layout/Navbar';

const Home: NextPage = () => {
  const { data } = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <header id='header' className='header'>
      <div className='header-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='text-container'>
                <h1 className='turquoise text-xs-center text-sm-center text-lg-right'>اصوات</h1>
                <h2 className='p-large text-xs-center text-sm-center text-lg-right'>الطريقة الاسرع لإنشاء تصويت</h2>
                <a className='btn-solid-lg btn-solid-margin text-center' href='/create'>
                  إنشاء تصويت
                </a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='image-container'>
                <img className='img-fluid' src='images/header-teamwork.svg' alt='alternative' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
