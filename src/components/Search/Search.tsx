import React, { useState, useEffect, useRef } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { useActions } from "../../hooks/useActions";
import { useNavigate } from "react-router-dom";

const Search: React.FC = () => {
    const [searchedAnime, setSearchedAnime] = useState('Search in English');
    const { fetchSearchedAnimeList } = useActions()
    const navigate = useNavigate();

    const searchAnime = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('animeList/' + searchedAnime);
        fetchSearchedAnimeList(searchedAnime, 1, 10);
    }

    return (
        <Form onSubmit={searchAnime}>
            <InputGroup size="lg">
                <FormControl
                    onChange={(e) => setSearchedAnime(e.target.value)}
                    aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </Form>
    );
}

export default Search;