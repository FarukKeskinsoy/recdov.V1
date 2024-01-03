import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconUserPlus from '../../../components/Icon/IconUserPlus';
import IconListCheck from '../../../components/Icon/IconListCheck';
import IconLayoutGrid from '../../../components/Icon/IconLayoutGrid';
import IconSearch from '../../../components/Icon/IconSearch';
import IconUser from '../../../components/Icon/IconUser';
import IconFacebook from '../../../components/Icon/IconFacebook';
import IconInstagram from '../../../components/Icon/IconInstagram';
import IconLinkedin from '../../../components/Icon/IconLinkedin';
import IconTwitter from '../../../components/Icon/IconTwitter';
import IconX from '../../../components/Icon/IconX';
import {mukellefExtraInfo , iller , mukellefList} from "../../../rawData/mukellefs.js"
import { Launch, MoveToInbox, Outbox } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useMukellef } from '../../../context/mukellef.context';
import uyumsoft from "../../../assets/images/uyumlogo.png"
  
const MukellefListBill = () => {
   
    const { mymukellefs } = useMukellef();

    const [addContactModal, setAddContactModal] = useState<boolean>(false);

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
    

    const [filteredItems, setFilteredItems] = useState<any>(combinedArray);

    useEffect(() => {
        setFilteredItems(() => {
            return combinedArray.filter((item: any) => {
                return String(item.unvani).toLowerCase().includes(search.toLowerCase());
            });
        });
    }, [search]);

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
                    
                    <div className="relative">
                        <input type="text" placeholder="mükellef ara" className="form-input py-2 ltr:pr-11 rtl:pl-11 peer" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type="button" className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                            <IconSearch className="mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
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
                                {mymukellefs.map((contact: any) => {
                                    return (
                                        <tr key={contact.id}>
                                            <td>
                                                <div className="flex items-center w-max">
                                                    
                                                    <div>{contact?.soyadiunvani||contact.adi}</div>
                                                </div>
                                            </td>
                                            <td>{contact.eposta}</td>
                                            <td className="whitespace-nowrap">{contact.vergidairesiililce}</td>
                                            <td className="whitespace-nowrap">{contact.phone}</td>
                                            <td>
                                                <div className="flex gap-4 items-center justify-center">
                                                   
                                                    {contact?.entegrator&&<NavLink
                                                        to={`${contact.id}`}
                                                        className="btn btn-sm btn-outline-secondary entegratorlink uyumsoft" 
                                                    >
                                                        <span>{contact.entegrator}</span>

                                                        <Launch/>
                                
                                                    </NavLink>}
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
};

export default MukellefListBill;
