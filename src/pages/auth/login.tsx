import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { errorAlert, successAlertTimer } from '../../utils/alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const swal = withReactContent(Swal);
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (!response) {
      return;
    }

    if (response.status != 200) {
      await errorAlert(swal, response.error!);
      return;
    }

    await successAlertTimer(swal, 'تم تسجيل الدخول بنجاح');
    router.push('/');
  };
  return (
    <div className='body-background'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-9 col-lg-12 col-xl-10'>
            <div className='card shadow-lg o-hidden border-0 my-5'>
              <div className='card-body p-0'>
                <div className='row'>
                  <div className='col-lg-6 d-none d-lg-flex'>
                    <div className='text-center flex-grow-1 bg-register-image' />
                  </div>
                  <div className='col-lg-6'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h3 className='text-dark mb-4' data-bs-hover-animate='tada'>
                          مرحبا بعودتك
                          <br />
                        </h3>
                      </div>
                      <form onSubmit={handleSubmit} id='login-form' className='user'>
                        <div className='form-group'>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='form-control form-control-user'
                            type='email'
                            id='email'
                            placeholder='الإيميل'
                            name='email'
                          />
                        </div>
                        <div className='form-group'>
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-control form-control-user'
                            type='password'
                            id='password'
                            placeholder='كلمة المرور'
                            name='password'
                          />
                        </div>
                        {/* <div className='form-group'>
                          <div className='text-right text-sm-right text-md-right text-lg-right text-xl-right custom-control custom-checkbox small'>
                            <div className='form-check'>
                              <input className='form-check-input custom-control-input' type='checkbox' id='formCheck' />
                              <label className='form-check-label custom-control-label' id='remeber-me' htmlFor='formCheck'>
                                تذكرني
                              </label>
                            </div>
                          </div>
                        </div> */}
                        <button className='btn btn-primary btn-block text-white btn-user' id='login-btn' type='submit'>
                          تسجيل الدخول
                        </button>

                        <hr className='rem-hr' />
                      </form>
                      <div className='text-center'>
                        <a className='small redirect-password' href='/auth/forgotpassword'>
                          نسيت كلمة المرور ؟
                        </a>
                      </div>
                      <div className='text-center'>
                        <Link href='/auth/register'>
                          <a className='small redirect-password'>ما عندك حساب ؟ تفضل من هنا</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
