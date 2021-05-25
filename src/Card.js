import './Card.css';

const Card = ( { title, description, image} ) => {
    return ( 
        <div className ='card-component bd wi tc hi mg pd' >
              <h3> {title} </h3>
              <p className ='fix-wi'> { description } </p>
            <img   className ='image-set' src={ image } alt="Naija" />
        </div>
     );
}
 
export default Card;
