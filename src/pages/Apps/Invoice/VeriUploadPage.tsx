import React, { useEffect } from 'react'
import PdfViewer from '../../../components/Pdf/PdfViewer'
import List from './List';
import Contacts from '../Contacts';
import MukelleflerList from './Mukellefler';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';

const VeriAktarimi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(setPageTitle('Mükellef Verisi Aktar'));
  });

  return (
    <div>
        <PdfViewer/>
    </div>
  )
}

export default VeriAktarimi;