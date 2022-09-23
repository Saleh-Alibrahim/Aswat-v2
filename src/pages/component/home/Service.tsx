import React from 'react';
import Card from './Card';

const Service = () => {
  return (
    <div id='services' className='cards-1'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2>كيف يعمل</h2>
          </div>
        </div>
        <div className='row'>
          <Card order='order-lg-3' image='/images/services-icon-1.svg' title='إنشاء التصويت' description='قم بـ إنشاء تصويت' />
          <Card order='order-lg-2' image='/images/services-icon-2.svg' title='نشر الرابط' description='انشر رابط التصويت' />
          <Card order='order-lg-1' image='/images/services-icon-3.svg' title='تقييم النتائج' description='تحقق من نتائجك في الوقت الفعلي' />
        </div>
      </div>
    </div>
  );
};

export default Service;
