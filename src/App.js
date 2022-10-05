import logo from './logo.svg';
import './App.css';
import Hero from './Component/Hero/Hero';
import About from './Component/About/About';
import Works from './Component/Works/Works';
import Blog from './Component/Blog/Blog';
import Order from './Component/Order/Order';
import Footer from './Component/Shared/Footer';

function App() {
  return (
    <div>
      <Hero/>
      <About/>
      <Works/>
      <Blog/>
      <Order/>
      <Footer/>
    </div>
  );
}

export default App;
