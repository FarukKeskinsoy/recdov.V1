import React from 'react'

interface documentProps {
    result:{success: boolean;
    textContent: string;
    textLines: object;
    Cari_Adı:string}
  }
const TextConverter = ({result}:documentProps) => {

// Remove the first and last elements

    console.log("c",result.Cari_Adı)

    
  return (
    <div
      id='drawer'
        className="fetched-info"
    >
        <div className="one-line">
            <span className='row-ti' >Cari Adı</span>
            <span className='row-te'>{result?.Cari_Adı}</span>
            <ul>
            <ul>
              <li><a href="#">Menu Item</a></li>
              <li><a href="#">Menu Item</a></li>
              <li><a href="#">Menu Item</a></li>
              <li><a href="#">Menu Item</a></li>
            </ul>
            </ul>
        </div>
    </div>
  )
}

export default TextConverter