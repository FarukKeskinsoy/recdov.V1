import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { auth, db } from '../firebase/firebase';
import { CollectionReference, DocumentReference, addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { nacelist } from '../rawData/nace';
import { vergidaireleri } from '../rawData/vergiDaireleri';
import { useAuth } from './authentication.context';

// Define the type for our context
interface MukellefContextProps {
    handleAddNewMukellef: (close:()=>void) => Promise<void>;
    handleSubmitMukellefUpdate: (mukellef:string,editform:any) => Promise<void>;
    handleDeleteMukellef: (mukellef:string) => Promise<void>;
    newMukellef:any;
    adding:boolean;
    deleting:boolean;
    handleNewMukellefFormChange:any;
    handleNewMukellefFormInnerChange:any;
    changed:boolean;
    editFormFirst:any;
    updated:boolean;
    updating:boolean;
    editFormSecond:any;
    mymukellefs:any;
    editFormThird:any;
    handleMukellefChangeFirst:any;
    handleMukellefChangeSecond:any;
    handleMukellefChangeThird:any;
    handleMukellefChangeThirdInner:any;
    
}

// Create the context
const MukellefContext = createContext<MukellefContextProps | undefined>(undefined);

// Create a provider component
interface MukellefProviderProps {
  children: ReactNode;
}

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
}

export const MukellefProvider: React.FC<MukellefProviderProps> = ({ children }) => {
  const {user} = useAuth()
  const [mymukellefs, setMyMukellefs] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [adding, setAdding] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [editFormFirst,setEditFormFirst] = useState<object>({})
  const [editFormSecond,setEditFormSecond] = useState<object>({})
  const [editFormThird,setEditFormThird] = useState<object>({})

  const [newMukellef,setNewMukellef] = useState<any>({
    yetkilismsmmm:"",//
    smsmmmsozlesmetarihi:"",//
    smsmmmsozlesmeno:"",//
    yetkiliymm:"",//
    tckimlikno:"",//
    kurulustarihi:"",
    kapanıstarihi:"",
    faaliyetkodu:"",//
    faaliyetadi:"",//
    soyadiunvani:"",//
    adi:"",//
    vergidairesikodu:"",//
    vergidairesi:"",//
    vergidairesiililce:"",//
    vergikimlikno:"",//
    ticaretsicilno:"",//
    tesciltarihi:"",//
    tescilkurulusyeri:"",//
    kdvmukellefiyeti:"",//
    kdvvergidairesikodu:"",//
    kdvvergidairesi:"",//
    kdvvergidairesiililce:"",//
    mersisno:"",//
    taahhutedilensermaye:"",//
    odenmissermaye:"",//
    baglıoldugusosyalguvenlikkurumu:"",//
    sosyalguvenlikkurumunumarasi:"",//
    baglıoldugumeslekitesekkul:"",//
    meslekitesekkulnumarasi:"",//
    basitusul:"Hayır",//
    basitusulfaaliyetkodu:"",//
    odatemsilcisibilgileri:{
        soyadi:"",//
        adi:"",//
        tckimlikno:""//
    },
    eposta:"",//
    phone:"",//
  })
  const [changed, setChanged] = useState<boolean>(false);

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
          setLoading(false);
        } catch (error) {
          setLoading(false);
          alert("An error occurred");
          console.error("Error fetching user data:", error);
        }
    };
    if(user && auth.currentUser?.uid){
      fetchData();
    }
    return () => controller?.abort();
  }, [changed,user]); 

  const handleNewMukellefFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "vergikimlikno") {
      const inputValue = e.target.value;
      
      // Update the styling based on the length of the entered value
      const isTenDigits = inputValue.length > 0&&inputValue.length === 10;
  
      // Add a CSS class to style the input accordingly
      e.target.classList.toggle("error", !isTenDigits);
    }
    if (e.target.name === "tckimlikno") {
      const inputValue = e.target.value;
      
      // Update the styling based on the length of the entered value
      const isTenDigits = inputValue.length > 0&&inputValue.length === 11;
  
      // Add a CSS class to style the input accordingly
      e.target.classList.toggle("error", !isTenDigits);
    }
    if(e.target.name==="faaliyetkodu"){
        var selected=nacelist.find((i)=>i.dc_NACE_KODU===e.target.value)
        var faaliyetadi=selected?.dc_NACE_BASLIK;
        var tes=selected?.dc_MESLEK_GRUBU_ADI;
        var teskod=selected?.dc_MESLEK_GRUBU;
        setNewMukellef({ ...newMukellef, [e.target.name]: e.target.value,faaliyetadi:faaliyetadi,baglıoldugumeslekitesekkul:tes, meslekitesekkulnumarasi:teskod,basitusulfaaliyetkodu:e.target.value });
    }else if(e.target.name==="faaliyetadi"){
        var selected=nacelist.find((i)=>i.dc_NACE_BASLIK===e.target.value);
        var faaliyetkodu=selected?.dc_NACE_KODU;
        var tes=selected?.dc_MESLEK_GRUBU_ADI;
        var teskod=selected?.dc_MESLEK_GRUBU;

        setNewMukellef({ ...newMukellef, [e.target.name]: e.target.value, faaliyetkodu:faaliyetkodu,baglıoldugumeslekitesekkul:tes, meslekitesekkulnumarasi:teskod, basitusulfaaliyetkodu:faaliyetkodu });
    }else if(e.target.name==="vergidairesi"){
        var vdkodu=vergidaireleri.find((i)=>i.VERGİ_DAİRESİ_ADI===e.target.value)?.VD_KODU
        var vdil=vergidaireleri.find((i)=>i.VERGİ_DAİRESİ_ADI===e.target.value)?.İLİ
        setNewMukellef({ ...newMukellef, [e.target.name]: e.target.value, vergidairesikodu:vdkodu, vergidairesiililce:vdil });
    }else if(e.target.name==="vergidairesikodu"){
        var vd=vergidaireleri.find((i)=>i.VD_KODU===e.target.value)?.VERGİ_DAİRESİ_ADI
        var vdil=vergidaireleri.find((i)=>i.VD_KODU===e.target.value)?.İLİ
        setNewMukellef({ ...newMukellef, [e.target.name]: e.target.value, vergidairesi:vd, vergidairesiililce:vdil });
    }else if(e.target.name==="kdvvergidairesi"){
        var vdkodu=vergidaireleri.find((i)=>i.VERGİ_DAİRESİ_ADI===e.target.value)?.VD_KODU
        var vdil=vergidaireleri.find((i)=>i.VERGİ_DAİRESİ_ADI===e.target.value)?.İLİ
        setNewMukellef({ ...newMukellef, [e.target.name]: e.target.value, kdvvergidairesikodu:vdkodu, kdvvergidairesiililce:vdil });
    }else if(e.target.name==="kdvvergidairesikodu"){
        var vd=vergidaireleri.find((i)=>i.VD_KODU===e.target.value)?.VERGİ_DAİRESİ_ADI
        var vdil=vergidaireleri.find((i)=>i.VD_KODU===e.target.value)?.İLİ
        setNewMukellef({ ...newMukellef, [e.target.name]: e.target.value, kdvvergidairesi:vd, kdvvergidairesiililce:vdil });
    }
    else{
        setNewMukellef({ ...newMukellef, [e.target.name]: e.target.value });
    }
  };

  const handleNewMukellefFormInnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMukellef({ ...newMukellef, odatemsilcisibilgileri:{ ...newMukellef?.["odatemsilcisibilgileri"], [e.target.name]: e.target.value} });
  };


  const handleMukellefChangeFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Update the state with the new value
    setEditFormFirst((prevEditForm) => {
      const updatedForm = { ...prevEditForm, [name]: value };
  
      // Filter out properties with null or ""
      const filteredForm = Object.fromEntries(
        Object.entries(updatedForm).filter(([key, value]) => value !== null && value !== "")
      );
  
      return filteredForm;
    });
  };
  const handleSubmitMukellefUpdate=async(mukellef:any,editform:any)=>{

    setUpdating(true);
    
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}/Mukellefler/${mukellef}` : '';
    const refUser: DocumentReference = doc(db, userDocPath);
    try {
      await updateDoc(refUser,{
        ...editform,
        updAt:new Date()
      })
      await addData(`u/m/g`)
      showMessage('Mükellef başarıyla güncellendi.');
      setUpdating(false)
    } catch (error) {
      showMessage('Bir hata meydana geldi.',"error");
      console.log(error)
      setUpdating(false)
    }
  }
  const handleDeleteMukellef=async(mukellef:any)=>{
      setDeleting(true);
      const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}/Mukellefler/${mukellef}` : '';
      const refUser: DocumentReference = doc(db, userDocPath);
      try {
        await deleteDoc(refUser);
        await addData(`u/m/d`);
        setDeleting(false)
        setChanged(pre=>!pre)
        showMessage('Mükellef başarıyla silindi.');


      } catch (error) {
        showMessage('Bir hata meydana geldi.',"error");
        console.log(error)
        setDeleting(false)
  
      }
  
  }

  const handleMukellefChangeSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Update the state with the new value
    setEditFormSecond((prevEditForm) => {
      const updatedForm = { ...prevEditForm, [name]: value };
  
      // Filter out properties with null or ""
      const filteredForm = Object.fromEntries(
        Object.entries(updatedForm).filter(([key, value]) => value !== null && value !== "")
      );
  
      return filteredForm;
    });
  };
  const handleMukellefChangeThird = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Update the state with the new value
    setEditFormThird((prevEditForm) => {
      const updatedForm = { ...prevEditForm, [name]: value };
  
      // Filter out properties with null or ""
      const filteredForm = Object.fromEntries(
        Object.entries(updatedForm).filter(([key, value]) => value !== null && value !== "")
      );
  
      return filteredForm;
    });
  };
  const handleMukellefChangeThirdInner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Update the state with the new value
    setEditFormThird((prevEditForm:any) => {
      const updatedForm = { ...prevEditForm, odatemsilcisibilgileri:{ ...prevEditForm?.["odatemsilcisibilgileri"], [e.target.name]: e.target.value} };

      // Filter out properties with null or ""
      const filteredForm = Object.fromEntries(
        Object.entries(updatedForm).filter(([key, value]) => value !== null && value !== "")
      );
  
      return filteredForm;
    });
  };

  const addData = async(ev:string)=>{
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}/Logs` : '';
    const refUser: CollectionReference = collection(db, userDocPath);

    try {
      await addDoc(refUser,{
        ev:ev,
        t:new Date().getTime()
      })
    } catch (error) {
      console.log(error)
    }

  }

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

  const handleAddNewMukellef=async(close:()=>void)=>{
    setAdding(true);
    const idForAll=new Date().valueOf().toString().substring(6)
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}/Mukellefler/${idForAll}` : '';
    const refMukellef: DocumentReference = doc(db, userDocPath);
    try {
      await setDoc(refMukellef,{
        ...newMukellef,
        crAt: new Date(),//crAt: user createdAt time,
        updAt:new Date(),
        id:idForAll
      })
      await addData(`u/m/a`)
      showMessage('Mükellef başarıyla eklendi.');
      close();
      setNewMukellef({
        yetkilismsmmm:"",//
        smsmmmsozlesmetarihi:"",//
        smsmmmsozlesmeno:"",//
        yetkiliymm:"",//
        tckimlikno:"",//
        kurulustarihi:"",
        kapanıstarihi:"",
        faaliyetkodu:"",//
        faaliyetadi:"",//
        soyadiunvani:"",//
        adi:"",//
        vergidairesikodu:"",//
        vergidairesi:"",//
        vergidairesiililce:"",//
        vergikimlikno:"",//
        ticaretsicilno:"",//
        tesciltarihi:"",//
        tescilkurulusyeri:"",//
        kdvmukellefiyeti:"",//
        kdvvergidairesikodu:"",//
        kdvvergidairesi:"",//
        kdvvergidairesiililce:"",//
        mersisno:"",//
        taahhutedilensermaye:"",//
        odenmissermaye:"",//
        baglıoldugusosyalguvenlikkurumu:"",//
        sosyalguvenlikkurumunumarasi:"",//
        baglıoldugumeslekitesekkul:"",//
        meslekitesekkulnumarasi:"",//
        basitusul:"Hayır",//
        basitusulfaaliyetkodu:"",//
        odatemsilcisibilgileri:{
            soyadi:"",//
            adi:"",//
            tckimlikno:""//
        },
        eposta:"",//
        phone:"",//
      })
      setAdding(false)
      setChanged(pre=>!pre)
    } catch (error) {
      showMessage('Bir hata meydana geldi.',"error");
      console.log(error)
      setAdding(false)
    }
    

  }


  const contextValue: MukellefContextProps = {
    handleAddNewMukellef,
    newMukellef,
    adding,
    handleNewMukellefFormChange,
    handleNewMukellefFormInnerChange,
    changed,
    updated,
    updating,
    deleting,
    editFormFirst,
    editFormSecond,
    editFormThird,
    mymukellefs,
    handleMukellefChangeFirst,
    handleMukellefChangeSecond,
    handleMukellefChangeThird,
    handleMukellefChangeThirdInner,
    handleSubmitMukellefUpdate,
    handleDeleteMukellef
};

  return <MukellefContext.Provider value={contextValue}>{children}</MukellefContext.Provider>;
};

// Create a custom hook to use the AuthContext
export const useMukellef = () => {
  const context = useContext(MukellefContext);
  if (!context) {
    throw new Error('useMukellef must be used within an MukellefProvider');
  }
  return context;
};
