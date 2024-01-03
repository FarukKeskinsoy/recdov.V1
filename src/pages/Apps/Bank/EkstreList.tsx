import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { auth, db } from '../../../firebase/firebase';
import { DocumentReference, doc, getDoc, increment, updateDoc } from 'firebase/firestore';
import { Calculate, Launch } from '@mui/icons-material';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';


const EkstreList = () => {
    const [loading,setLoading]=useState<boolean>(false)
    const [thisDoc,setThisDoc]=useState<any>(null)
    const [ekstreler,setEkstreler]=useState<any>([])
    const [error, setError] = useState<string>("");

    const { username } = useParams();

    const user=auth.currentUser
    var userDocPath = `Users/${user?.uid}/BankEntegrations/${username}`;

    console.log(username)
      useEffect(() => {
        const unsubscribe = async() => {
            console.log("girdi")

            const refUser: DocumentReference = doc(db, userDocPath);
             await getDoc(refUser).then((det) => {
                
        
                if (det.exists()) {
                    let data = JSON.stringify({
                        "uid": det.data().userName,
                        "pwd": det.data().password
                      });
                      console.log("dosya var")
                      
                      let config = {
                        method: 'post',
                        maxBodyLength: Infinity,
                        url: 'https://entegration.recdoai.com/blogin',
                        headers: { 
                          'Content-Type': 'application/json'
                        },
                        data : data
                      };
                      var hlist:any=[]
                      axios(config)
                      .then((response) => {
                        response.data?.XMLEXBAT.Hesaplar[0]?.Hesap
                            .forEach((h:any)=>{
                                if(h.Hareketler[0].Hareket){
                                    hlist.push(h.Hareketler[0].Hareket)
                                }
                            })
                        
                        setEkstreler(hlist)
                        setError("")
                      
                    })

                      .then(()=>setLoading(false))
                      .catch((error) => {
                        console.log(error);
                        setError('Bir hata meydana geldi.');
                        setLoading(false)
                      });
                    
                }
              }).catch(error => {
                console.error("Error getting documents:", error);
                setError('Error fetching data from the server.');
                setLoading(false);
              });

              setLoading(false);

            
          
        };
      
         unsubscribe();
      }, []);

      const columns = [
        {
            key: '',
            label: 'S.NO',
        },
        {
            key: 'Tarih',
            label: 'Tarih',
        },
        {
            key: 'HareketSirano',
            label: 'HareketSirano',
        },
        {
            key: 'Miktar',
            label: 'Miktar',
        },
        {
            key: 'Bakiye',
            label: 'Bakiye',
        },
        {
            key: 'Aciklama',
            label: 'Aciklama',
        },
        {
            key: 'IslemTuru',
            label: 'IslemTuru',
        },
        
        {
            key: 'DekontNo',
            label: 'DekontNo',
        },
        {
            key: '',
            label: 'Muhasebeleştir',
        },
        
    ];

    const showMessage = (msg = '', type = 'success') => {
      const toast: any = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          customClass: { container: 'toast' },
      });
      toast.fire({
          icon: type,
          title: msg,
          padding: '10px 20px',
      });
  };
    const writeToSql=(item:any)=>{
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        //url: 'http://localhost:8800/hostinger',
        url: 'https://recdodbserver-production.up.railway.app/hostinger',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {
          Fatura_No:new Date().valueOf().toString().substring(6),
          ETTN:"", 
          Fatura_Tarihi:"", 
          Durum:"",
          Tur:"",
          Tip_Tur:"",
          Cari_Adi:"",
          Cari_Vkn_Tckn:111222,
          Alias:"",
          Cari_Ulke:"",
          Cari_Sehir:"",
          Odenecek_Miktar:"",
          Vergi_Toplamı:"",
          Vergi_Haric_Tutar:"",
          Toplam_Indirim:"",
          Para_Birimi:"",
          Kur:"₺",
          Toplam_Kdv_1:"",
          Toplam_Kdv_8:"",
          Toplam_Kdv_18:"",
          Kdv_0_Matrah:"",
          Kdv_1_Matrah:"", 
          Kdv_8_Matrah:"", 
          Kdv_18_Matrah:"", 
          Siparis_No:"",
          Senaryo:"", 
          Tasimacilik:"",
          Sigorta:"",
          FOB:"",
          Lokal_Dokuman_No:"",
          Ekstra_Bilgi:"",
          Internet_Adresi:"",
          Alici_Email_Adresi:"",
          Mal_Hizmet_Sira_No:"",
          Mal_Hizmet_Adi:"",
          Mal_Hizmet_Miktar:"",
          Mal_Hizmet_Birim:"",
          Mal_Hizmet_Birim_Fiyat:"",
          Mal_Hizmet_Aciklama:"",
          Mal_Hizmet_Not:"",
          Mal_Hizmet_Satici_Kodu:"",
          Mal_Hizmet_Alici_Kodu:"",
          Mal_Hizmet_Toplam_Tutar:"",
          Mal_Hizmet_KDV_Orani:"",
          Mal_Hizmet_KDV_Tutari:"",
          Mal_Hizmet_OIV_Orani:"",
          Mal_Hizmet_OIV_Tutari:"",
          Not_1:"",
          Not_2:"",
          Not_3:"",
          Tevkifat_Tutari:"",
          Tevkifat_Orani:"",
          Mal_Hizmet_Vergi_Muafiyet_Kodu:"",
          Konaklama_Vergisi:"",
          Irsaliye_Bilgileri:"",
          reqType:"qba"  
        }
      };
      axios(config)
      .then(async(response) => {
        if(response.data.statue===200){
          const userDocPath = auth?.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
       const refUser: DocumentReference = doc(db, userDocPath);
          await updateDoc(refUser,{
            bs:increment(5),
            credit:increment(-5)
          })
          showMessage('Bilgiler başarıyla yüklendi.');

        }else{
          console.log(response.data)
        }
        
        setError("")
      
    })

      .then(()=>setLoading(false))
      .catch((error) => {
        console.log(error);
        setError('Bir hata meydana geldi.');
        setLoading(false)
      });

    }
      if(loading){
        return (
            <div className="screen_loader fixed inset-0 bg-[#fafafa] dark:bg-[#060818] z-[60] grid place-content-center animate__animated">
                        <svg width="64" height="64" viewBox="0 0 135 135" xmlns="http://www.w3.org/2000/svg" fill="#4361ee">
                            <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
                                <animateTransform attributeName="transform" type="rotate" from="0 67 67" to="-360 67 67" dur="2.5s" repeatCount="indefinite" />
                            </path>
                            <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
                                <animateTransform attributeName="transform" type="rotate" from="0 67 67" to="360 67 67" dur="8s" repeatCount="indefinite" />
                            </path>
                        </svg>
                    </div>
        )
      }
    return (
    <div>
        <div className="table-responsive mt-6 btable">
                    <table className="table-striped">
                        <thead>
                            <tr>
                                {columns.map((column) => {
                                    return (
                                        <th key={column.key}>
                                            {column.label}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {error&&<h5>{error}</h5>}
                            {!error&&ekstreler[0]?.map((item:any,idx:number) => {
                                return (
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{item.Tarih[0]}</td>
                                        <td>{item.HareketSirano[0]}</td>
                                        <td>{item.Miktar[0]}</td>
                                        <td>{item.Bakiye[0]}</td>
                                        <td>{item.Aciklama[0]}</td>
                                        <td>{item.IslemTuru[0]}</td>
                                        <td>{item.DekontNo[0]}</td>
                                        <td><Button 
                                          onClick={()=>writeToSql(item)}
                                        className="ltr:text-right rtl:text-left">
                                            <Calculate/>
                                        
                                        </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        
    </div>
  )
}

export default EkstreList