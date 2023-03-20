import Header from './components/layout/Header';
import Hero from './components/Hero';
import ThreeList from './components/three/ThreeList';
import './App.css';

const titleArr = ['About Us', 'Kompanija', 'Kontaktai'];

function App() {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <ThreeList list={titleArr} />
    </div>
  );
}

export default App;
