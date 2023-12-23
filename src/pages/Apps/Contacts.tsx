import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconUserPlus from '../../components/Icon/IconUserPlus';
import IconListCheck from '../../components/Icon/IconListCheck';
import IconLayoutGrid from '../../components/Icon/IconLayoutGrid';
import IconSearch from '../../components/Icon/IconSearch';
import IconUser from '../../components/Icon/IconUser';
import IconFacebook from '../../components/Icon/IconFacebook';
import IconInstagram from '../../components/Icon/IconInstagram';
import IconLinkedin from '../../components/Icon/IconLinkedin';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconX from '../../components/Icon/IconX';
import {mukellefExtraInfo , iller , mukellefList} from "../../rawData/mukellefs.js"
import { useMukellef } from '../../context/mukellef.context';
import { nacelist } from '../../rawData/nace';
import { vergidaireleri } from '../../rawData/vergiDaireleri';
import { illers } from '../../rawData/iller';
import { CircularProgress } from '@mui/material';
import { CollectionReference, collection, doc, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { Launch } from '@mui/icons-material';
import { entegratorler } from '../../rawData/entegratorList';

interface Mukellef {
    // Assuming that adresler is an array of Address objects
    id?:string;
    yetkilismsmmm?: string;
    smsmmmsozlesmetarihi?:string;
    smsmmmsozlesmeno?:string;
    yetkiliymm?:string;
    tckimlikno?:string;
    kurulustarihi?:string;
    kapanıstarihi?:string;
    faaliyetkodu?:string;
    faaliyetadi?:string;
    soyadiunvani?:string;
    adi?:string;
    vergidairesikodu?:string;
    vergidairesi?:string;
    vergidairesiililce?:string;
    vergikimlikno?:string;
    ticaretsicilno?:string;
    tesciltarihi?:string;
    tescilkurulusyeri?:string;
    kdvmukellefiyeti?:string;
    kdvvergidairesikodu?:string;
    kdvvergidairesi?:string;
    kdvvergidairesiililce?:string;
    mersisno?:string;
    taahhutedilensermaye?:string;
    odenmissermaye?:string;
    baglıoldugusosyalguvenlikkurumu?:string;
    sosyalguvenlikkurumunumarasi?:string;
    baglıoldugumeslekitesekkul?:string;
    meslekitesekkulnumarasi?:string;
    basitusul?:string;
    basitusulfaaliyetkodu?:string;
    odatemsilcisibilgileri?:object;
    eposta?:string;
    phone?:string;
    entegrator?:string;
    enusername?:string,
    enpassword?:string
}
  
const Contacts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Mükellefler'));
    });
    const {newMukellef,adding,handleAddNewMukellef,changed,handleNewMukellefFormChange, handleNewMukellefFormInnerChange,handleDeleteMukellef,deleting} = useMukellef()
    const [addContactModal, setAddContactModal] = useState<any>(false);

  

    const [value, setValue] = useState<any>('list');
    const [defaultParams] = useState({
        id: null,
        adi:"",
        soyadi:"",
        unvani:"",
        yetkili:"",
        tc:"",
        kurulusTarihi:"",
        kapanısTarihi:"",
        faaliyetKodu:"",
        faaliyetAdi:"",
        vergiDairesiKodu:"",
        vergiDairesi:"",
        vergiililce:"",
        vergiKimlikNo:"",
        ticSicilNo:"",
        tescilTarihi:"",
        tescilYeri:"",
        kdvMukellefi:"",
        kdvVergiDairesiKodu:"",
        kdvVergiDairesi:"",
        kdvVergiDairesiişilce:"",
        mersisNo:"",
        taahhütEdilensermaye:"",
        odenmisSermaye:"",
        bagliSosyalGuvKur:"",
        sosGuvKurNo:"",
        bagliMesTes:"",
        mesTesNo:"",
        basitUsulFaaliyetKodu:"",
        basitOnayAdi:"",
        basitOnaySoyadi:"",
        basitOnayTc:"",
        isim:"",
        soyisim:"",
        phone:"",
        email:""
    });

    const [mymukellefs, setMyMukellefs] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        let controller = new AbortController();
    
        const fetchData = async () => {
            const thisCred=auth.currentUser;
            const userDocPath = thisCred?.uid ? `Users/${thisCred.uid}/Mukellefler` : '';
            const refUser: CollectionReference = collection(db, userDocPath);
    
          try {
            const logQuerySnapshot = await getDocs(refUser);
    
            var list:object[]= [];
            logQuerySnapshot.forEach((doc) => {
              list.unshift({ ...doc.data(), id: doc.id } as Mukellef);
            });
    
            setMyMukellefs(list);
            setFilteredItems(list)
            setLoading(false);
          } catch (error) {
            setLoading(false);
            alert("An error occurred");
            console.error("Error fetching user data:", error);
          }
        };
    
        fetchData();
    
        return () => controller?.abort();
      }, [changed]); // Dependency array includes userid and updating to trigger the effect when they change
    
    const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));

    
    // Combine the arrays based on userId
    const combinedArray = mymukellefs.map((mukellef:any) => ({
        ...mukellef,
        //...userIdToExtraInfo[mukellef.id] || {},
    }));
    const [search, setSearch] = useState<any>('');
    

    const [filteredItems, setFilteredItems] = useState<any>(mymukellefs);

    useEffect(() => {
        setFilteredItems(() => {
            return mymukellefs.filter((item: any) => {
                return String(item.soyadiunvani).toLowerCase().includes(search.toLowerCase());
            });
        });
    }, [search]);


let navigate=useNavigate()

type MessageType = 'success' | 'error' | 'warning' | 'info' | 'question';


const showConfirmMessage = (
  msg: string = '',
  type: MessageType = 'success',
  confirmCallback?: () => void
) => {
  if (confirmCallback) {
    // Confirmation
    Swal.fire({
      icon: type,
      title: msg,
      padding: '10px 20px',
      showCancelButton: true,
      confirmButtonText: 'Evet',
      cancelButtonText: 'Hayır',
    }).then((result) => {
      if (result.isConfirmed) {
        confirmCallback();
      }
    });
  } else {
    // Toast
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
  }
};


    return (
        <div>
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl">Mükellefler</h2>
                <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
                    <div className="flex gap-3">
                        <div>
                            <button type="button" className="btn btn-primary" onClick={() => setAddContactModal(true)}>
                                <IconUserPlus className="ltr:mr-2 rtl:ml-2" />
                                Mükellef Ekle
                            </button>
                        </div>
                        <div>
                            <button type="button" className={`btn btn-outline-primary p-2 ${value === 'list' && 'bg-primary text-white'}`} onClick={() => setValue('list')}>
                                <IconListCheck />
                            </button>
                        </div>
                        {/* <div>
                            <button type="button" className={`btn btn-outline-primary p-2 ${value === 'grid' && 'bg-primary text-white'}`} onClick={() => setValue('grid')}>
                                <IconLayoutGrid />
                            </button>
                        </div> */}
                    </div>
                    <div className="relative">
                        <input type="text" placeholder="mükellef ara" className="form-input py-2 ltr:pr-11 rtl:pl-11 peer" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type="button" className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                            <IconSearch className="mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
            {value === 'list' && (
                <div className="mt-5 panel p-0 border-0 overflow-hidden">
                    <div className="table-responsive">
                        <table className="table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>İsim</th>
                                    <th>E-Posta</th>
                                    <th>Şehir</th>
                                    <th>Telefon</th>
                                    <th className="!text-center">İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.map((contact: Mukellef,idx:number) => {
                                    return (
                                        <tr key={idx}>
                                            <td>
                                                <div className="flex items-center w-max">
                                                        <div className="border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2">
                                                            <IconUser className="w-4.5 h-4.5" />
                                                        </div>
                                                    
                                                    <div>{contact.soyadiunvani || contact.adi}</div>
                                                </div>
                                            </td>
                                            <td>{contact.eposta}</td>
                                            <td className="whitespace-nowrap">{contact.vergidairesiililce}</td>
                                            <td className="whitespace-nowrap">{contact.phone}</td>
                                            <td>
                                                <div className="flex gap-4 items-center justify-center">
                                                    <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => navigate(`${contact.id}`)}>
                                                        <Launch
                                                        style={{fontSize:16}}
                                                        />
                                                    </button>
                                                    <button
                                                    disabled={deleting}
                                                    type="button" 
                                                    className="btn btn-sm btn-outline-danger" 
                                                    onClick={() => showConfirmMessage(`Mükellefi (${contact.soyadiunvani||""}) silmek istediğinizden emin misiniz?`,'question',() => {
                                                        contact.id&&handleDeleteMukellef(contact.id);}
                                                    )}
                                                    >
                                                        Sil
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* {value === 'grid' && (
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-5 w-full">
                    {filteredItems.map((contact: any) => {
                        return (
                            <div className="bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative" key={contact.id}>
                                <div className="bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative">
                                    <div
                                        className="bg-white/40 rounded-t-md bg-center bg-cover p-6 pb-0 bg-"
                                        style={{
                                            backgroundImage: `url('/assets/images/notification-bg.png')`,
                                            backgroundRepeat: 'no-repeat',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    >
                                        <img className="object-contain w-4/5 max-h-40 mx-auto" src={`/assets/images/${contact.path}`} alt="contact_image" />
                                    </div>
                                    <div className="px-6 pb-24 -mt-10 relative">
                                        <div className="shadow-md bg-white dark:bg-gray-900 rounded-md px-2 py-4">
                                            <div className="text-xl">{contact.name}</div>
                                            <div className="text-white-dark">{contact.role}</div>
                                            <div className="flex items-center justify-between flex-wrap mt-6 gap-3">
                                                <div className="flex-auto">
                                                    <div className="text-info">{contact.posts}</div>
                                                    <div>Posts</div>
                                                </div>
                                                <div className="flex-auto">
                                                    <div className="text-info">{contact.following}</div>
                                                    <div>Following</div>
                                                </div>
                                                <div className="flex-auto">
                                                    <div className="text-info">{contact.followers}</div>
                                                    <div>Followers</div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <ul className="flex space-x-4 rtl:space-x-reverse items-center justify-center">
                                                    <li>
                                                        <button type="button" className="btn btn-outline-primary p-0 h-7 w-7 rounded-full">
                                                            <IconFacebook />
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-outline-primary p-0 h-7 w-7 rounded-full">
                                                            <IconInstagram />
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-outline-primary p-0 h-7 w-7 rounded-full">
                                                            <IconLinkedin />
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button type="button" className="btn btn-outline-primary p-0 h-7 w-7 rounded-full">
                                                            <IconTwitter />
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-6 grid grid-cols-1 gap-4 ltr:text-left rtl:text-right">
                                            <div className="flex items-center">
                                                <div className="flex-none ltr:mr-2 rtl:ml-2">Email :</div>
                                                <div className="truncate text-white-dark">{contact.email}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex-none ltr:mr-2 rtl:ml-2">Phone :</div>
                                                <div className="text-white-dark">{contact.phone}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex-none ltr:mr-2 rtl:ml-2">Address :</div>
                                                <div className="text-white-dark">{contact.location}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-4 absolute bottom-0 w-full ltr:left-0 rtl:right-0 p-6">
                                        <button type="button" className="btn btn-outline-primary w-1/2" onClick={() => console.log("first")}>
                                            Düzenle
                                        </button>
                                        <button type="button" className="btn btn-outline-danger w-1/2" onClick={() => "deleteUser(contact)"}>
                                            Sil
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )} */}

            <Transition appear show={addContactModal} as={Fragment}>
                <Dialog as="div" open={addContactModal} onClose={() => setAddContactModal(false)} className="relative z-[51]">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto rd">
                        
                        <div className="flex min-h-full items-center justify-center px-4 py-8">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                    <button
                                        type="button"
                                        onClick={() => setAddContactModal(false)}
                                        className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        {params.id ? 'Düzenle' : 'Mükellef Ekle'}
                                    </div>
                                    <div className="p-5">
                                        <form
                                        
                                        >

                                            {adding&&<div className="uploading">
                                            <CircularProgress
                                                className='proggress'
                                            />
                                        </div>}
                                            <div className="mb-5">
                                                <label htmlFor="soyadiunvani">Soyadı / Ünvanı</label>
                                                <input
                                                    id="soyadiunvani"
                                                    type="text"
                                                    name="soyadiunvani"
                                                    placeholder="Ünvan / Soyad giriniz"
                                                    className="form-input"
                                                    required
                                                    value={newMukellef?.soyadiunvani}
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="adi">Adı</label>
                                                <input
                                                    id="adi"
                                                    type="text"
                                                    name="adi"
                                                    placeholder="İsim giriniz"
                                                    className="form-input"
                                                    value={newMukellef?.adi}
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="vergidairesi">Vergi Dairesi</label>
                                                <select
                                                    id="vergidairesi"
                                                    placeholder="vergi dairesi"
                                                    className="form-input"
                                                    name='vergidairesi'
                                                    required
                                                    value={newMukellef?.vergidairesi}
                                                    onChange={handleNewMukellefFormChange}
                                                >
                                                       <option value="" disabled >Vergi Dairesi</option>
                                                       {vergidaireleri.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.VERGİ_DAİRESİ_ADI}>{i.VERGİ_DAİRESİ_ADI}</option>
                                                        )
                                                       })}
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="vergidairesikodu">Vergi Dairesi Kodu</label>
                                                <select
                                                    id="vergidairesikodu"
                                                    placeholder="vergi dairesi kodu"
                                                    className="form-input"
                                                    name='vergidairesikodu'
                                                    required
                                                    value={newMukellef?.vergidairesikodu}
                                                    onChange={handleNewMukellefFormChange}
                                                >
                                                       <option value="" disabled>Vergi Dairesi Kodu</option>
                                                       {vergidaireleri.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.VD_KODU}>{i.VD_KODU}</option>
                                                        )
                                                       })}
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="vergidairesiililce">Vergi Dairesi İl/ İlçe</label>
                                                <select
                                                    id="vergidairesiililce"
                                                    placeholder="vergi dairesi il ilçe"
                                                    className="form-input"
                                                    name='vergidairesiililce'
                                                    value={newMukellef?.vergidairesiililce}
                                                    onChange={handleNewMukellefFormChange}
                                                >
                                                       <option value="" disabled>Vergi Dairesi İl İlçe</option>
                                                       {vergidaireleri.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.İLİ}>{i.İLİ}</option>
                                                        )
                                                       })}
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="vergiKimlikNo">Vergi Kimlik Numarası</label>
                                                <input 
                                                    id="vergiKimlikNo"
                                                    type="text"
                                                    required
                                                    placeholder="VKN giriniz"
                                                    className="form-input" 
                                                    name='vergikimlikno'
                                                    value={newMukellef?.vergikimlikno} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="faaliyetkodu">Faaliyet Kodu</label>
                                                <select
                                                    name="faaliyetkodu"
                                                    id='region'
                                                    className="form-input"
                                                    placeholder='faaliyet kodu'
                                                    onChange={handleNewMukellefFormChange}
                                                    //defaultValue={ne?.region}
                                                    value={newMukellef?.faaliyetkodu}
                                                >
                                                    <option value="" disabled>faaliyet kodu</option>

                                                    {nacelist.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.dc_NACE_KODU}>{i?.dc_NACE_KODU.replace(/\./g, "")}</option>
                                                        )
                                                    })}
                                                </select>
                                                
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="faaliyetadi">Faaliyet Adı</label>
                                                <select
                                                    name="faaliyetadi"
                                                    id='region'
                                                    className="form-input"
                                                    placeholder='faaliyet adi'
                                                    onChange={handleNewMukellefFormChange}
                                                    //defaultValue={ne?.region}
                                                    value={newMukellef?.faaliyetadi}
                                                >
                                                    <option value="" disabled>faaliyet adı</option>

                                                    {nacelist.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.dc_NACE_BASLIK}>{i?.dc_NACE_BASLIK}</option>
                                                        )
                                                    })}
                                                </select>
                                                
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="baglıoldugumeslekitesekkul">Bağlı Olduğu Mesleki Teşekkül</label>
                                                <select
                                                    disabled
                                                    id="baglıoldugumeslekitesekkul"
                                                    placeholder="mesleki teşekkül"
                                                    className="form-input"
                                                    name='baglıoldugumeslekitesekkul'
                                                    value={newMukellef?.baglıoldugumeslekitesekkul}
                                                    onChange={handleNewMukellefFormChange}
                                                >
                                                       <option value="" disabled>Mesleki Teşekkül</option>
                                                       {nacelist.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.dc_MESLEK_GRUBU_ADI}>{i?.dc_MESLEK_GRUBU_ADI}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="meslekitesekkulnumarasi">Mesleki Teşekkül Numarası</label>
                                                <select
                                                    disabled
                                                    id="meslekitesekkulnumarasi"
                                                    placeholder="mesleki teşekkül no"
                                                    className="form-input"
                                                    name='meslekitesekkulnumarasi'
                                                    value={newMukellef?.meslekitesekkulnumarasi}
                                                    onChange={handleNewMukellefFormChange}
                                                >
                                                       <option value="" disabled>Mesleki teşekkül numarası</option>
                                                       {nacelist.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.dc_MESLEK_GRUBU}>{i?.dc_MESLEK_GRUBU}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="basitusul">Basit Usül</label>
                                                <select
                                                    name="basitusul"
                                                    id='basitusul'
                                                    className="form-input"
                                                    placeholder='seçiniz'
                                                    onChange={handleNewMukellefFormChange}
                                                    value={newMukellef?.basitusul}
                                                >

                                                    <option value="Hayır">Hayır</option>
                                                    <option value="Evet">Evet</option>

                                                </select>
                                            </div>
                                            {newMukellef?.basitusul==="Evet"&&<div className="mb-5">
                                                <label htmlFor="basitusulfaaliyetkodu">Basit Üsul Faaliyet Kodu</label>
                                                <select
                                                    disabled
                                                    id="basitusulfaaliyetkodu"
                                                    placeholder="vergi dairesi kodu"
                                                    className="form-input"
                                                    name='basitusulfaaliyetkodu'
                                                    value={newMukellef?.basitusulfaaliyetkodu}
                                                    onChange={handleNewMukellefFormChange}
                                                >
                                                       <option value="" disabled>Basit Üsul Faaliyet Kodu</option>
                                                       {nacelist.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.dc_NACE_KODU}>{i?.dc_NACE_KODU}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>}
                                            <div className="mb-5">
                                                <label htmlFor="tckimlikno">TC Kimlik Numarası</label>
                                                <input 
                                                    id="tckimlikno"
                                                    type="tel"
                                                    placeholder="Mükellef TC giriniz" 
                                                    className="form-input"
                                                    name='tckimlikno'
                                                    value={newMukellef?.tckimlikno} 
                                                    onChange={handleNewMukellefFormChange} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="mersisno">MERSIS No</label>
                                                <input 
                                                    id="mersisno"
                                                    type="tel"
                                                    placeholder="MERSİS no" 
                                                    className="form-input"
                                                    name='mersisno'
                                                    value={newMukellef?.mersisno} 
                                                    onChange={handleNewMukellefFormChange} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="ticaretsicilno">Ticaret Sicil No</label>
                                                <input 
                                                    id="ticaretsicilno"
                                                    type="tel"
                                                    placeholder="Ticaret sicil no" 
                                                    className="form-input"
                                                    name='ticaretsicilno'
                                                    value={newMukellef?.ticaretsicilno} 
                                                    onChange={handleNewMukellefFormChange} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="tesciltarihi">Tescil Tarihi</label>
                                                <input 
                                                    id="tesciltarihi"
                                                    type="date"
                                                    placeholder="Tescil tarihi" 
                                                    className="form-input"
                                                    name='tesciltarihi'
                                                    value={newMukellef?.tesciltarihi} 
                                                    onChange={handleNewMukellefFormChange} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="tescilkurulusyeri">Tescil Kuruluş Yeri</label>
                                                <select
                                                    name="tescilkurulusyeri"
                                                    id='tescilkurulusyeri'
                                                    className="form-input"
                                                    placeholder='il seçiniz'
                                                    onChange={handleNewMukellefFormChange}
                                                    value={newMukellef?.tescilkurulusyeri}
                                                >
                                                <option value="" disabled>il seçiniz</option>

                                                    {illers.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.il}>{i?.il}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="kdvmukellefiyeti">KDV Mükellefiyeti</label>
                                                <select
                                                    name="kdvmukellefiyeti"
                                                    id='kdvmukellefiyeti'
                                                    className="form-input"
                                                    placeholder='seçiniz'
                                                    onChange={handleNewMukellefFormChange}
                                                    value={newMukellef?.kdvmukellefiyeti}
                                                >

                                                    <option value="" disabled>-</option>
                                                    <option value="Var">Var</option>
                                                    <option value="Yok">Yok</option>

                                                </select>
                                            </div>
                                            
                                            <div className="mb-5">
                                                <label htmlFor="kdvvergidairesi">KDV Vergi Dairesi</label>
                                                <select
                                                    id="kdvvergidairesi"
                                                    placeholder="vergi dairesi"
                                                    className="form-input"
                                                    name='kdvvergidairesi'
                                                    required
                                                    value={newMukellef?.kdvvergidairesi}
                                                    onChange={handleNewMukellefFormChange}
                                                >
                                                       <option value="" disabled>KDV Vergi Dairesi</option>
                                                       {vergidaireleri.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.VERGİ_DAİRESİ_ADI}>{i.VERGİ_DAİRESİ_ADI}</option>
                                                        )
                                                       })}
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="kdvvergidairesikodu">KDV Vergi Dairesi Kodu</label>
                                                <select
                                                    id="kdvvergidairesikodu"
                                                    placeholder="vergi dairesi kodu"
                                                    className="form-input"
                                                    name='kdvvergidairesikodu'
                                                    required
                                                    value={newMukellef?.kdvvergidairesikodu}
                                                    onChange={handleNewMukellefFormChange}
                                                >
                                                       <option value="" disabled>KDV Vergi Dairesi Kodu</option>
                                                       {vergidaireleri.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.VD_KODU}>{i.VD_KODU}</option>
                                                        )
                                                       })}
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="kdvvergidairesiililce">KDV Vergi Dairesi İl/ İlçe</label>
                                                <select
                                                    id="kdvvergidairesiililce"
                                                    placeholder="vergi dairesi il ilçe"
                                                    className="form-input"
                                                    name='kdvvergidairesiililce'
                                                    value={newMukellef?.kdvvergidairesiililce}
                                                    onChange={handleNewMukellefFormChange}
                                                >
                                                       <option value="" disabled>KDV Vergi Dairesi İl İlçe</option>
                                                       {vergidaireleri.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.İLİ}>{i.İLİ}</option>
                                                        )
                                                       })}
                                                </select>
                                            </div>
                                            <h6 className='my-5'>GİB Entegratör Bilgileri</h6>

                                            <div className="mb-5">
                                                <label htmlFor="entegrator">Entegrator</label>
                                                <select
                                                    id="entegrator"
                                                    placeholder="entegrator seçiniz"
                                                    className="form-input"
                                                    name='entegrator'
                                                    value={newMukellef?.entegrator||""}
                                                    onChange={handleNewMukellefFormChange}
                                                >
                                                       <option value="" disabled defaultChecked >Entegratorler</option>
                                                       {entegratorler.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.entegrator}>{i.label}</option>
                                                        )
                                                       })}
                                                </select>
                                            </div>
                                            
                                            <div className="mb-5">
                                                <label htmlFor="enusername">Kullanıcı Adı</label>
                                                <input 
                                                    id="enusername" 
                                                    type="text" 
                                                    placeholder="Kullanıcı adı"
                                                    className="form-input"
                                                    name='enusername'
                                                    value={newMukellef?.enusername} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="enpassword">Kullanıcı Şifresi</label>
                                                <input 
                                                    id="enpassword" 
                                                    type="text" 
                                                    placeholder="Kullanıcı şifresi"
                                                    className="form-input"
                                                    name='enpassword'
                                                    value={newMukellef?.enpassword} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="taahhutedilensermaye">Taahhüt Edilen Sermaye</label>
                                                <input 
                                                    id="taahhutedilensermaye" 
                                                    type="text" 
                                                    placeholder="Taahhüt edilen sermaye"
                                                    className="form-input"
                                                    name='taahhutedilensermaye'
                                                    value={newMukellef?.taahhutedilensermaye} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="odenmissermaye">Ödenmiş Sermaye</label>
                                                <input 
                                                    id="odenmissermaye" 
                                                    type="text" 
                                                    placeholder="Ödenmiş sermaye"
                                                    className="form-input"
                                                    name='odenmissermaye'
                                                    value={newMukellef?.odenmissermaye} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="baglıoldugusosyalguvenlikkurumu">Bağlı Olduğu Sosyal Güvenlik Kurumu</label>
                                                <input 
                                                    id="baglıoldugusosyalguvenlikkurumu" 
                                                    type="text" 
                                                    placeholder="Sosyal Güvenlik Kurumu"
                                                    className="form-input"
                                                    name='baglıoldugusosyalguvenlikkurumu'
                                                    value={newMukellef?.baglıoldugusosyalguvenlikkurumu} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="sosyalguvenlikkurumunumarasi">Sosyal Güvenlik Kurumu Numarası</label>
                                                <input 
                                                    id="sosyalguvenlikkurumunumarasi" 
                                                    type="text" 
                                                    placeholder="Bağlı olduğu sgk numarası"
                                                    className="form-input"
                                                    name='sosyalguvenlikkurumunumarasi'
                                                    value={newMukellef?.sosyalguvenlikkurumunumarasi} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            
                                            
                                            <h6 className='my-5'>Oda Temsilcisi Bilgileri</h6>
                                            <div className="mb-5">
                                                <label htmlFor="odatemsilcisibilgileri">Temsilci Adı</label>
                                                <input 
                                                    id="odatemsilcisibilgileri" 
                                                    type="text" 
                                                    placeholder="isim giriniz"
                                                    className="form-input"
                                                    name='adi'
                                                    value={newMukellef?.odatemsilcisibilgileri?.adi} 
                                                    onChange={handleNewMukellefFormInnerChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="soyadi">Temsilci Soyadı</label>
                                                <input 
                                                    id="soyadi" 
                                                    type="text" 
                                                    placeholder="soyisim giriniz"
                                                    className="form-input"
                                                    name='soyadi'
                                                    value={newMukellef?.odatemsilcisibilgileri?.soyadi} 
                                                    onChange={handleNewMukellefFormInnerChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="odatemsilcisiadi">Temsilci TC Numarası</label>
                                                <input 
                                                    id="odatemsilcisiadi" 
                                                    type="text" 
                                                    placeholder="TC giriniz"
                                                    className="form-input"
                                                    name='tckimlikno'
                                                    value={newMukellef?.odatemsilcisibilgileri?.tckimlikno} 
                                                    onChange={handleNewMukellefFormInnerChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="email">Mükellef E-Posta</label>
                                                <input 
                                                    id="email" 
                                                    type="email" 
                                                    placeholder="E-Posta giriniz"
                                                    className="form-input"
                                                    name='eposta'
                                                    value={newMukellef?.eposta} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="phone">Mükellef Telefon</label>
                                                <input 
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="telefon numarası"
                                                    className="form-input"
                                                    name='phone'
                                                    value={newMukellef?.phone} 
                                                    onChange={handleNewMukellefFormChange} 
                                                />
                                            </div>
                                            <h6 className='my-5'>Muhasebe Bilgileri</h6>


                                            <div className="mb-5">
                                                <label htmlFor="yetkilismsmmm">Yetkili SM/SMMM</label>
                                                <input 
                                                    id="yetkilismsmmm" 
                                                    type="text" 
                                                    placeholder="Yetkili SM/SMMM"
                                                    className="form-input"
                                                    name='yetkilismsmmm'
                                                    value={newMukellef?.yetkilismsmmm} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="smsmmmsozlesmetarihi">SM/SMMM Sözleşme Tarihi</label>
                                                <input 
                                                    id="smsmmmsozlesmetarihi" 
                                                    type="date" 
                                                    placeholder="sözleşme tarihi"
                                                    className="form-input"
                                                    name='smsmmmsozlesmetarihi'
                                                    value={newMukellef?.smsmmmsozlesmetarihi} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="smsmmmsozlesmeno">SM/SMMM Sözleşme No</label>
                                                <input 
                                                    id="smsmmmsozlesmeno" 
                                                    type="text" 
                                                    placeholder="sözleşme no"
                                                    className="form-input"
                                                    name='smsmmmsozlesmeno'
                                                    value={newMukellef?.smsmmmsozlesmeno} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="yetkiliymm">Yetkili YMM</label>
                                                <input 
                                                    id="yetkiliymm" 
                                                    type="text" 
                                                    placeholder="Yetkili YMM"
                                                    className="form-input"
                                                    name='yetkiliymm'
                                                    value={newMukellef?.yetkiliymm} 
                                                    onChange={handleNewMukellefFormChange}
                                                />
                                            </div>
                                            
                                            <div className="flex justify-end items-center mt-8">
                                                <button type="button" className="btn btn-outline-danger" onClick={() => setAddContactModal(false)}>
                                                    İptal
                                                </button>
                                                <button 
                                                
                                                    type="button" 
                                                className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={()=>handleAddNewMukellef(()=>setAddContactModal(false))}>
                                                    {params.id ? 'Güncelle' : 'Kaydet'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Contacts;
