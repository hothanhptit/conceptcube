import React from 'react'
import Banner from './components/Banner';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Product from './components/Product';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


const App = () => {
  return (
    <>
      <Navigation/>
      <Banner/>
      <Product/>
      <BrandStory/>
      <Footer/>
    </>
  )
}

export default App
