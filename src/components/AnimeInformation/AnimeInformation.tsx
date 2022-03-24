import React, { useState, useEffect } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Image } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { addAnimeInfo } from '../../store/action-creators/anime';
import '../../App.css';

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
    const { anime, loading, error } = useTypedSelector(state => state.anime);
    const params = useParams();
    // const { addAnimeInfoFromURL } = useActions();
    console.log(anime.title);
    console.log('were inside anime information block! hurray!')

    // if (anime.title.length === 0 && loading === false &&
    //     error === null && params.animeID !== undefined) {
    //     console.log(' МЫ В ПРОВЕРОЧКЕ АЛОООООООООООООООООООО');
    //       addAnimeInfoFromURL(params.animeID);
    // }

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

    if (loading) {
        return <p>Ищем аниме эх</p>
    }

    if (error) {
        return <p>Искомое аниме с ошибкой. {error}</p>
    }

    return (
        <div className='anime-information'>
{/* <p className='design-element--block'>◌</p> */}
            <h3 className='title--block'>{anime.title}</h3>
            {/* <p className='design-element--block'>●</p> */}
            <div className='anime-information--wrap'>
                <div className='anime-information--image-block'>
                    <Image src={anime.image_url} />
                </div>
                <div className='anime-information--text-block'>
                    <p>Content Rating: {anime.rated}</p>
                    <p> {`Aired: ${releaseDate} - ${finishedDate !== null ? finishedDate : ''}`} </p>
                    <p>Plot Synopsis: {anime.synopsis}</p>
                    <p>Episodes: {anime.episodes}</p>
                    <p>Ratings: {anime.score}</p>
                </div>
            </div>
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