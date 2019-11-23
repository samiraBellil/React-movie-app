import React from 'react';


const Search = (props) =>{
 
    return (
        <div>
        <form className="search"> 
            <input className ="search-input" onChange={(SearchInputChanges) => props.InputChanges(SearchInputChanges.target.value)} placeholder="Type movie name to search" />
            <input className ="input-btn" type="submit"   value="SEARCH" />
            {/* onClick={callSearch} */}
         </form> 
        </div>
    )
}
export default Search;