import './App.css';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { useState } from 'react';
import { Naijakids } from './Naijakids';


function App() {
  const [ SearchField, setSearchField ]  = useState( '' );
  const [ cards ] = useState( Naijakids );

  const onSearch = (event) =>  {
    setSearchField( { SearchField : event.target.value } )
    const cardFilter = cards.map( card =>  {  return   card.GameTitle.toLowerCase().includes(  SearchField.toLowerCase() ) } )

    console.log( cardFilter );
  }

 


 

  return (
    <div className ='tc'>
      <h1 className ='f1' > 9ijakids Gamelist</h1>
      <SearchBox  cardSwitch ={ onSearch } />
       <Cardlist Naijakids ={ cards } />
    </div>
  );
}
export default App;
