import React, { useState, useEffect, useRef } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { createNonNullChain } from 'typescript';
import { useActions } from "../../hooks/useActions";

const Search: React.FC = () => {
    //const [searchedAnime, setSearchedAnime] = useState('');
    const searchedAnime = useRef<null | string | HTMLParagraphElement>(null);
    const { fetchSearchedAnimeList } = useActions()

    const searchAnime = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('SEARCH: fetchSearchedAnimeList(searchedAnime)')
        fetchSearchedAnimeList(searchedAnime.current);
    }

    console.log('rerender?')

    return (
        <Form onSubmit={searchAnime}>
            <InputGroup size="lg">
                <FormControl
                    //onChange={(e) => setSearchedAnime(e.target.value)}
                    ref={searchedAnime}
                    aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        </Form>
    );
}

export default Search;