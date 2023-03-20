function PartAbout(props) {
  const title = 'About Us';
  const upper = title.toUpperCase();

  return (
    <article className='sectionPart'>
      <h3>{upper}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremqem magni, culpa
        eveniet unde animi saepe id aliquid voluptatibus minima dolores! Ab molestiae velit deleniti
      </p>
    </article>
  );
}

export default PartAbout;
