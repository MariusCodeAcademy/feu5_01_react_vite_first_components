function SingleTourCard() {
  return (
    <article className='tourCard'>
      <img className='tourImage' src={'/img/newyork.jpg'} alt='New York' />
      <div className='tourInfo'>
        <h3>New York</h3>
        <p className='date'>data</p>
        <p className='text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, adipisci!
        </p>
        <button className='btn'>Buy tickets</button>
      </div>
    </article>
  );
}
export default SingleTourCard;
