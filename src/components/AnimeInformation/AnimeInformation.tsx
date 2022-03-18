import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Image } from 'react-bootstrap';

const AnimeInformation: React.FC = () => {
    const { anime } = useTypedSelector(state => state.anime);
    

    console.log(anime);
    console.log(anime.title);
    console.log('were inside anime information block! hurray!')

    return (
        <div>
            <Image src={anime.image_url} />
            <h3>{anime.title}</h3>
            <p>Episodes: {anime.episodes}</p>
            <p>Rating: {anime.rated}</p>
        </div>

    );
}

export default AnimeInformation;