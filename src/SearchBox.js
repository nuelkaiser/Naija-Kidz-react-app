import './SearchBox.css'

const SearchBox = ( { cardSwitch } ) => {
    return ( 
        <div>
            <input className ='Search-style' type='search' placeholder='Search for Naija kidz Game'  onChange ={ cardSwitch } />  
        </div>
    );
}
 
export default SearchBox;