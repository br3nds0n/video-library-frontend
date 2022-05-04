import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import { Container } from './styles';

export default function Layout() {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}
