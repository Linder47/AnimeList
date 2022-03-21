import React, { useState, useEffect, useRef } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Search: React.FC = () => {
    const [searchedAnime, setSearchedAnime] = useState('');
    const { page, limit } = useTypedSelector(state => state.searchedAnimeList);
    //const searchedAnime = useRef<null | string | HTMLParagraphElement>(null);
    const { fetchSearchedAnimeList } = useActions()
    const pages = [1, 2, 3, 4, 5]

    const searchAnime = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('SEARCH: fetchSearchedAnimeList(searchedAnime)');
        console.log('SEARCH2: ' + searchedAnime + ' ' + page + ' ' + limit);
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