import { Link, useNavigate, useParams } from 'react-router-dom';
import { Fragment, useEffect, useRef, useState } from 'react';
import { setPageTitle, toggleTheme } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import IconHome from '../../components/Icon/IconHome';
import IconDollarSignCircle from '../../components/Icon/IconDollarSignCircle';
import IconUser from '../../components/Icon/IconUser';
import IconPhone from '../../components/Icon/IconPhone';
import IconLinkedin from '../../components/Icon/IconLinkedin';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconFacebook from '../../components/Icon/IconFacebook';
import IconGithub from '../../components/Icon/IconGithub';
import { auth, db } from '../../firebase/firebase';
import { useAuth } from '../../context/authentication.context';
import { Button, IconButton } from '@mui/material';
import { iller } from '../../rawData/mukellefs';
import { illers } from '../../rawData/iller';
import { CopyAll, Details, DoorBack, Facebook, FacebookOutlined, Instagram, Key, LinkedIn, Login, Notes, RemoveCircle, Twitter, Web, WebStories } from '@mui/icons-material';
import IconXCircle from '../../components/Icon/IconXCircle';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../../components/Icon/IconX';
import { DocumentReference, doc, getDoc } from 'firebase/firestore';
import themeConfig from '../../theme.config';
import { useCopyToClipboard } from 'usehooks-ts'
import { nacelist } from '../../rawData/nace';
import { vergidaireleri } from '../../rawData/vergiDaireleri';
import { useMukellef } from '../../context/mukellef.context';
import Swal from 'sweetalert2';
import { entegratorler } from '../../rawData/entegratorList';


const ContactDetail = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Mükellef Detay'));
    });
    const [tabs, setTabs] = useState<string>('home');
    const [value, copy] = useCopyToClipboard()
    const toggleTabs = (name: string) => {
        setTabs(name);
    };
    const navigate = useNavigate();

    const navigateToSuccessPage = () => {
        navigate("/")
      };

    interface Address {
        title: string;
        address: string;
        zip: string;
        region: string;
        city: string;
        name:string
        // Add more properties if needed
      }
    interface User {
        // Assuming that adresler is an array of Address objects
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
        odatemsilcisibilgileri?:any;
        eposta?:string;
        phone?:string;
        entegrator?:string;
        enusername?:string;
        enpassword?:string;
      }
      const h6Ref = useRef(null);

    const [addAddressModal, setAddAddressModal] = useState<any>(false);
    const [editAddressModal, setEditAddressModal] = useState<any>(false);
    const [thisUser, setThisUser] = useState<User>({});
    const { vktc } = useParams();

    console.log(vktc)
    const {
        editFormFirst,
        editFormSecond,
        editFormThird,
        handleMukellefChangeFirst,
        handleMukellefChangeSecond,
        handleMukellefChangeThird,
        handleSubmitMukellefUpdate,
        updated,
        updating,
        handleMukellefChangeThirdInner,
        editEntegrator,
        handleMukellefChangeEntegrator
    }=useMukellef();

    const copyToClipboard= (item:any)=>{
        var address = document.getElementById("individualAddress");
        if(address){
            copy(`${item?.name||""} ${item?.address||""} ${item?.zip||""} ${item?.region||""}, ${item?.city||""}`);

            console.log(value)
        }
    }


    useEffect(()=>{
        const thisCred=auth.currentUser;

        const userDocPath = thisCred?.uid &&vktc ? `Users/${thisCred.uid}/Mukellefler/${vktc}` : '';
        const refUser: DocumentReference = doc(db, userDocPath);
        getDoc(refUser).then((usr)=>{
            if(usr.exists()){
              setThisUser(usr.data())
            }
        })

    },[updated])

    


  //console.log(thisUser)
  console.log(editFormFirst)
  console.log("second",editFormSecond)
  console.log("third",editFormThird)

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link 
                        to={'..'}
                        onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                        }} 
                        className="text-primary hover:underline">
                        Mükellefler
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>{thisUser.soyadiunvani}</span>
                </li>
            </ul>
            <div className="pt-5">
                {/* <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Ayarlar</h5>
                </div> */}
                <div>
                    <ul className="sm:flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('home')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'home' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconHome />
                                Genel Bilgiler
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('payment-details')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'payment-details' ? '!border-primary text-primary' : ''}`}
                            >
                                <Details style={{fontSize:16}} />
                                Detay Bilgiler
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('entegrator')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'entegrator' ? '!border-primary text-primary' : ''}`}
                            >
                                <Login style={{fontSize:16}} />
                                Entegrator
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('preferences')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'preferences' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconUser className="w-5 h-5" />
                                Sorumlu Bilgileri
                            </button>
                        </li>
                        
                    </ul>
                </div>
                {tabs === 'home' ? (
                    <div>
                        <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                            <h6 className="text-lg font-bold mb-5">Genel Bilgiler</h6>
                            <div className="flex flex-col sm:flex-row">
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>

                                        <label htmlFor="soyadiunvani">Soyadı / Ünvanı </label>
                                        <input 
                                            name="soyadiunvani" 
                                            id="soyadiunvani" 
                                            type="text"
                                            //defaultValue={userData?.uName}
                                            placeholder="soyadi ünvanı" 
                                            className="form-input"
                                            defaultValue={thisUser?.soyadiunvani}
                                            //value={editForm?.soyadiunvani}
                                            onChange={handleMukellefChangeFirst}
                                        />
                                        </div>
                                        <div>
                                            <label htmlFor="adi">Adı</label>
                                            <input 
                                                name="adi"
                                                id="adi"
                                                type="text"
                                                placeholder="adı"
                                                className="form-input"
                                                defaultValue={thisUser?.adi}
                                                //value={editForm?.adi}
                                                onChange={handleMukellefChangeFirst}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone">Telefon Numarası</label>
                                            <input 
                                                name="phone"
                                                id="phone"
                                                type="text"
                                                placeholder="telefon numarası"
                                                className="form-input"
                                                defaultValue={thisUser?.phone}
                                                //value={editForm?.adi}
                                                onChange={handleMukellefChangeFirst}
                                            />
                                        </div>
                                        <div>
                                        <label htmlFor="eposta">E-Posta Adresi</label>
                                        <input 
                                            name="eposta"
                                            id="eposta"
                                            type="text"
                                            placeholder="telefon numarası"
                                            className="form-input"
                                            defaultValue={thisUser?.eposta}
                                            //value={editForm?.adi}
                                            onChange={handleMukellefChangeFirst}
                                        />
                                        </div>
                                        
                                        
                                    
                                    
                                    <div>
                                        <label htmlFor="faaliyetadi">Faaliyet Adı</label>
                                        <select
                                            name="faaliyetadi"
                                            id='faaliyetadi'
                                            className="form-input"
                                            placeholder='faaliyet adi'
                                            onChange={handleMukellefChangeFirst}
                                            defaultValue={thisUser?.faaliyetadi}
                                        >
                                                <option value="" disabled>seçiniz</option>

                                            {nacelist.map((i,idx)=>{
                                                return(
                                                    <option key={idx} value={i.dc_NACE_BASLIK}>{i?.dc_NACE_BASLIK}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="faaliyetkodu">Faaliyet Kodu</label>
                                        <select
                                            name="faaliyetkodu"
                                            id='faaliyetkodu'
                                            className="form-input"
                                            placeholder='faaliyet kodu'
                                            onChange={handleMukellefChangeFirst}
                                            defaultValue={thisUser?.faaliyetkodu}
                                        >
                                                <option value="" disabled>seçiniz</option>

                                            {nacelist.map((i,idx)=>{
                                                return(
                                                    <option key={idx} value={i.dc_NACE_KODU}>{i?.dc_NACE_KODU}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="vergidairesi">Vergi Dairesi</label>
                                        <select
                                            name="vergidairesi"
                                            id='vergidairesi'
                                            className="form-input"
                                            placeholder='il seçiniz'
                                            onChange={handleMukellefChangeFirst}
                                            defaultValue={thisUser?.vergidairesi}
                                            value={editFormFirst?.vergidairesi}
                                        >
                                                <option value="" disabled>Vergi Dairesi</option>

                                            {vergidaireleri.map((i,idx)=>{
                                                return(
                                                    <option key={idx} value={i.VERGİ_DAİRESİ_ADI}>{i?.VERGİ_DAİRESİ_ADI}</option>
                                                )
                                            })}
                                        </select>
                                        
                                    </div>
                                    <div>
                                        <label htmlFor="vergidairesiililce">Vergi Dairesi İl / İlçe</label>
                                        <select
                                            name="vergidairesiililce"
                                            id='vergidairesiililce'
                                            className="form-input"
                                            placeholder='il/ilçe seçiniz'
                                            onChange={handleMukellefChangeFirst}
                                            defaultValue={thisUser?.vergidairesiililce}
                                        >
                                                <option value="" disabled >il/ilçe seçiniz</option>

                                                {illers.map((ilce, ilcedx) => (
                                                    <option key={ilcedx} value={ilce.il}>
                                                    {ilce.il}
                                                    </option>
                                                ))}
                                        </select>
                                        
                                    </div>
                                    <div>
                                        <label htmlFor="vergidairesikodu">Vergi Dairesi Kodu</label>
                                        <select
                                            name="vergidairesikodu"
                                            id='vergidairesikodu'
                                            className="form-input"
                                            placeholder='kodu seçiniz'
                                            onChange={handleMukellefChangeFirst}
                                            defaultValue={thisUser?.vergidairesikodu}
                                        >
                                                <option value="" disabled >kodu seçiniz</option>

                                                {vergidaireleri.map((vd, vdex) => (
                                                    <option key={vdex} value={vd.VD_KODU}>
                                                    {vd.VD_KODU}
                                                    </option>
                                                ))}
                                        </select>
                                        
                                    </div>
                                        <div>
                                            <label htmlFor="vergikimlikno">Vergi Kimlik Numarası</label>
                                            <input 
                                                name="vergikimlikno"
                                                id="vergikimlikno"
                                                type="text"
                                                placeholder="Vergi kimlik numarası"
                                                className="form-input"
                                                defaultValue={thisUser?.vergikimlikno}
                                                //value={editForm?.adi}
                                                onChange={handleMukellefChangeFirst}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="tckimlikno">TC Kimlik Numarası</label>
                                            <input 
                                                name="tckimlikno"
                                                id="tckimlikno"
                                                type="text"
                                                placeholder="TC kimlik numarası"
                                                className="form-input"
                                                defaultValue={thisUser?.tckimlikno}
                                                //value={editForm?.adi}
                                                onChange={handleMukellefChangeFirst}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="ticaretsicilno">Ticaret Sicil Numarası</label>
                                            <input 
                                                name="ticaretsicilno"
                                                id="ticaretsicilno"
                                                type="text"
                                                placeholder="Ticaret kimlik numarası"
                                                className="form-input"
                                                defaultValue={thisUser?.ticaretsicilno}
                                                //value={editForm?.adi}
                                                onChange={handleMukellefChangeFirst}
                                            />
                                        </div>
                                    <div className="sm:col-span-2 mt-3">
                                        <Button
                                            variant='contained'
                                            disabled={updating}
                                            onClick={()=>vktc && handleSubmitMukellefUpdate(vktc,editFormFirst)}
                                            type="button" className="btn btn-primary">
                                            Kaydet
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                ) : (
                    ''
                )}
                {tabs === 'payment-details' ? (
                    <div>
                    <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                        <h6 className="text-lg font-bold mb-5">Detay Bilgiler</h6>
                        <div className="flex flex-col sm:flex-row">
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>

                                    <label htmlFor="mersisno">MERSIS Numarası</label>
                                    <input 
                                        name="mersisno" 
                                        id="mersisno" 
                                        type="text"
                                        //defaultValue={userData?.uName}
                                        placeholder="Mersis tarihi" 
                                        className="form-input"
                                        defaultValue={thisUser?.mersisno}
                                        //value={editForm?.soyadiunvani}
                                        onChange={handleMukellefChangeSecond}
                                    />
                                    </div>
                                <div>

                                    <label htmlFor="kurulustarihi">Kuruluş Tarihi </label>
                                    <input 
                                        name="kurulustarihi" 
                                        id="kurulustarihi" 
                                        type="date"
                                        //defaultValue={userData?.uName}
                                        placeholder="kuruluş tarihi" 
                                        className="form-input"
                                        defaultValue={thisUser?.kurulustarihi}
                                        //value={editForm?.soyadiunvani}
                                        onChange={handleMukellefChangeSecond}
                                    />
                                    </div>
                                    <div>
                                        <label htmlFor="kapanıstarihi">Kapanış Tarihi</label>
                                        <input 
                                            name="kapanıstarihi"
                                            id="kapanıstarihi"
                                            type="date"
                                            placeholder="kapanış tarihi"
                                            className="form-input"
                                            defaultValue={thisUser?.kapanıstarihi}
                                            //value={editForm?.adi}
                                            onChange={handleMukellefChangeSecond}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="tesciltarihi">Tescil Tarihi</label>
                                        <input 
                                            name="tesciltarihi"
                                            id="tesciltarihi"
                                            type="date"
                                            placeholder="tescil tarihi"
                                            className="form-input"
                                            defaultValue={thisUser?.tesciltarihi}
                                            //value={editForm?.adi}
                                            onChange={handleMukellefChangeSecond}
                                        />
                                    </div>
                                    <div>
                                    <label htmlFor="tescilkurulusyeri">Tescil Kuruluş Yeri</label>
                                    <input 
                                        name="tescilkurulusyeri"
                                        id="tescilkurulusyeri"
                                        type="text"
                                        placeholder="tescil yeri"
                                        className="form-input"
                                        defaultValue={thisUser?.tescilkurulusyeri}
                                        //value={editForm?.adi}
                                        onChange={handleMukellefChangeSecond}
                                    />
                                    </div>
                                    
                                    
                                
                                
                                <div>
                                    <label htmlFor="kdvmukellefiyeti">KDV Mükellefiyeti</label>
                                    <select
                                        name="kdvmukellefiyeti"
                                        id='kdvmukellefiyeti'
                                        className="form-input"
                                        placeholder='Kdv mükellefiyeti'
                                        onChange={handleMukellefChangeSecond}
                                        defaultValue={thisUser?.kdvmukellefiyeti}
                                    >
                                            <option value="" disabled>seçiniz</option>
                                            <option value="Var" disabled>Var</option>
                                            <option value="Yok" disabled>Yok</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="kdvvergidairesi">KDV Vergi Dairesi</label>
                                    <select
                                        name="kdvvergidairesi"
                                        id='kdvvergidairesi'
                                        className="form-input"
                                        placeholder='kdv vergi dairesi seçiniz'
                                        onChange={handleMukellefChangeSecond}
                                        defaultValue={thisUser?.kdvvergidairesi}
                                    >
                                            <option value="" disabled>Vergi Dairesi</option>

                                        {vergidaireleri.map((i,idx)=>{
                                            return(
                                                <option key={idx} value={i.VERGİ_DAİRESİ_ADI}>{i?.VERGİ_DAİRESİ_ADI}</option>
                                            )
                                        })}
                                    </select>
                                    
                                </div>
                                <div>
                                    <label htmlFor="kdvvergidairesiililce">KDV Vergi Dairesi İl / İlçe</label>
                                    <select
                                        name="kdvvergidairesiililce"
                                        id='kdvvergidairesiililce'
                                        className="form-input"
                                        placeholder='il/ilçe seçiniz'
                                        onChange={handleMukellefChangeSecond}
                                        defaultValue={thisUser?.kdvvergidairesiililce}
                                    >
                                            <option value="" disabled >il/ilçe seçiniz</option>

                                            {illers.map((ilce, ilcedx) => (
                                                <option key={ilcedx} value={ilce.il}>
                                                {ilce.il}
                                                </option>
                                            ))}
                                    </select>
                                    
                                </div>
                                <div>
                                        <label htmlFor="kdvvergidairesikodu">KDV Vergi Dairesi Kodu</label>
                                        <select
                                            name="kdvvergidairesikodu"
                                            id='kdvvergidairesikodu'
                                            className="form-input"
                                            placeholder='kodu seçiniz'
                                            onChange={handleMukellefChangeSecond}
                                            defaultValue={thisUser?.kdvvergidairesikodu}
                                        >
                                                <option value="" disabled >kodu seçiniz</option>

                                                {vergidaireleri.map((vd, vdex) => (
                                                    <option key={vdex} value={vd.VD_KODU}>
                                                    {vd.VD_KODU}
                                                    </option>
                                                ))}
                                        </select>
                                        
                                    </div>
                                    <div>
                                        <label htmlFor="taahhutedilensermaye">Taahhüt Edilen Sermaye</label>
                                        <input 
                                            name="taahhutedilensermaye"
                                            id="taahhutedilensermaye"
                                            type="text"
                                            placeholder="Taahhüt edilen sermaye"
                                            className="form-input"
                                            defaultValue={thisUser?.taahhutedilensermaye}
                                            //value={editForm?.adi}
                                            onChange={handleMukellefChangeSecond}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="odenmissermaye">Ödenmiş Sermaye</label>
                                        <input 
                                            name="odenmissermaye"
                                            id="odenmissermaye"
                                            type="text"
                                            placeholder="Ödenmiş sermaye"
                                            className="form-input"
                                            defaultValue={thisUser?.odenmissermaye}
                                            //value={editForm?.adi}
                                            onChange={handleMukellefChangeSecond}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="baglıoldugusosyalguvenlikkurumu">Bağlı Olduğu SGK</label>
                                        <input 
                                            name="baglıoldugusosyalguvenlikkurumu"
                                            id="baglıoldugusosyalguvenlikkurumu"
                                            type="text"
                                            placeholder="Bağlı olduğu SGK"
                                            className="form-input"
                                            defaultValue={thisUser?.baglıoldugusosyalguvenlikkurumu}
                                            //value={editForm?.adi}
                                            onChange={handleMukellefChangeSecond}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="baglıoldugumeslekitesekkul">Bağlı Olduğu Mesleki Teşekkül</label>
                                        <input 
                                            name="baglıoldugumeslekitesekkul"
                                            id="baglıoldugumeslekitesekkul"
                                            type="text"
                                            placeholder="Bağlı olduğu mesleki teşekkül"
                                            className="form-input"
                                            defaultValue={thisUser?.baglıoldugumeslekitesekkul}
                                            //value={editForm?.adi}
                                            onChange={handleMukellefChangeSecond}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="meslekitesekkulnumarasi">Mesleki Teşekkül Numarası</label>
                                        <input 
                                            name="meslekitesekkulnumarasi"
                                            id="meslekitesekkulnumarasi"
                                            type="text"
                                            placeholder="Mesleki teşekkül numarası"
                                            className="form-input"
                                            defaultValue={thisUser?.meslekitesekkulnumarasi}
                                            //value={editForm?.adi}
                                            onChange={handleMukellefChangeSecond}
                                        />
                                    </div>
                                    <div>
                                    <label htmlFor="basitusul">Basit Usül</label>
                                    <select
                                        name="basitusul"
                                        id='basitusul'
                                        className="form-input"
                                        placeholder='Basit usül'
                                        onChange={handleMukellefChangeSecond}
                                        defaultValue={thisUser?.basitusul}
                                    >
                                            <option value="" disabled>seçiniz</option>
                                            <option value="Evet" disabled>Evet</option>
                                            <option value="Hayır" disabled>Hayır</option>
                                    </select>
                                </div>
                                {(thisUser.basitusul==="Evet" || editFormSecond?.basitusul==="Evet")&&
                                <div>
                                <label htmlFor="basitusulfaaliyetkodu">Basit Usül Faaliyet Kodu</label>
                                <input 
                                    name="basitusulfaaliyetkodu"
                                    id="basitusulfaaliyetkodu"
                                    type="text"
                                    placeholder="Basit usül faaliyet kodu"
                                    className="form-input"
                                    defaultValue={thisUser?.basitusulfaaliyetkodu}
                                    //value={editForm?.adi}
                                    onChange={handleMukellefChangeSecond}
                                />
                            </div>
                                }
                                <div className="sm:col-span-2 mt-3">
                                    <Button
                                        variant='contained'
                                        disabled={updating}
                                        onClick={()=>vktc && handleSubmitMukellefUpdate(vktc,editFormSecond)}
                                        type="button" className="btn btn-primary">
                                        Kaydet
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                    
                </div>
                ) : (
                    ''
                )}
               
                {tabs === 'entegrator' ? (
                   <div>
                   <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                       <h6 className="text-lg font-bold mb-5">Entegrasyon Bilgileri</h6>
                       <div className="flex flex-col sm:flex-row">
                           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                               <div>

                               <label htmlFor="entegrator">Entegratör</label>
                                                <select
                                                    id="entegrator"
                                                    placeholder="entegrator seçiniz"
                                                    className="form-input"
                                                    name='entegrator'
                                                    defaultValue={thisUser.entegrator}
                                                    onChange={handleMukellefChangeEntegrator}
                                                >
                                                       <option value="" disabled defaultChecked >Entegratorler</option>
                                                       {entegratorler.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.entegrator}>{i.label}</option>
                                                        )
                                                       })}
                                                </select>
                                   </div>
                                   <div>
                                       <label htmlFor="enusername">Entegratör Kullanıcı Adı</label>
                                       <input 
                                           name="enusername"
                                           id="enusername"
                                           type="text"
                                           placeholder="kullanıcı adı"
                                           className="form-input"
                                           defaultValue={thisUser?.enusername}
                                           //value={editForm?.adi}
                                           onChange={handleMukellefChangeEntegrator}
                                       />
                                   </div>
                                   <div>
                                       <label htmlFor="enpassword">Entegratör Şifre</label>
                                       <input 
                                           name="enpassword"
                                           id="enpassword"
                                           type="text"
                                           placeholder="şifre"
                                           className="form-input"
                                           defaultValue={thisUser?.enpassword}
                                           //value={editForm?.adi}
                                           onChange={handleMukellefChangeEntegrator}
                                       />
                                   </div>
                                   
                               <div className="sm:col-span-2 mt-3">
                                   <Button
                                       variant='contained'
                                       disabled={updating}
                                       onClick={()=>vktc && handleSubmitMukellefUpdate(vktc,editEntegrator)}
                                       type="button" className="btn btn-primary">
                                       Kaydet
                                   </Button>
                               </div>
                           </div>
                       </div>
                   </form>
                   
               </div>
                ) : (
                    ''
                )}
                {tabs === 'preferences' ? (
                   <div>
                   <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                       <h6 className="text-lg font-bold mb-5">Sorumlu Bilgileri</h6>
                       <div className="flex flex-col sm:flex-row">
                           <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                               <div>

                                   <label htmlFor="yetkilismsmmm">Yetkili SM/SMMM</label>
                                   <input 
                                       name="yetkilismsmmm" 
                                       id="yetkilismsmmm" 
                                       type="text"
                                       //defaultValue={userData?.uName}
                                       placeholder="Yetkili SM/SMMM" 
                                       className="form-input"
                                       defaultValue={thisUser?.yetkilismsmmm}
                                       //value={editForm?.soyadiunvani}
                                       onChange={handleMukellefChangeThird}
                                   />
                                   </div>
                                   <div>
                                       <label htmlFor="smsmmmsozlesmetarihi">SM/SMMM Sözleşme Tarihi</label>
                                       <input 
                                           name="smsmmmsozlesmetarihi"
                                           id="smsmmmsozlesmetarihi"
                                           type="date"
                                           placeholder="sözleşme tarihi"
                                           className="form-input"
                                           defaultValue={thisUser?.smsmmmsozlesmetarihi}
                                           //value={editForm?.adi}
                                           onChange={handleMukellefChangeThird}
                                       />
                                   </div>
                                   <div>
                                       <label htmlFor="smsmmmsozlesmeno">SM/SMMM Sözleşme No</label>
                                       <input 
                                           name="smsmmmsozlesmeno"
                                           id="smsmmmsozlesmeno"
                                           type="text"
                                           placeholder="sözleşme numarası"
                                           className="form-input"
                                           defaultValue={thisUser?.smsmmmsozlesmeno}
                                           //value={editForm?.adi}
                                           onChange={handleMukellefChangeThird}
                                       />
                                   </div>
                                   <div>
                                   <label htmlFor="yetkiliymm">Yetkili YMM</label>
                                   <input 
                                       name="yetkiliymm"
                                       id="yetkiliymm"
                                       type="text"
                                       placeholder="Yetkili YMM"
                                       className="form-input"
                                       defaultValue={thisUser?.yetkiliymm}
                                       //value={editForm?.adi}
                                       onChange={handleMukellefChangeThird}
                                   />
                                   </div>
                                   <div>
                                   <h5 className='mb-3'>Oda Temsilcisi Bilgileri</h5>
                                   <label htmlFor="odatemsilcisibilgileri">Adı</label>
                                   <input 
                                       name="adi"
                                       id="odatemsilcisibilgileri"
                                       type="text"
                                       placeholder="Adı"
                                       className="form-input mb-2"
                                       defaultValue={thisUser?.odatemsilcisibilgileri?.adi}
                                       //value={editForm?.adi}
                                       onChange={handleMukellefChangeThirdInner}
                                   />
                                   <label htmlFor="odatemsilcisibilgilerisoyadi">Soyadı</label>
                                   <input 
                                       name="soyadi"
                                       id="odatemsilcisibilgilerisoyadi"
                                       type="text"
                                       placeholder="Soyadı"
                                       className="form-input mb-2"
                                       defaultValue={thisUser?.odatemsilcisibilgileri?.soyadi}
                                       //value={editForm?.adi}
                                       onChange={handleMukellefChangeThirdInner}
                                   />
                                   <label htmlFor="odatemsilcisibilgileriTC">TC Kimlik Numarası</label>
                                   <input 
                                       name="tckimlikno"
                                       id="odatemsilcisibilgileriTC"
                                       type="text"
                                       placeholder="TC Kimlik numarası"
                                       className="form-input mb-2"
                                       defaultValue={thisUser?.odatemsilcisibilgileri?.tckimlikno}
                                       //value={editForm?.adi}
                                       onChange={handleMukellefChangeThirdInner}
                                   />
                                   
                                   </div>
                               <div className="sm:col-span-2 mt-3">
                                   <Button
                                       variant='contained'
                                       disabled={updating}
                                       onClick={()=>vktc && handleSubmitMukellefUpdate(vktc,editFormThird)}
                                       type="button" className="btn btn-primary">
                                       Kaydet
                                   </Button>
                               </div>
                           </div>
                       </div>
                   </form>
                   
               </div>
                ) : (
                    ''
                )}
               
            </div>
        </div>
    );
};

export default ContactDetail;
