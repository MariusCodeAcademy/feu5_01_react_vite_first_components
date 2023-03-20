import Header from './components/layout/Header';
import Hero from './components/Hero';
import ThreeList from './components/three/ThreeList';
import TourSection from './components/tourSection/TourSection';
import './App.css';

const titleArr = ['About Us', 'Kompanija', 'Kontaktai'];

function App() {
  return (
    <div className=''>
      <Header />
      {/* <Hero /> */}
      {/* <ThreeList list={titleArr} /> */}
      <TourSection />
    </div>
  );
}

export default App;
