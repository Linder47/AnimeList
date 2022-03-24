import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Image } from 'react-bootstrap';
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
    let finishedDate: string | null = null;

    const formattingDate = (date: string): string | null => {
        if (date.length > 10) {
            const dateArray = (date).slice(0, 10).split('-'); //year month day
            const monthIndex = +dateArray[1] - 1;
            const month = months[monthIndex];
            return `${month} ${dateArray[2]}, ${dateArray[0]}`;
        } return null;
    }

    const releaseDate = anime.start_date ? formattingDate(anime.start_date) : "Date is unknown";

    if (!anime.airing && anime.end_date !== null) {
        finishedDate = formattingDate(anime.end_date);
    }

    if (loading) {
        return <div className='loading-error'><p>Loading searched anime...</p></div>
    }

    if (error) {
        return <div className='loading-error'><p>Anime information was not found :C</p></div>
    }

    if (anime.image_url) {
        return (
            <div className='anime-information'>
                <h3 className='title--block'>{anime.title}</h3>
                <div className='anime-information--wrap'>
                    <div className='anime-information--image-block'>
                        <Image src={anime.image_url} />
                    </div>
                    <div className='anime-information--text-block'>
                        {anime.rated && <p>{`Content Rating: ${anime.rated}`}</p>}
                        {anime.start_date !== null && finishedDate !== null && <p>{`Aired: ${releaseDate} - ${finishedDate}`}</p>}
                        <p>Plot Synopsis: {anime.synopsis ? anime.synopsis : `Sorry, there's no information yet.`}</p>
                        {anime.episodes && <p>{`Episodes: ${anime.episodes}`}</p>}
                        {anime.score !== 0 && <p>{`Ratings: ${anime.score}`}</p>}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div></div>
    );
}

export default AnimeInformation;