import { Button } from '@mui/material'
import React from 'react'
import EmptyBox from "../../../assets/images/empty-box.png"

interface ChildComponentProps {
    handleNewOpen: ()=>void;
  }

const Empty: React.FC<ChildComponentProps> = ({handleNewOpen}) => {
  return (
    <div
        className='empty-container'
    >
        <img
            src={EmptyBox}
        />
        <span
            className='warn-text'
        >
            Herhangi bir banka entegrasyonunuz bulunmamaktadır
        </span>
        <Button
            variant='contained'
            color="info"
            style={{textTransform:"none",width:"max-content"}}
            onClick={handleNewOpen}
        >
            Yeni Ekle
        </Button>
    </div>
  )
}

export default Empty