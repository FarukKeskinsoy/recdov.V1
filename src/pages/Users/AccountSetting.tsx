import { Link, useNavigate } from 'react-router-dom';
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
import { CopyAll, Facebook, FacebookOutlined, Instagram, LinkedIn, RemoveCircle, Twitter, Web, WebStories } from '@mui/icons-material';
import IconXCircle from '../../components/Icon/IconXCircle';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../../components/Icon/IconX';
import { DocumentReference, doc, getDoc } from 'firebase/firestore';
import themeConfig from '../../theme.config';
import { useCopyToClipboard } from 'usehooks-ts'


const AccountSetting = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Hesap Ayarları'));
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
        adresler?: Address[];
        apps?:string[];
        uName?:string;
        uLname?:string;
        uid?:string;
        field?:string;
        LinURL?:string;
        XURL?:string;
        insURL?:string;
        webURL?:string;
        bEmail?:string;
        bAddress?:string;
        bCity?:string;
        bRegion?:string;
        bZip?:string;
        bName?:string;
        email?:string;
        uUnq?:string;
        av?:string;
        region?:string;
        city?:string;
        tpCount?:number;
        admin?:boolean;
        dev?:boolean;
        tp?:boolean;
        private?:boolean;
        privateEmail?:boolean;
        hideAds?:boolean;
        hideSoc?:boolean;
        active?:boolean;
        fa?:boolean;
        updAt?:object;
        crAt?:object;
      }
      const h6Ref = useRef(null);

    const [addAddressModal, setAddAddressModal] = useState<any>(false);
    const [editAddressModal, setEditAddressModal] = useState<any>(false);
    const [thisUser, setThisUser] = useState<User>({});

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
        const userDocPath = thisCred?.uid ? `Users/${thisCred.uid}` : '';
        const refUser: DocumentReference = doc(db, userDocPath);
        getDoc(refUser).then((usr)=>{
            if(usr.exists()){
              setThisUser(usr.data())
            }
        })

    },[updated])

    


  

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Kullanıcılar
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Hesap Ayarları</span>
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
                                Anasayfa
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('payment-details')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'payment-details' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconDollarSignCircle />
                                Ödeme Detayları
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('preferences')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'preferences' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconUser className="w-5 h-5" />
                                Tercihler
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('danger-zone')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'danger-zone' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconPhone />
                                Güvenlik
                            </button>
                        </li>
                    </ul>
                </div>
                {tabs === 'home' ? (
                    <div>
                        <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                            <h6 className="text-lg font-bold mb-5">Genel Bilgiler</h6>
                            <div className="flex flex-col sm:flex-row">
                                <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                                {auth.currentUser?.photoURL?<img className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100" src="/assets/images/user-profile.jpeg" alt="userProfile" />:
                                <div className="border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2">
                                <IconUser className="w-9 h-9" />
                                </div>}                                </div>
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="uName">Ad</label>
                                        <input 
                                            name="uName" 
                                            id="uName" 
                                            type="text"
                                            //defaultValue={userData?.uName}
                                            placeholder="ad" 
                                            className="form-input"
                                            defaultValue={userData?.uName}
                                            value={editForm?.uName}
                                            onChange={handleProfileFormChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="uLname">Soyad</label>
                                        <input 
                                            name="uLname"
                                            id="uLname"
                                            type="text"
                                            placeholder="soyad"
                                            className="form-input"
                                            defaultValue={userData?.uLname}
                                            value={editForm?.uLname}
                                            onChange={handleProfileFormChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="field">Alan</label>
                                        <input 
                                            name="field"
                                            id="field"
                                            type="text"
                                            placeholder="muhasebe uzmanı"
                                            className="form-input"
                                            defaultValue={userData?.field}
                                            value={editForm?.field}
                                            onChange={handleProfileFormChange}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city">İl</label>
                                        <select
                                            name="city"
                                            id='city'
                                            className="form-input"
                                            placeholder='il seçiniz'
                                            onChange={handleProfileFormChange}
                                            defaultValue={userData?.city}
                                            value={editForm?.city}
                                        >
                                                <option value="" disabled selected>il seçiniz</option>

                                            {illers.map((i,idx)=>{
                                                return(
                                                    <option key={idx} value={i.il}>{i?.il}</option>
                                                )
                                            })}
                                        </select>
                                        
                                    </div>
                                    <div>
                                        <label htmlFor="region">İlçe</label>
                                        <select
                                            name="region"
                                            id='region'
                                            className="form-input"
                                            placeholder='ilçe seçiniz'
                                            onChange={handleProfileFormChange}
                                            defaultValue={userData?.region}
                                            value={editForm?.region}
                                        >
                                                <option value="" disabled selected>ilçe seçiniz</option>

                                                {illers.find((il) => il.il === editForm?.city)?.ilceleri?.map((ilce, ilcedx) => (
                                                    <option key={ilcedx} value={ilce}>
                                                    {ilce}
                                                    </option>
                                                ))}
                                        </select>
                                        
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Telefon</label>
                                        <input 
                                            name="phone"
                                            id="phone"
                                            type="text"
                                            placeholder="+9 (500) ..."
                                            className="form-input"
                                            defaultValue={userData?.phone}
                                            value={editForm?.phone}
                                            onChange={handleProfileFormChange}    
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">E-Posta</label>
                                        <input
                                            disabled
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="abc@gmail.com"
                                            className="form-input"
                                            defaultValue={userData?.email}
                                            onChange={handleProfileFormChange}    
                                        />
                                    </div>
                                    <div className="sm:col-span-2 mt-3">
                                        <Button
                                            variant='contained'
                                            disabled={updating}
                                            onClick={handleSubmitProfileUpdate}
                                            type="button" className="btn btn-primary">
                                            Kaydet
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 bg-white dark:bg-black">
                            <h6 className="text-lg font-bold mb-5">Sosyal Ağ</h6>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex">
                                    <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <LinkedIn className="w-5 h-5" />
                                    </div>
                                    <input
                                        id='LinURL' 
                                        name='LinURL'
                                        value={editForm?.LinURL}
                                        defaultValue={userData?.LinURL}
                                        onChange={handleProfileFormChange}
                                        type="text"
                                        placeholder="linkedin profil URL"
                                        className="form-input"
                                    />
                                </div>
                                <div className="flex">
                                    <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <Twitter className="w-5 h-5" />
                                    </div>
                                    <input 
                                        id='XURL' 
                                        name='XURL'
                                        value={editForm?.XURL}
                                        defaultValue={userData?.XURL}
                                        onChange={handleProfileFormChange}
                                        type="text" placeholder="X profil URL" className="form-input" />
                                </div>
                                <div className="flex">
                                    <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <Instagram className="w-5 h-5" />
                                    </div>
                                    <input 
                                        id='insURL' 
                                        name='insURL'
                                        value={editForm?.insURL}
                                        defaultValue={userData?.insURL}
                                        onChange={handleProfileFormChange}
                                        type="text" placeholder="instagram profil URL" className="form-input" />
                                </div>
                                <div className="flex">
                                    <div className="bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2">
                                        <Web/>
                                    </div>
                                    <input 
                                        id='webURL' 
                                        name='webURL'
                                        value={editForm?.webURL}
                                        defaultValue={userData?.webURL}
                                        onChange={handleProfileFormChange}
                                        type="text" placeholder="web site URL" className="form-input" />
                                </div>
                            </div>
                        </form>
                        
                    </div>
                ) : (
                    ''
                )}
                {tabs === 'payment-details' ? (
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                            <div className="panel">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Fatura Adresi</h5>
                                    <p>
                                        <span className="text-primary">Fatura</span> bilgilerinizde yapılacak değişiklikler, planlı ödeme tarihinden itibaren geçerli olacak ve bir sonraki faturanıza yansıtılacaktır.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    {thisUser?.adresler?.map((a:Address,adx:number)=>{
                                        return(
                                        <div 
                                        key={adx}
                                        className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-start justify-between py-3">
                                            <h6
                                            className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                {a?.title}
                                                <span
                                                id='individualAddress'
                                                ref={h6Ref}
                                                className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">
                                                    {a.name} {a?.address} {a?.zip} {a?.region}, {a?.city}</span>
                                            </h6>
                                            <IconButton
                                                color='inherit'
                                                onClick={()=>copyToClipboard(a)}
                                            >
                                                <CopyAll/>
                                            </IconButton>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button 
                                                onClick={()=>{
                                                    handleSelectAddress(a);
                                                    if(a){
                                                        setEditAddressModal(true)
                                                    }
                                                }}
                                                className="btn btn-dark">Düzenle</button>
                                            </div>
                                        </div>
                                    </div>
                                        )
                                    })}
                                    
                                    <div>
                                    </div>
                                </div>
                                <button 
                                onClick={(e)=>setAddAddressModal(true)}
                                className="btn btn-primary">Adres Ekle</button>
                            </div>
                            <div className="panel">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Fatura Adresi Ekle</h5>
                                    <p>
                                        Yeni <span className="text-primary">Fatura</span> adresi bilginizi belirler.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <form>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="billingName">İsim Syisim</label>
                                                <input 
                                                    name='bName'
                                                    id="bName" 
                                                    type="text" 
                                                    placeholder="İsim soyisim giriniz" 
                                                    className="form-input"
                                                    value={newBillAddress?.bName}
                                                    onChange={handleNewBillingAddressChange}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="bEmail">E-Posta</label>
                                                <input 
                                                    id="bEmail"
                                                    name="bEmail"
                                                    type="email"
                                                    placeholder="E-Posta giriniz"
                                                    className="form-input"
                                                    value={newBillAddress?.bEmail}
                                                    onChange={handleNewBillingAddressChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="bAddress">Adres</label>
                                            <input 
                                                id="bAddress" 
                                                name="bAddress" 
                                                type="text" 
                                                placeholder="Adres girin" 
                                                className="form-input"
                                                value={newBillAddress?.bAddress}
                                                onChange={handleNewBillingAddressChange}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                                            <div className="md:col-span-2">
                                                <label htmlFor="bCity">Şehir</label>
                                                <select
                                                    name="bCity"
                                                    id='bCity'
                                                    className="form-input"
                                                    placeholder='il seçiniz'
                                                    onChange={handleNewBillingAddressChange}
                                                    value={newBillAddress?.bCity}
                                                >
                                                    <option value="" disabled selected>il seçiniz</option>

                                                    {illers.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i.il}>{i?.il}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="bRegion">İlçe</label>
                                                <select
                                                    name="bRegion"
                                                    id='bRegion'
                                                    className="form-input"
                                                    placeholder='il seçiniz'
                                                    onChange={handleNewBillingAddressChange}
                                                    value={newBillAddress?.bRegion}
                                                >
                                                    <option value="" disabled selected>ilçe seçiniz</option>

                                                    {illers.find((il) => il.il === newBillAddress?.city)?.ilceleri?.map((ilce, ilcedx) => (
                                                        <option key={ilcedx} value={ilce}>
                                                        {ilce}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="bZip">Posta Kodu</label>
                                                <input 
                                                    id="bZip"
                                                    name="bZip"
                                                    type="text"
                                                    placeholder="Posta kodu"
                                                    className="form-input"
                                                    value={newAddress?.bZip}
                                                    onChange={handleNewBillingAddressChange}
                                                />
                                            </div>
                                        </div>
                                        <button 
                                            onClick={handleAddBillingAdress}
                                            type="button" className="btn btn-primary">
                                            Kaydet
                                        </button>
                                    </form>
                                </div>
                            </div>
                            {/* <div className="panel">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Ödeme Geçmişi</h5>
                                    <p>
                                        Changes to your <span className="text-primary">Payment Method</span> information will take effect starting with scheduled payment and will be refelected on your
                                        next invoice.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-start justify-between py-3">
                                            <div className="flex-none ltr:mr-4 rtl:ml-4">
                                                <img src="/assets/images/card-americanexpress.svg" alt="img" />
                                            </div>
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                Mastercard
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">XXXX XXXX XXXX 9704</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-start justify-between py-3">
                                            <div className="flex-none ltr:mr-4 rtl:ml-4">
                                                <img src="/assets/images/card-mastercard.svg" alt="img" />
                                            </div>
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                American Express
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">XXXX XXXX XXXX 310</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-start justify-between py-3">
                                            <div className="flex-none ltr:mr-4 rtl:ml-4">
                                                <img src="/assets/images/card-visa.svg" alt="img" />
                                            </div>
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                Visa
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">XXXX XXXX XXXX 5264</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary">Add Payment Method</button>
                            </div> */}
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {/* <div className="panel">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Fatura Adresi Ekle</h5>
                                    <p>
                                        Yeni <span className="text-primary">Fatura</span> adresi bilginizi belirler.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <form>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="billingName">İsim Syisim</label>
                                                <input 
                                                    name='billingName'
                                                    id="billingName" 
                                                    type="text" 
                                                    placeholder="İsim soyisim giriniz" 
                                                    className="form-input"
                                                    onChange={handleProfileFormChange}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="billingEmail">E-Posta</label>
                                                <input 
                                                    id="billingEmail"
                                                    name="billingEmail"
                                                    type="email"
                                                    placeholder="E-Posta giriniz"
                                                    className="form-input"
                                                    onChange={handleProfileFormChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="billingAddress">Adres</label>
                                            <input id="billingAddress" type="text" placeholder="Enter Address" className="form-input" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                                            <div className="md:col-span-2">
                                                <label htmlFor="billingCity">City</label>
                                                <input id="billingCity" type="text" placeholder="Enter City" className="form-input" />
                                            </div>
                                            <div>
                                                <label htmlFor="billingState">State</label>
                                                <select id="billingState" className="form-select text-white-dark">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="billingZip">Zip</label>
                                                <input id="billingZip" type="text" placeholder="Enter Zip" className="form-input" />
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-primary">
                                            Add
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Fatura Adresi Ekle</h5>
                                    <p>
                                        Yeni <span className="text-primary">Fatura</span> adresi bilginizi belirler.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <form>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="billingName">İsim Syisim</label>
                                                <input 
                                                    name='billingName'
                                                    id="billingName" 
                                                    type="text" 
                                                    placeholder="İsim soyisim giriniz" 
                                                    className="form-input"
                                                    onChange={handleProfileFormChange}
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="billingEmail">E-Posta</label>
                                                <input 
                                                    id="billingEmail"
                                                    name="billingEmail"
                                                    type="email"
                                                    placeholder="E-Posta giriniz"
                                                    className="form-input"
                                                    onChange={handleProfileFormChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="billingAddress">Adres</label>
                                            <input id="billingAddress" type="text" placeholder="Enter Address" className="form-input" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                                            <div className="md:col-span-2">
                                                <label htmlFor="billingCity">City</label>
                                                <input id="billingCity" type="text" placeholder="Enter City" className="form-input" />
                                            </div>
                                            <div>
                                                <label htmlFor="billingState">State</label>
                                                <select id="billingState" className="form-select text-white-dark">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="billingZip">Zip</label>
                                                <input id="billingZip" type="text" placeholder="Enter Zip" className="form-input" />
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-primary">
                                            Add
                                        </button>
                                    </form>
                                </div>
                            </div> */}
                            {/* <div className="panel">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Add Payment Method</h5>
                                    <p>
                                        Changes your New <span className="text-primary">Payment Method </span>
                                        Information.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <form>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="payBrand">Card Brand</label>
                                                <select id="payBrand" className="form-select text-white-dark">
                                                    <option value="Mastercard">Mastercard</option>
                                                    <option value="American Express">American Express</option>
                                                    <option value="Visa">Visa</option>
                                                    <option value="Discover">Discover</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="payNumber">Card Number</label>
                                                <input id="payNumber" type="text" placeholder="Card Number" className="form-input" />
                                            </div>
                                        </div>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="payHolder">Holder Name</label>
                                                <input id="payHolder" type="text" placeholder="Holder Name" className="form-input" />
                                            </div>
                                            <div>
                                                <label htmlFor="payCvv">CVV/CVV2</label>
                                                <input id="payCvv" type="text" placeholder="CVV" className="form-input" />
                                            </div>
                                        </div>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="payExp">Card Expiry</label>
                                                <input id="payExp" type="text" placeholder="Card Expiry" className="form-input" />
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-primary">
                                            Add
                                        </button>
                                    </form>
                                </div>
                            </div> */}
                        </div>
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
                                                    <option value="" disabled selected>il seçiniz</option>

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
                                                <option value="" disabled selected>ilçe seçiniz</option>

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
                                                    <option value="" disabled selected>il seçiniz</option>

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
                                                <option value="" disabled selected>ilçe seçiniz</option>

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
                    <div className="switch">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Tema Seç</h5>
                                <div className="flex justify-around">
                                    <div className="flex">
                                        <label className="inline-flex cursor-pointer">
                                            <input 
                                            onClick={() => {
                                                dispatch(toggleTheme('light'));
                                            }}
                                            className="form-radio ltr:mr-4 rtl:ml-4 cursor-pointer" type="radio" name="flexRadioDefault" defaultChecked={themeConfig.theme === 'light'?true:false} />
                                            <span>
                                                <img className="ms-3" width="100" height="68" alt="settings-dark" src="/assets/images/settings-light.svg" />
                                            </span>
                                        </label>
                                    </div>

                                    <label className="inline-flex cursor-pointer">
                                        <input 
                                        onClick={() => {
                                            dispatch(toggleTheme('dark'));
                                        }}
                                        className="form-radio ltr:mr-4 rtl:ml-4 cursor-pointer" type="radio" name="flexRadioDefault"
                                        defaultChecked={themeConfig.theme === 'dark'?true:false}
                                        />
                                        <span>
                                            <img className="ms-3" width="100" height="68" alt="settings-light" src="/assets/images/settings-dark.svg" />
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">İşlem Verileri</h5>
                                <p>İşlem Özetinizi İndirin</p>
                                <button type="button" className="btn btn-primary">
                                    İndir
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Profili Gizle</h5>
                                <p>
                                    <span className="text-primary">Profiliniz</span> {`${thisUser?.private?"ağdaki hiç kimse tarafından görüntülenemez..":"ağdaki herkes tarafından görüntülenebilir."}`}
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input 
                                        type="checkbox"
                                        className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" 
                                        id="custom_switch_checkbox1"
                                        name='private'
                                        defaultChecked={thisUser?.private || false}
                                        onChange={handlePreferencesChange}
                                    />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">E-Postamı gizle</h5>
                                <p>
                                    <span className="text-primary">E-Postanız</span> {`${thisUser?.privateEmail?"ağdaki hiç kimse tarafından görüntülenemez..":"ağdaki herkes tarafından görüntülenebilir."}`}
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input 
                                        type="checkbox" 
                                        className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" 
                                        id="custom_switch_checkbox2"
                                        name='privateEmail'
                                        defaultChecked={thisUser?.privateEmail || false}
                                        onChange={handlePreferencesChange}
                                    />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Reklamları Gizle</h5>
                                <p>
                                    <span className="text-primary">Reklamlar</span> {`${thisUser?.hideAds?"panelinizde gösterilmez":"panelinizde gösterilir"}`}
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input 
                                        type="checkbox"
                                        className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer"
                                        id="custom_switch_checkbox5"
                                        name='hideAds'
                                        defaultChecked={thisUser?.hideAds || false}
                                        onChange={handlePreferencesChange}
                                    />
                                    <span 
                                        className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Sosyal Ağ Profilini Gizle</h5>
                                <p>
                                    <span className="text-primary">Sosyal Medya</span> {`${thisUser?.hideSoc?"ağdaki hiç kimse tarafından görüntülenemez..":"ağdaki herkes tarafından görüntülenebilir"}`}
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input 
                                        type="checkbox"
                                        className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer"
                                        id="custom_switch_checkbox6"
                                        name='hideSoc'
                                        defaultChecked={thisUser?.hideSoc || false}
                                        onChange={handlePreferencesChange}
                                    />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {tabs === 'danger-zone' ? (
                    <div className="switch">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Hesabımı Dondur</h5>
                                <p>24 saate kadar mesaj, bildirim alamayacaksınız.</p>
                                <label className="w-12 h-6 relative">
                                    <input 
                                    type="checkbox" 
                                    onChange={()=>deactivateMyAccount(navigateToSuccessPage)}
                                    className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox7"
                                    defaultChecked={thisUser?.active}
                                    />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Hesabımı Sil</h5>
                                <p>Hesabı silme işlemi geri alınamaz. Lütfen emin olun.</p>
                                <button className="btn btn-danger btn-delete-account">Hesabımı Sil</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default AccountSetting;
