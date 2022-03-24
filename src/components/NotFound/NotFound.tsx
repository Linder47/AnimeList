import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Image } from 'react-bootstrap';
import '../../App.css';

const NotFound: React.FC = () => {
    return (
        <div className='not-found'>
            <h4>404</h4>
            <h3>Ooops, something went wrong...</h3>
        </div>
    );
}

export default NotFound;