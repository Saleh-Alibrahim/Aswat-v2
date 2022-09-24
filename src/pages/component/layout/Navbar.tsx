import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark navbar-custom fixed-top'>
      {/* <a className='navbar-brand logo-text ' href='/'>
        اصوات
      </a>

      <a className='navbar-brand logo-image' href='/'>
        <img src='images/logo.svg' alt='alternative' />
      </a> */}

      <button
        className='navbar-toggler ml-auto'
        type='button'
        data-toggle='collapse'
        data-target='#main-navbar'
        aria-controls='main-navbar'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-awesome fas fa-bars'></span>
        <span className='navbar-toggler-awesome fas fa-times'></span>
      </button>

      <div className='collapse navbar-collapse' id='main-navbar'>
        <ul id='main-nav-display' className='navbar-nav ml-auto'>
          {session ? (
            <>
              <li className='nav-item'>
                <a
                  className='logout nav-link'
                  onClick={() => {
                    signOut();
                  }}
                >
                  تسجيل الخروج
                </a>
              </li>
              <li className='nav-item'>
                <Link href='/settings'>
                  <a className='settings nav-link float-right'>الإعدادات</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/dashboard'>
                  <a className='nav-link'>اصواتي</a>
                </Link>
              </li>
            </>
          ) : (
            <li className='nav-item'>
              <Link href='/auth/login'>
                <a className='login nav-link float-right'>تسجيل الدخول</a>
              </Link>
            </li>
          )}

          <li className='nav-item'>
            <a className='nav-link' href='/create'>
              إنشاء التصويت
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/#contact'>
              تواصل معنا
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              الرئيسية
            </a>
          </li>
        </ul>
        <ul className='navbar-nav ml-auto' id='mobile-nav-display'>
          <li className='nav-item'>
            <a className='nav-link  float-right' href='/'>
              الرئيسية
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link  float-right' href='/#contact'>
              تواصل معنا
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link  float-right' href='/dashboard'>
              اصواتي
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link  float-right' href='/create'>
              إنشاء التصويت
            </a>
          </li>
          {session ? (
            <>
              <li className='nav-item'>
                <Link href='/settings'>
                  <a className='settings nav-link float-right'>الإعدادات</a>
                </Link>
              </li>
              <li className='nav-item'>
                <a
                  className='logout nav-link'
                  onClick={() => {
                    signOut();
                  }}
                >
                  تسجيل الخروج
                </a>
              </li>
            </>
          ) : (
            <li className='nav-item'>
              <Link href='/auth/login'>
                <a className='login nav-link float-right'>تسجيل الدخول</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
