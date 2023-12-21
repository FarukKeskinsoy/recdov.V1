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
import { CopyAll, Details, Facebook, FacebookOutlined, Instagram, LinkedIn, Notes, RemoveCircle, Twitter, Web, WebStories } from '@mui/icons-material';
import IconXCircle from '../../components/Icon/IconXCircle';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../../components/Icon/IconX';
import { DocumentReference, doc, getDoc } from 'firebase/firestore';
import themeConfig from '../../theme.config';
import { useCopyToClipboard } from 'usehooks-ts'
import { nacelist } from '../../rawData/nace';
import { vergidaireleri } from '../../rawData/vergiDaireleri';


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
      }
      const h6Ref = useRef(null);

    const [addAddressModal, setAddAddressModal] = useState<any>(false);
    const [editAddressModal, setEditAddressModal] = useState<any>(false);
    const [thisUser, setThisUser] = useState<User>({});
    const { vktc } = useParams();

    console.log(vktc)
    const {
        deactivateMyAccount,
        editForm,
        handleProfileFormChange,
        handleNewBillingAddressChange,
        handleNewAddressChange,
        handleAccountSettingsChange,
        handleSubmitProfileUpdate,
        handleAddNewaddress,
        updating,
        handlePreferencesChange,
        newBillAddress,
        newAddress,
        accountSettings,
        preferences,
        userData,
        handleSelectAddress,
        oldAddress,
        handleClearAddress,
        handleUpdateAddress,
        handleAddBillingAdress,
        updated,
        handleDeleteAddress
    } = useAuth();

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

    


  console.log(thisUser)

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
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Ayarlar</h5>
                </div>
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
                                            onChange={handleProfileFormChange}
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
                                                onChange={handleProfileFormChange}
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
                                                onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
                                        />
                                        </div>
                                        
                                        
                                    
                                    
                                    <div>
                                        <label htmlFor="faaliyetadi">Faaliyet Adı</label>
                                        <select
                                            name="faaliyetadi"
                                            id='faaliyetadi'
                                            className="form-input"
                                            placeholder='faaliyet adi'
                                            onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
                                            defaultValue={thisUser?.vergidairesi}
                                            value={editForm?.vergidairesi}
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
                                            onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
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
                                                onChange={handleProfileFormChange}
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
                                                onChange={handleProfileFormChange}
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
                                                onChange={handleProfileFormChange}
                                            />
                                        </div>
                                    {/* <div className="sm:col-span-2 mt-3">
                                        <Button
                                            variant='contained'
                                            disabled={updating}
                                            onClick={handleSubmitProfileUpdate}
                                            type="button" className="btn btn-primary">
                                            Kaydet
                                        </Button>
                                    </div> */}
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
                                        onChange={handleProfileFormChange}
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
                                        onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
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
                                        onChange={handleProfileFormChange}
                                    />
                                    </div>
                                    
                                    
                                
                                
                                <div>
                                    <label htmlFor="kdvmukellefiyeti">KDV Mükellefiyeti</label>
                                    <select
                                        name="kdvmukellefiyeti"
                                        id='kdvmukellefiyeti'
                                        className="form-input"
                                        placeholder='Kdv mükellefiyeti'
                                        onChange={handleProfileFormChange}
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
                                        onChange={handleProfileFormChange}
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
                                        onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
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
                                            onChange={handleProfileFormChange}
                                        />
                                    </div>
                                    <div>
                                    <label htmlFor="basitusul">Basit Usül</label>
                                    <select
                                        name="basitusul"
                                        id='basitusul'
                                        className="form-input"
                                        placeholder='Basit usül'
                                        onChange={handleProfileFormChange}
                                        defaultValue={thisUser?.basitusul}
                                    >
                                            <option value="" disabled>seçiniz</option>
                                            <option value="Evet" disabled>Evet</option>
                                            <option value="Hayır" disabled>Hayır</option>
                                    </select>
                                </div>
                                {(thisUser.basitusul==="Evet" || editForm?.basitusul==="Evet")&&
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
                                    onChange={handleProfileFormChange}
                                />
                            </div>
                                }
                                {/* <div className="sm:col-span-2 mt-3">
                                    <Button
                                        variant='contained'
                                        disabled={updating}
                                        onClick={handleSubmitProfileUpdate}
                                        type="button" className="btn btn-primary">
                                        Kaydet
                                    </Button>
                                </div> */}
                            </div>
                        </div>
                    </form>
                    
                </div>
                ) : (
                    ''
                )}
               
                <Transition appear show={addAddressModal} as={Fragment}>
                <Dialog as="div" open={addAddressModal} onClose={() => setAddAddressModal(false)} className="relative z-[51]">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
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
                                        onClick={() => setAddAddressModal(false)}
                                        className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        Adres Ekle
                                    </div>
                                    <div className="p-5">
                                        <form>
                                            <div className="mb-5">
                                                <label htmlFor="adresstitle">Adres Başlığı</label>
                                                <input 
                                                    id="adresstitle"
                                                    name="title"
                                                    type="text"
                                                    placeholder="Adres başlığı giriniz" className="form-input"
                                                    value={newAddress?.title} 
                                                    onChange={handleNewAddressChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="adressname">İsim Soyisim</label>
                                                <input 
                                                    id="adressname"
                                                    name="name"
                                                    type="text"
                                                    placeholder="İsim soyisim giriniz" className="form-input"
                                                    value={newAddress?.name} 
                                                    onChange={handleNewAddressChange}
                                                />
                                            </div>
                                            
                                            <div className="mb-5">
                                                <label htmlFor="adresscity">İl</label>
                                                <select
                                                    name="city"
                                                    id='adresscity'
                                                    className="form-input"
                                                    placeholder='il seçiniz'
                                                    onChange={handleNewAddressChange}
                                                    value={newAddress?.city}
                                                >
                                                    <option value="" disabled >il seçiniz</option>

                                                    {illers.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.il}>{i?.il}</option>
                                                        )
                                                    })}
                                                </select>
                                                
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="adressregion">İlçe</label>
                                                <select
                                                    name="region"
                                                    id='adressregion'
                                                    className="form-input"
                                                    placeholder='ilçe seçiniz'
                                                    onChange={handleNewAddressChange}
                                                    value={newAddress?.region}
                                                >
                                                <option value="" disabled >ilçe seçiniz</option>

                                                {illers.find((il) => il.il === newAddress?.city)?.ilceleri?.map((ilce, ilcedx) => (
                                                    <option key={ilcedx} value={ilce}>
                                                    {ilce}
                                                    </option>
                                                ))}
                                        </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="adressText">Adres</label>
                                                <input
                                                    id="adressText"
                                                    name='address'
                                                    type="text"
                                                    placeholder="Adresi giriniz"
                                                    className="form-input"
                                                    value={newAddress?.address}
                                                    onChange={handleNewAddressChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="adressPhone">Telefon</label>
                                                <input
                                                    id="adressPhone"
                                                    name='phone'
                                                    type="tel"
                                                    placeholder="Telefonu giriniz"
                                                    className="form-input"
                                                    value={newAddress?.phone}
                                                    onChange={handleNewAddressChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                            <label htmlFor="adressZip">Posta Kodu</label>
                                                <input
                                                    id="adressZip"
                                                    name='zip'
                                                    type="text"
                                                    placeholder="Posta kodu"
                                                    className="form-input"
                                                    value={newAddress?.zip}
                                                    onChange={handleNewAddressChange}
                                                />
                                            </div>
                                            
                                            <div className="flex justify-end items-center mt-8">
                                                <button type="button" className="btn btn-outline-danger" onClick={() => {setAddAddressModal(false);
                                                handleClearAddress()
                                                }}>
                                                    İptal
                                                </button>
                                                <Button
                                                    variant='contained'
                                                    type="button"
                                                    className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={()=>handleAddNewaddress(()=>setAddAddressModal(false))}>
                                                    Kaydet
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
                </Transition>
                <Transition appear show={editAddressModal} as={Fragment}>
                <Dialog as="div" open={editAddressModal} onClose={() => setEditAddressModal(false)} className="relative z-[51]">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
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
                                        onClick={() => setEditAddressModal(false)}
                                        className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        Düzenle
                                    </div>
                                    <div className="p-5">
                                        <form>
                                            <div className="mb-5">
                                                <label htmlFor="adresstitle">Adres Başlığı</label>
                                                <input 
                                                    id="adresstitle"
                                                    name="title"
                                                    type="text"
                                                    placeholder="Adres başlığı giriniz" className="form-input"
                                                    defaultValue={oldAddress?.title}
                                                    value={newAddress?.title} 
                                                    onChange={handleNewAddressChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="adresscity">İl</label>
                                                <select
                                                    name="city"
                                                    id='adresscity'
                                                    className="form-input"
                                                    placeholder='il seçiniz'
                                                    defaultValue={oldAddress?.city}
                                                    onChange={handleNewAddressChange}
                                                    value={newAddress?.city}
                                                >
                                                    <option value="" disabled >il seçiniz</option>

                                                    {illers.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.il}>{i?.il}</option>
                                                        )
                                                    })}
                                                </select>
                                                
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="adressregion">İlçe</label>
                                                <select
                                                    name="region"
                                                    id='adressregion'
                                                    className="form-input"
                                                    placeholder='ilçe seçiniz'
                                                    defaultValue={oldAddress?.region}
                                                    onChange={handleNewAddressChange}
                                                    value={newAddress?.region}
                                                >
                                                <option value="" disabled >ilçe seçiniz</option>

                                                {illers.find((il) => il.il === newAddress?.city)?.ilceleri?.map((ilce, ilcedx) => (
                                                    <option key={ilcedx} value={ilce}>
                                                    {ilce}
                                                    </option>
                                                ))}
                                        </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="adressText">Adres</label>
                                                <input
                                                    id="adressText"
                                                    name='address'
                                                    type="text"
                                                    placeholder="Adresi giriniz"
                                                    className="form-input"
                                                    defaultValue={oldAddress?.address}
                                                    value={newAddress?.address}
                                                    onChange={handleNewAddressChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="adressPhone">Telefon</label>
                                                <input
                                                    id="adressPhone"
                                                    name='phone'
                                                    type="tel"
                                                    placeholder="Telefonu giriniz"
                                                    className="form-input"
                                                    defaultValue={oldAddress?.phone}
                                                    value={newAddress?.phone}
                                                    onChange={handleNewAddressChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                            <label htmlFor="adressZip">Posta Kodu</label>
                                                <input
                                                    id="adressZip"
                                                    name='zip'
                                                    type="text"
                                                    placeholder="Posta kodu"
                                                    className="form-input"
                                                    defaultValue={oldAddress?.zip}
                                                    value={newAddress?.zip}
                                                    onChange={handleNewAddressChange}
                                                />
                                            </div>
                                            
                                            
                                            <div className="flex justify-end items-center mt-8">
                                                <button type="button" className="btn btn-outline-danger mr-4" 
                                                onClick={()=>handleDeleteAddress(()=>setEditAddressModal(false))}
                                                >
                                                    Sil
                                                </button>
                                                <button type="button" className="btn btn-outline-danger" onClick={() => {setEditAddressModal(false);
                                                handleClearAddress()
                                                }}>
                                                    İptal
                                                </button>
                                                <Button
                                                    variant='contained'
                                                    type="button"
                                                    className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={()=>handleUpdateAddress(()=>setEditAddressModal(false))}
                                                    >
                                                    Kaydet
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
                </Transition>
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
                                       onChange={handleProfileFormChange}
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
                                           onChange={handleProfileFormChange}
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
                                           onChange={handleProfileFormChange}
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
                                       onChange={handleProfileFormChange}
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
                                       onChange={handleProfileFormChange}
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
                                       onChange={handleProfileFormChange}
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
                                       onChange={handleProfileFormChange}
                                   />
                                   
                                   </div>
                               {/* <div className="sm:col-span-2 mt-3">
                                   <Button
                                       variant='contained'
                                       disabled={updating}
                                       onClick={handleSubmitProfileUpdate}
                                       type="button" className="btn btn-primary">
                                       Kaydet
                                   </Button>
                               </div> */}
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
