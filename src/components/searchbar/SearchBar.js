import { useEffect, useState } from 'react';
import {GoSearch} from 'react-icons/go';
import { AiOutlineClose } from 'react-icons/ai'
import './SearchBar.css'


function SearchBar ({data}) {

    const [inputSearch, setInputSearch] = useState('')
    const [filterSearch, setFilterSearch] =  useState([])

 const handleFilter = (e)=> {
        setInputSearch(e.target.value);

        const newFilter = data.filter(value => {
            return value.title.includes(inputSearch)
         })
         setFilterSearch(newFilter);
    }

    useEffect(()=> {
        if(inputSearch === ''){
            setFilterSearch([]);
        }
     },[inputSearch]);

     function handleClickAutoComplete (value) {
        setInputSearch(value.title)
        setFilterSearch([])
     }

     function clearText() {
        setInputSearch("")
        setFilterSearch([])
    }

    return (
        <>
     
        <div className="serchInput">
        <GoSearch size={24} color='#b8b8b8'/>
           <input type='text' placeholder="Pesquisar..." value={inputSearch} onChange={handleFilter}/>
           {inputSearch !== "" ? <AiOutlineClose onClick={clearText} /> : ""}
        </div>

        {filterSearch.length !==0  && 
        <div className="dataResult">
             
       {filterSearch.slice(0, 15).map(value => (
        <div key={value.id} className='dataItem' onClick={()=> handleClickAutoComplete(value)}>
            <GoSearch size={24} color="#b8b8b8"/>
        <p>{value.title}</p>
        </div>
       ))}
        
        </div>
}
        </>
    )
}

export default SearchBar;