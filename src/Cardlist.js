import Card from './Card'
import './Cardlist.css';

const Cardlist = (  { Naijakids } ) => {

    return ( 
        <div className ='all' >
            {
                Naijakids.map( 
                    ( i ) =>    <Card   key ={ i.GameImage } title ={ i.GameTitle }  id ={ i.id } description ={i.GameDescription} image ={i.GameImage} />
                )
            }
        </div>
     );
}
 
export default Cardlist;
