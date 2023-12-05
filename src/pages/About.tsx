import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../store/themeConfigSlice';

const About = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('About'));
    });
    return (
        <div>
            <Link to="/">Anasayfa</Link>
            <h1>Hakkında!</h1>
        </div>
    );
};

export default About;
