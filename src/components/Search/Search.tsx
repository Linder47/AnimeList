import React, { useState, useEffect, useRef } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Search: React.FC = () => {
    const [searchedAnime, setSearchedAnime] = useState('Search in English');
    // const { page, limit } = useTypedSelector(state => state.searchedAnimeList);
    //const searchedAnime = useRef<null | string | HTMLParagraphElement>(null);
    const { fetchSearchedAnimeList } = useActions()
    const navigate = useNavigate();
    // const pages = [1, 2, 3, 4, 5]

    const searchAnime = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('animeList/' + searchedAnime);
        fetchSearchedAnimeList(searchedAnime, 1, 10);
    }

    console.log('rerender?')

    return (
        <Form onSubmit={searchAnime}>
            <InputGroup size="lg">
                <FormControl
                    onChange={(e) => setSearchedAnime(e.target.value)}
                    //on={searchAnime}
                    aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </Form>
    );
}

export default Search;