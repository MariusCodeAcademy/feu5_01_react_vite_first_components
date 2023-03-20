import SingleTourCard from './SingleTourCard';

function TourCardList() {
  return (
    <div className='tourCardList'>
      <SingleTourCard img={'/img/newyork.jpg'} />
      <SingleTourCard />
      <SingleTourCard />
    </div>
  );
}

export default TourCardList;
