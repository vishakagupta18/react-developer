import Header from './Header/header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

export default function Layout () {
    return (
      <>
        <Header />
        <Outlet /> 
        <Footer />
      </>
    )
  }