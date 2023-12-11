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

  
const Contacts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Contacts'));
    });
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

    const [params, setParams] = useState<any>(JSON.parse(JSON.stringify(defaultParams)));

    const changeValue = (e: any) => {
        const { value, id } = e.target;
        setParams({ ...params, [id]: value });
    };

    const userIdToExtraInfo:{} = mukellefExtraInfo.reduce((map:any, extraInfo:any) => {
        map[extraInfo.id] = extraInfo;
        return map;
    }, {});
    
    // Combine the arrays based on userId
    const combinedArray = mukellefList.map((mukellef:any) => ({
        ...mukellef,
        //...userIdToExtraInfo[mukellef.id] || {},
    }));
    const [search, setSearch] = useState<any>('');
    const [contactList] = useState<any>([
        {
            id: 1,
            path: 'profile-35.png',
            name: 'Faruk Keskin',
            role: 'Web Developer',
            email: 'alan@mail.com',
            location: 'Bursa, TURKİYE',
            phone: '+1 202 555 0197',
            posts: 25,
            followers: '5K',
            following: 500,
        },
        {
            id: 2,
            path: 'profile-35.png',
            name: 'Linda Nelson',
            role: 'Web Designer',
            email: 'linda@mail.com',
            location: 'Sydney, Australia',
            phone: '+1 202 555 0170',
            posts: 25,
            followers: '21.5K',
            following: 350,
        },
        {
            id: 3,
            path: 'profile-35.png',
            name: 'Lila Perry',
            role: 'UX/UI Designer',
            email: 'lila@mail.com',
            location: 'Miami, USA',
            phone: '+1 202 555 0105',
            posts: 20,
            followers: '21.5K',
            following: 350,
        },
        {
            id: 4,
            path: 'profile-35.png',
            name: 'Andy King',
            role: 'Project Lead',
            email: 'andy@mail.com',
            location: 'Tokyo, Japan',
            phone: '+1 202 555 0194',
            posts: 25,
            followers: '21.5K',
            following: 300,
        },
        {
            id: 5,
            path: 'profile-35.png',
            name: 'Jesse Cory',
            role: 'Web Developer',
            email: 'jesse@mail.com',
            location: 'Edinburgh, UK',
            phone: '+1 202 555 0161',
            posts: 30,
            followers: '20K',
            following: 350,
        },
        {
            id: 6,
            path: 'profile-35.png',
            name: 'Xavier',
            role: 'UX/UI Designer',
            email: 'xavier@mail.com',
            location: 'New York, USA',
            phone: '+1 202 555 0155',
            posts: 25,
            followers: '21.5K',
            following: 350,
        },
        {
            id: 7,
            path: 'profile-35.png',
            name: 'Susan',
            role: 'Project Manager',
            email: 'susan@mail.com',
            location: 'Miami, USA',
            phone: '+1 202 555 0118',
            posts: 40,
            followers: '21.5K',
            following: 350,
        },
        {
            id: 8,
            path: 'profile-35.png',
            name: 'Raci Lopez',
            role: 'Web Developer',
            email: 'traci@mail.com',
            location: 'Edinburgh, UK',
            phone: '+1 202 555 0135',
            posts: 25,
            followers: '21.5K',
            following: 350,
        },
        {
            id: 9,
            path: 'profile-35.png',
            name: 'Steven Mendoza',
            role: 'HR',
            email: 'sokol@verizon.net',
            location: 'Monrovia, US',
            phone: '+1 202 555 0100',
            posts: 40,
            followers: '21.8K',
            following: 300,
        },
        {
            id: 10,
            path: 'profile-35.png',
            name: 'James Cantrell',
            role: 'Web Developer',
            email: 'sravani@comcast.net',
            location: 'Michigan, US',
            phone: '+1 202 555 0134',
            posts: 100,
            followers: '28K',
            following: 520,
        },
        {
            id: 11,
            path: 'profile-35.png',
            name: 'Reginald Brown',
            role: 'Web Designer',
            email: 'drhyde@gmail.com',
            location: 'Entrimo, Spain',
            phone: '+1 202 555 0153',
            posts: 35,
            followers: '25K',
            following: 500,
        },
        {
            id: 12,
            path: 'profile-35.png',
            name: 'Stacey Smith',
            role: 'Chief technology officer',
            email: 'maikelnai@optonline.net',
            location: 'Lublin, Poland',
            phone: '+1 202 555 0115',
            posts: 21,
            followers: '5K',
            following: 200,
        },
    ]);

    const [filteredItems, setFilteredItems] = useState<any>(combinedArray);

    useEffect(() => {
        setFilteredItems(() => {
            return combinedArray.filter((item: any) => {
                return String(item.unvani).toLowerCase().includes(search.toLowerCase());
            });
        });
    }, [search, combinedArray]);

    const saveUser = () => {
        if (!params.adi) {
            showMessage('İsim girmek zorunludur.', 'error');
            return true;
        }
        if (!params.phone) {
            showMessage('Telefon numarası zorunludur.', 'error');
            return true;
        }
        if (!params.tc && !params.vergiKimlikNo) {
            showMessage('TC veya VkN gereklidir', 'error');
            return true;
        }
        if (!params.vergiililce) {
            showMessage('Vergi Dairesi için şehir seçimi zorunludur', 'error');
            return true;
        }

        if (params.id) {
            //update user
            let user: any = filteredItems.find((d: any) => d.id === params.id);
            user.adi = params.adi;
            user.soyadi = params.soyadi;
            user.email = params.email;
            user.phone = params.phone;
            user.unvani=params.unvani;
            user.yetkili=params.yetkili;
            user.tc=params.tc;
            user.kurulusTarihi=params.kurulusTarihi;
            user.kapanısTarihi=params.kapanısTarihi;
            user.faaliyetKodu=params.faaliyetKodu;
            user.faaliyetAdi=params.faaliyetAdi;
            user.vergiDairesiKodu=params.vergiDairesiKodu;
            user.vergiDairesi=params.vergiDairesi;
            user.vergiililce=params.vergiililce;
            user.vergiKimlikNo=params.vergiKimlikNo;
            user.ticSicilNo=params.ticSicilNo;
            user.tescilTarihi=params.tescilTarihi;
            user.tescilYeri=params.tescilYeri;
            user.kdvMukellefi=params.kdvMukellefi;
            user.kdvVergiDairesiKodu=params.kdvVergiDairesiKodu;
            user.kdvVergiDairesi=params.kdvVergiDairesi;
            user.kdvVergiDairesiililce=params.kdvVergiDairesiililce;
            user.mersisNo=params.mersisNo;
            user.taahhütEdilensermaye=params.taahhütEdilensermaye;
            user.odenmisSermaye=params.odenmisSermaye;
            user.bagliSosyalGuvKur=params.bagliSosyalGuvKur;
            user.sosGuvKurNo=params.sosGuvKurNo;
            user.bagliMesTes=params.bagliMesTes;
            user.mesTesNo=params.mesTesNo;
            user.basitUsulFaaliyetKodu=params.basitUsulFaaliyetKodu;
            user.basitOnayAdi=params.basitOnayAdi;
            user.basitOnaySoyadi=params.basitOnaySoyadi;
            user.basitOnayTc=params.basitOnayTc;
            user.isim=params.isim;
            user.soyisim=params.soyisim;
        } else {
            //add user
            let maxUserId = filteredItems.length ? filteredItems.reduce((max: any, character: any) => (character.id > max ? character.id : max), filteredItems[0].id) : 0;

            let user = {
                id: maxUserId + 1,
                adi: params.name,
                email: params.email,
                phone: params.phone,
                soyadi : params.soyadi,
                unvani:params.unvani,
                yetkili:params.yetkili,
                tc:params.tc,
                kurulusTarihi:params.kurulusTarihi,
                kapanısTarihi:params.kapanısTarihi,
                faaliyetKodu:params.faaliyetKodu,
                faaliyetAdi:params.faaliyetAdi,
                vergiDairesiKodu:params.vergiDairesiKodu,
                vergiDairesi:params.vergiDairesi,
                vergiililce:params.vergiililce,
                vergiKimlikNo:params.vergiKimlikNo,
                ticSicilNo:params.ticSicilNo,
                tescilTarihi:params.tescilTarihi,
                tescilYeri:params.tescilYeri,
                kdvMukellefi:params.kdvMukellefi,
                kdvVergiDairesiKodu:params.kdvVergiDairesiKodu,
                kdvVergiDairesi:params.kdvVergiDairesi,
                kdvVergiDairesiililce:params.kdvVergiDairesiililce,
                mersisNo:params.mersisNo,
                taahhütEdilensermaye:params.taahhütEdilensermaye,
                odenmisSermaye:params.odenmisSermaye,
                bagliSosyalGuvKur:params.bagliSosyalGuvKur,
                sosGuvKurNo:params.sosGuvKurNo,
                bagliMesTes:params.bagliMesTes,
                mesTesNo:params.mesTesNo,
                basitUsulFaaliyetKodu:params.basitUsulFaaliyetKodu,
                basitOnayAdi:params.basitOnayAdi,
                basitOnaySoyadi:params.basitOnaySoyadi,
                basitOnayTc:params.basitOnayTc,
                isim:params.isim,
                soyisim:params.soyisim,
                
            };
            filteredItems.splice(0, 0, user);
            //   searchContacts();
        }

        showMessage('Kullanıcı başarıyla kaydedildi.');
        setAddContactModal(false);
    };

    const editUser = (user: any = null) => {
        const json = JSON.parse(JSON.stringify(defaultParams));
        setParams(json);
        if (user) {
            let json1 = JSON.parse(JSON.stringify(user));
            setParams(json1);
        }
        setAddContactModal(true);
    };

    const deleteUser = (user: any = null) => {
        setFilteredItems(filteredItems.filter((d: any) => d.id !== user.id));
        showMessage('Kullanıcı başarıyla silindi.');
    };

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

    return (
        <div>
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl">Mükellefler</h2>
                <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
                    <div className="flex gap-3">
                        <div>
                            <button type="button" className="btn btn-primary" onClick={() => editUser()}>
                                <IconUserPlus className="ltr:mr-2 rtl:ml-2" />
                                Mükellef Ekle
                            </button>
                        </div>
                        <div>
                            <button type="button" className={`btn btn-outline-primary p-2 ${value === 'list' && 'bg-primary text-white'}`} onClick={() => setValue('list')}>
                                <IconListCheck />
                            </button>
                        </div>
                        <div>
                            <button type="button" className={`btn btn-outline-primary p-2 ${value === 'grid' && 'bg-primary text-white'}`} onClick={() => setValue('grid')}>
                                <IconLayoutGrid />
                            </button>
                        </div>
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
                                {filteredItems.map((contact: any) => {
                                    return (
                                        <tr key={contact.id}>
                                            <td>
                                                <div className="flex items-center w-max">
                                                    {contact.path && (
                                                        <div className="w-max">
                                                            <img src={`/assets/images/${contact.path}`} className="h-8 w-8 rounded-full object-cover ltr:mr-2 rtl:ml-2" alt="avatar" />
                                                        </div>
                                                    )}
                                                    {!contact.path && contact.name && (
                                                        <div className="grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold"></div>
                                                    )}
                                                    {!contact.path && !contact.name && (
                                                        <div className="border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2">
                                                            <IconUser className="w-4.5 h-4.5" />
                                                        </div>
                                                    )}
                                                    <div>{contact.adi||contact.unvani}</div>
                                                </div>
                                            </td>
                                            <td>{contact.email}</td>
                                            <td className="whitespace-nowrap">{contact.vergiililce}</td>
                                            <td className="whitespace-nowrap">{contact.phone}</td>
                                            <td>
                                                <div className="flex gap-4 items-center justify-center">
                                                    <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => editUser(contact)}>
                                                        Düzenle
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => deleteUser(contact)}>
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

            {value === 'grid' && (
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
                                        <button type="button" className="btn btn-outline-primary w-1/2" onClick={() => editUser(contact)}>
                                            Edit
                                        </button>
                                        <button type="button" className="btn btn-outline-danger w-1/2" onClick={() => deleteUser(contact)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <Transition appear show={addContactModal} as={Fragment}>
                <Dialog as="div" open={addContactModal} onClose={() => setAddContactModal(false)} className="relative z-[51]">
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
                                        onClick={() => setAddContactModal(false)}
                                        className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        {params.id ? 'Düzenle' : 'Mükellef Ekle'}
                                    </div>
                                    <div className="p-5">
                                        <form>
                                            <div className="mb-5">
                                                <label htmlFor="name">İsim</label>
                                                <input id="adi" type="text" placeholder="İsim giriniz" className="form-input" value={params.adi} onChange={(e) => changeValue(e)} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="name">TC Kimlik Numarası</label>
                                                <input id="tc" type="text" placeholder="TC giriniz" className="form-input" value={params.tc} onChange={(e) => changeValue(e)} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="name">VKN</label>
                                                <input id="vergiKimlikNo" type="text" placeholder="VKN giriniz" className="form-input" value={params.vergiKimlikNo} onChange={(e) => changeValue(e)} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="email">E-Posta</label>
                                                <input id="email" type="email" placeholder="E-Posta giriniz" className="form-input" value={params.email} onChange={(e) => changeValue(e)} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="number">Telefon</label>
                                                <input id="phone" type="text" placeholder="telefon numarası" className="form-input" value={params.phone} onChange={(e) => changeValue(e)} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="occupation">Çalışma Alanı</label>
                                                <input id="faaliyetAdi" type="text" placeholder="Alan" className="form-input" value={params.faaliyetAdi} onChange={(e) => changeValue(e)} />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="address">Vergi Dairesi İl</label>
                                                <select
                                                    id="vergiililce"
                                                    placeholder="adres giriniz"
                                                    className="form-input"
                                                    value={params.vergiililce}
                                                    onChange={(e) => changeValue(e)}
                                                >
                                                       <option value="" disabled selected>Şehir Seçiniz</option>
                                                       {iller.map((i,idx)=>{
                                                        return(
                                                            <option key={idx} value={i}>{i}</option>
                                                        )
                                                       })}

 
                                                </select>
                                            </div>
                                            <div className="flex justify-end items-center mt-8">
                                                <button type="button" className="btn btn-outline-danger" onClick={() => setAddContactModal(false)}>
                                                    İptal
                                                </button>
                                                <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={saveUser}>
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
