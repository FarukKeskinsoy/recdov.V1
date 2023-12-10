import React from 'react'
import "./pdf.scss"
interface documentProps {
    result:{success: boolean;
    textContent: string;
    textLines: object;
    Cari_Adı:string;
    Cari_Vkn_Tckn:[];
    Fatura_No:[];
    Fatura_Tarihi:[];
    Fatura_Tipi:[];
    Senaryo:[];
    ETTN:[];
    KDV_Oranı:[];
    KDV_Tutari:[];
    Hizmet_Toplam_Tutar:[];
    Genel_Toplam:[];

  }
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
        </div>
        <div className="one-line">
            <span className='row-ti' >Cari VKV/TCKN</span>
            <select
              className='minimal'
            >
            {result.Cari_Vkn_Tckn?.map((r,rdx)=>{
              return(
                  <option key={rdx} value={r} >{r}</option>
                )
            })}
            </select>
        </div>
        <div className="one-line">
            <span className='row-ti' >Fatura No</span>
            <select
            className='minimal'
            >
            {result.Fatura_No?.map((r,rdx)=>{
              return(
                  <option key={rdx} value={r} >{r}</option>
                )
            })}
            </select>
        </div>
       <div className="one-line">
            <span className='row-ti' >Fatura Tarihi</span>
            <select
            className='minimal'
            >
            {result.Fatura_Tarihi?.map((r,rdx)=>{
              return(
                  <option key={rdx} value={r} >{r}</option>
                )
            })}
            </select>
        </div>


        <div className="one-line">
            <span className='row-ti' >Fatura Tipi</span>
            <select>
            {result.Fatura_Tipi?.map((r,rdx)=>{
              return(
                  <option key={rdx} value={r} >{r}</option>
                )
            })}
            </select>
        </div>



        <div className="one-line">
            <span className='row-ti' >Senaryo</span>
            <select>
            {result.Senaryo?.map((r,rdx)=>{
              return(
                  <option key={rdx} value={r} >{r}</option>
                )
            })}
            </select>
        </div>

        <div className="one-line">
            <span className='row-ti' >ETTN</span>
            <select>
            {result.ETTN?.map((r,rdx)=>{
              return(
                  <option key={rdx} value={r} >{r}</option>
                )
            })}
            </select>
        </div>

        <div className="one-line">
            <span className='row-ti' >KDV Oranı</span>
            <select>
            {result.KDV_Oranı?.map((r,rdx)=>{
              return(
                  <option key={rdx} value={r} >{r}</option>
                )
            })}
            </select>
        </div>
        <div className="one-line">
            <span className='row-ti' >KDV Tutarı</span>
            <select>
            {result.KDV_Tutari?.map((r,rdx)=>{
              return(
                  <option key={rdx} value={r} >{r}</option>
                )
            })}
            </select>
        </div>
        <div className="one-line">
            <span className='row-ti' >Hizmet Toplam Tutarı</span>
            <select>
            {result.Hizmet_Toplam_Tutar?.map((r,rdx)=>{
              return(
                  <option key={rdx} value={r} >{r}</option>
                )
            })}
            </select>
        </div>
        <div className="one-line">
            <span className='row-ti' >Genel Toplam</span>
            <select>
            {result.Genel_Toplam?.map((r,rdx)=>{
              return(
                  <option key={rdx} value={r} >{r}</option>
                )
            })}
            </select>
        </div>
    </div>
  )
}

export default TextConverter