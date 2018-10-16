import React from 'react';
import { Container } from 'bloomer';
import './Footer.css';

const Footer = () => (
  <div className='footerCopyright'>
    <Container hasTextAlign='centered'>
      <p className='footerCTA'>Check out <a href='https://budbytes.com/' className='footerLink'>BudBytes</a> for more information about Preordering, Delivery, and More!</p>
      <p className='copywrite'>© 2018 Copyright</p>
    </Container>
  </div>
);

export default Footer;