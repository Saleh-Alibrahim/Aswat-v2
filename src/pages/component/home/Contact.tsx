import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');

  const submitForm = () => {
    console.log(email, message, title);
  };
  return (
    <div id='contact' className='form-2'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2>معلومات التواصل</h2>
            <ul className='list-unstyled li-space-lg'>
              <li className='address'>لا تتردد في الاتصال بنا</li>
            </ul>
          </div>
        </div>
        <div className='row text-center'>
          <div className='col'>
            <form id='contactForm' onSubmit={submitForm}>
              <div className='form-group'>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type='text'
                  className='form-control-input'
                  placeholder='العنوان'
                  id='cname'
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  className='form-control-input'
                  id='cemail'
                  placeholder='الأيميل'
                  required
                />
              </div>
              <div className='form-group'>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className='form-control-textarea'
                  id='cmessage'
                  placeholder='الرسالة'
                  required
                />
              </div>
              <div className='form-group'>
                <button type='submit' className='form-control-submit-button'>
                  إرسال الرسالة
                </button>
              </div>
              <div className='form-message'>
                <div id='cmsgSubmit' className='h3 text-center hidden'></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
