import { useState, useEffect } from 'react';
import { BiSearch } from "react-icons/bi"
import { ImCancelCircle } from "react-icons/im"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux-state/CartState";

const Search = () => {
    const [search, setSearch] = useState("");
  
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSearchClick = (e) => {
        if (e.key === "Enter") {
            onSearch();
        }
    }

    const onSearch = () => {
        dispatch(cartActions.updateSearch(search))
        navigate('/products');
    }

    const onClearSearch = () => {
        setSearch("");
    }

    return (
        <>
            <div className='searchBar'>

                <InputGroup>
                <Form.Control
                    placeholder="Search"
                    aria-label="Search Products"
                    onChange={e => setSearch(e.target.value)} 
                    onKeyDown={e => onSearchClick(e)}
                />
                <Button variant='info' onClick={onSearch}><BiSearch /></Button>
                <Button variant='danger' onClick={onClearSearch}><ImCancelCircle /></Button>
                </InputGroup>
            </div>
        </>
    )
}

export default Search;