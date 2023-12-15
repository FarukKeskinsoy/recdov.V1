import React, { useEffect } from 'react'
import BeyannameViewer from '../../../components/Beyanname/BeyannameViewer';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';

const BeyannameSorgula = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Beyanname Sorgula'));
    });
  return (
    <div>
        <BeyannameViewer/>
    </div>
  )
}

export default BeyannameSorgula;