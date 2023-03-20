import './style.css';
import TourCardList from './TourCardList';

function TourSection() {
  return (
    <section className='tourSection'>
      <div className='container'>
        <h2 className='title'>TOUR DATES</h2>
        <p className='subtitle'>Remember to book your tickets!</p>
        <TourCardList />
      </div>
    </section>
  );
}

export default TourSection;
