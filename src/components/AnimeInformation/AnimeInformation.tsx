import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Image } from 'react-bootstrap';

const months: { [key: string]: string } = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
}

const AnimeInformation: React.FC = () => {
    const { anime } = useTypedSelector(state => state.anime);
    console.log(anime.title);
    console.log('were inside anime information block! hurray!')

    const formattingDate = (date: string): string => {
        const dateArray = (date).slice(0, 10).split('-'); //year month day
        const monthIndex = +dateArray[1] - 1;
        const month = months[monthIndex];
        return `${month} ${dateArray[2]}, ${dateArray[0]}`;
    }

    const releaseDate = formattingDate(anime.start_date);

    let finishedDate = null;
    if (!anime.airing) {
        finishedDate = formattingDate(anime.end_date);
    }

    console.log('airing? ' + anime.airing);

    return (
        <div className='anime-information'>
            <Image src={anime.image_url} />
            <h3>{anime.title}</h3>
            <p>Episodes: {anime.episodes}</p>
            <p>Content Rating: {anime.rated}</p>
            <p> {`Aired: ${releaseDate} - ${finishedDate !== null ? finishedDate : ''}`} </p>
            {/* <p>Release Date: {releaseDate}</p> */}
            <p>Plot Synopsis: {anime.synopsis}</p>
            <p>Episodes: {anime.episodes}</p>
            <p>Ratings: {anime.score}</p>
        </div>

    );
}

export default AnimeInformation;


    // const releaseDateArray = (anime.start_date).slice(0, 10).split('-'); //year month day
    // const monthIndex = +releaseDateArray[1] - 1;
    // const releaseMonth = months[monthIndex];
    // const releaseDate = `${releaseMonth} ${releaseDateArray[2]}, ${releaseDateArray[0]}`;

    // let finishedDate = null;
    // if (!anime.airing) {
    //     const finishedDateArray = (anime.end_date).slice(0, 10).split('-');
    //     const monthIndex = +finishedDateArray[1] - 1;
    //     const finishedMonth = months[monthIndex];
    //     finishedDate = `${finishedMonth} ${finishedDateArray[2]}, ${finishedDateArray[0]}`;
    // }