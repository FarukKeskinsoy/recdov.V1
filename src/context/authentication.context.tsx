import { User, UserCredential, createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CollectionReference, DocumentReference, addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db, userStateListener } from '../firebase/firebase';
import Swal from 'sweetalert2';

// Define the type for our context
interface AuthContextProps {
  isAuthenticated: boolean;
  logining: boolean;
  apploading: boolean;
  updating:boolean;
  updated:boolean;
  user:any;
  userData:any;
  editForm:any;
  newAddress:any;
  oldAddress:any;
  newBillAddress:any;
  errorMessage:any;
  regForm:any;
  loginForm:any;
  preferences:any;
  accountSettings:any;
  login: () => Promise<void>;
  resetMyPassword: () => Promise<void>;
  reActiveMyAccount: () => Promise<void>;
  register: (navigate: () => void) => Promise<void>;
  logout: () => Promise<void>;
  deactivateMyAccount: (navigate: () => void) => Promise<void>;
  deleteMyAccount: () => Promise<void>;
  handleSubmitProfileUpdate: () => Promise<void>;
  handleAddNewaddress: (close:()=>void) => Promise<void>;
  handleUpdateAddress: (close:()=>void) => Promise<void>;
  handleDeleteAddress: (close:()=>void) => Promise<void>;
  handleRegformChange:any;
  handleLoginformChange:any;
  handleProfileFormChange:any;
  handleNewBillingAddressChange:any;
  handleNewAddressChange:any;
  handleAccountSettingsChange:any;
  handlePreferencesChange:any;
  handleSelectAddress:any;
  handleClearAddress:any;
  handleAddBillingAdress:any;
}

// Create the context
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Create a provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [logining, setLogining] = useState(false);
  const [updating, setUpdating] = useState<boolean>(false);
  const [updated, setUpdated] = useState<boolean>(false);
  const [apploading, setAppLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<any>(null);

  const [regForm, setRegform] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [loginForm, setLoginform] = useState({
    email: "",
    password: "",
  });
  const [editForm,setEditForm] = useState<object>({})
  const [oldAddress,setOldAddress] = useState<object>({})
  const [newAddress,setNewAddress] = useState<object>({})
  const [newBillAddress,setNewBillAddress] = useState<object>({})
  const [preferences,setPreferences] = useState<object>({})
  const [accountSettings,setAccountSettings] = useState<object>({})


   
   useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setUser(user)
        const userDocPath = user?.uid ? `Users/${user.uid}` : '';
        const refUser: DocumentReference = doc(db, userDocPath);
        getDoc(refUser).then((usr)=>{
            if(usr.exists())[
              setUserData(usr.data())
            ]
        })

        console.log("user var")
        setAppLoading(false)

      }else{
        console.log("user yok")
      }
      setAppLoading(false)
    });
    return unsubscribe
  }, [auth]);

  

  

  const handleRegformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegform({ ...regForm, [e.target.name]: e.target.value });
  };
  const handleLoginformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginform({ ...loginForm, [e.target.name]: e.target.value });
  };
  
  const handleProfileFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Update the state with the new value
    setEditForm((prevEditForm) => {
      const updatedForm = { ...prevEditForm, [name]: value };
  
      // Filter out properties with null or ""
      const filteredForm = Object.fromEntries(
        Object.entries(updatedForm).filter(([key, value]) => value !== null && value !== "")
      );
  
      return filteredForm;
    });
  };

  const handleNewBillingAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Update the state with the new value
    setNewBillAddress((prevEditForm) => {
      const updatedForm = { ...prevEditForm, [name]: value };
  
      // Filter out properties with null or ""
      const filteredForm = Object.fromEntries(
        Object.entries(updatedForm).filter(([key, value]) => value !== null && value !== "")
      );
  
      return filteredForm;
    });
  };

  const handleNewAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Update the state with the new value
    setNewAddress((prevEditForm) => {
      const updatedForm = { ...prevEditForm, [name]: value };
  
      // Filter out properties with null or ""
      const filteredForm = Object.fromEntries(
        Object.entries(updatedForm).filter(([key, value]) => value !== null && value !== "")
      );
  
      return filteredForm;
    });
  };
  
  const handleAccountSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    // Update the state with the new value
    setAccountSettings((prevEditForm) => {
      const updatedForm = { ...prevEditForm, [name]: value };
  
      // Filter out properties with null or ""
      const filteredForm = Object.fromEntries(
        Object.entries(updatedForm).filter(([key, value]) => value !== null && value !== "")
      );
  
      return filteredForm;
    });
  };
  
  const handlePreferencesChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
  
    // Update the state with the new value
    setUpdating(true);
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
    const refUser: DocumentReference = doc(db, userDocPath);
    try {
      await updateDoc(refUser,{
        [name]:checked,
        updAt:new Date()

      })
      await addData(`u/pr/${name}-${checked?"1":"0"}`)
      showMessage('Tercihler başarıyla güncellendi.');
      setUpdating(false)
      setUpdated(pre=>!pre)
    } catch (error) {
      console.log(error)
      setUpdating(false)
    }

  };

  const deactivateMyAccount = async(navigate: () => void) => {
  
    // Update the state with the new value
    setAppLoading(true)
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
    const refUser: DocumentReference = doc(db, userDocPath);
    try {
      
      await updateDoc(refUser,{
        active:false,
        updAt:new Date()
      })
      await addData(`u/a/da`)

      setUpdating(false)
      setUpdated(pre=>!pre)
      navigate();
      window.location.reload();
      setAppLoading(false)
    } catch (error) {
      console.log(error)
      setAppLoading(false)
    }

  };

  const deleteMyAccount = async() => {
   
    setAppLoading(true)
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
    const refUser: DocumentReference = doc(db, userDocPath);

    const willbeDeletedUser = auth.currentUser ? auth.currentUser : "";
    if(willbeDeletedUser){
      try {
        await deleteDoc(refUser)
        await deleteUser(willbeDeletedUser)
        setAppLoading(false)
      } catch (error) {
        setAppLoading(false)
        console.log(error)
      }
}
    


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

  const handleSubmitProfileUpdate=async()=>{
    setUpdating(true);
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
    const refUser: DocumentReference = doc(db, userDocPath);
    try {
      await updateDoc(refUser,{
        ...editForm,
        updAt:new Date()
      })
      await addData(`u/p/g`)
      showMessage('Kullanıcı başarıyla güncellendi.');
      setUpdating(false)
    } catch (error) {
      showMessage('Bir hata meydana geldi.',"error");
      console.log(error)
      setUpdating(false)
    }
    

  }

  const handleAddBillingAdress=async()=>{
    setUpdating(true);
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
    const refUser: DocumentReference = doc(db, userDocPath);
    try {
      await updateDoc(refUser,{
        ...newBillAddress,
        updAt:new Date()
      })
      await addData(`u/p/ba`)
      showMessage('Fatura adresi başarıyla eklendi.');
      setUpdating(false)
      setUpdated(pre=>!pre)
    } catch (error) {
      showMessage('Bir hata meydana geldi.',"error");
      console.log(error)
      setUpdating(false)
    }
    

  }

  const handleAddNewaddress=async(close:()=>void)=>{
    setUpdating(true);
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
    const refUser: DocumentReference = doc(db, userDocPath);
    try {
      await updateDoc(refUser,{
        adresler:arrayUnion({...newAddress}),
        updAt:new Date()
      })
      await addData(`u/p/a-a`)
      showMessage('Adres başarıyla eklendi.');
      close();
      setNewAddress({})
      setUpdating(false)
      setUpdated(pre=>!pre)
    } catch (error) {
      showMessage('Bir hata meydana geldi.',"error");
      console.log(error)
      setUpdating(false)
    }
    

  }

  const handleSelectAddress=(obj:any)=>{
      setOldAddress(obj)
      setNewAddress(obj)
  }
  const handleClearAddress=()=>{
      setOldAddress({});
      setNewAddress({});
  }
  const handleUpdateAddress=async(close:()=>void)=>{
    setUpdating(true);
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
    const refUser: DocumentReference = doc(db, userDocPath);
    try {
      await updateDoc(refUser,{
        adresler:arrayUnion(newAddress),
        updAt:new Date()
      })
      await updateDoc(refUser,{
        adresler:arrayRemove(oldAddress),
        updAt:new Date()
      })
      await addData(`u/p/a-u`)
      showMessage('Adres başarıyla güncellendi.');
      close();
      setNewAddress({})
      setUpdating(false)
      setUpdated(pre=>!pre)
    } catch (error) {
      showMessage('Bir hata meydana geldi.',"error");
      console.log(error)
      setUpdating(false)
    }
    

  }
  const handleDeleteAddress=async(close:()=>void)=>{
    setUpdating(true);
    const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
    const refUser: DocumentReference = doc(db, userDocPath);
    try {
      await updateDoc(refUser,{
        adresler:arrayRemove(oldAddress),
        updAt:new Date()
      })
      await addData(`u/p/a-d`)
      showMessage('Adres başarıyla silindi.');
      close();
      setNewAddress({})
      setUpdating(false)
      setUpdated(pre=>!pre)
    } catch (error) {
      showMessage('Bir hata meydana geldi.',"error");
      console.log(error)
      setUpdating(false)
    }
    

  }
  // u=update,p=profile,g=genel bilgiler, a=account, da=deactivated
  const register = async (navigate: () => void) => {
    setLogining(true);

      if (regForm.password !== regForm.passwordConfirm) {
      setLogining(false);
      setErrorMessage("Şifreler eşleşmiyor");
    } 
    else {
      try {
      const a=await createUserWithEmailAndPassword(
          auth,
          regForm.email,
          regForm.password
        )
        setUser(a.user)
       await updateProfile(a?.user, { displayName: regForm.userName })
       const userDocPath = a?.user?.uid ? `Users/${a.user.uid}` : '';
       const refUser: DocumentReference = doc(db, userDocPath);
       await setDoc(refUser, {
        uid: a?.user.uid,
        email:a?.user.email,
        uName:regForm.userName,
        apps:[],
        uLname:"",// user lastName
        phone: "",// user phone number
        field: "",// user job field
        sup: a?.operationType,//sup: sign up provider
        crAt: new Date(),//crAt: user createdAt time,
        confirmed: false,// is user confirmed by admin
        admin: false,//is user admin,
        dev: false,//is user developer
        fa:false,//is user financial advisor
        tp:false,// is user tax payer
        av:"",// user avatar
        city:"",// user located city
        region:"",// user loacated region
        tpCount:0,// user tax payer count total
        uUnq: new Date().valueOf().toString().substring(6),// user unique id
        updAt: "",// user updated him/herself time
        adresler:[],
        active:true,
        
      })
      setLogining(false);
      setErrorMessage(null);
      navigate();
      window.location.reload();
      setAppLoading(false);

      setRegform({
        userName: "",
        email: "",
        password: "",
        passwordConfirm: "",

      })

      } catch (error) {
        setLogining(false);
      }

    }
  };

  //Firebase: Error (auth/wrong-password)
  const logout = async () => {
    setLogining(true);
    await signOut(auth)
      .then(() => setUser(null))
  };

  const login = async () => {
    setLogining(true);
    try {
      await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      )
        .then((user) => setUser(user.user))

        .then(() => {
          setErrorMessage(null);
          setLogining(false);
          setAppLoading(false)
        })
        .catch((e) => {
          setLogining(false);
          setAppLoading(false);
        });
    } catch (error) {
      setLogining(false);
      setAppLoading(false);

    }
  };


  const reActiveMyAccount = async () => {
    setLogining(true);
    setAppLoading(true)
    const email=auth.currentUser?.email?auth.currentUser?.email:""
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        loginForm.password
      )
        .then((user) => setUser(user.user))
        .then(async()=>{
          setUpdating(true);
          const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
          const refUser: DocumentReference = doc(db, userDocPath);
          await updateDoc(refUser,{
            active:true,
            updAt:new Date()
    
          })
          await addData(`u/a/a`)
          showMessage('Hesabınız başarıyla aktif edildi.');
          window.location.reload();
          setUpdating(false)
          setAppLoading(false)
        })

        .then(() => {
          setErrorMessage(null);
          setLogining(false);
          setAppLoading(false)
        })
        .catch((e) => {
          setLogining(false);
          setAppLoading(false);
        });
    } catch (error) {
      setLogining(false);
      setAppLoading(false);

    }
  };
  const resetMyPassword = async () => {
    setLogining(true)
    try {
      await sendPasswordResetEmail(
        auth,
        loginForm.email
      )
        .then(async()=>{
          setUpdating(true);
          const userDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}` : '';
          const refUser: DocumentReference = doc(db, userDocPath);
          await updateDoc(refUser,{
            active:true,
            updAt:new Date()
    
          })
          await addData(`u/a/fp`)
          showMessage('Şifre yenileme linki e-posta adresinize gönderildi.');

        })

        .then(() => {
          setErrorMessage(null);
          setLogining(true)

        })
        .catch((e) => {
          console.log(e)
          setLogining(true)

        });
    } catch (error) {
      setLogining(false);
      setAppLoading(false);

    }
  };


  const contextValue: AuthContextProps = {
    isAuthenticated:!!user,
    
    user: {} as User | null,
    login,
    reActiveMyAccount,
    resetMyPassword,
    register: async (navigate: () => void) => {
      try {
        await register(navigate);
        // Optionally, you can handle the details of 'result' here
      } catch (error) {
        // Handle errors
      }
    },
    deactivateMyAccount,
    handleSubmitProfileUpdate,
    handleAddNewaddress:async(close: ()=>void)=>{
      try {
        await handleAddNewaddress(close)
      } catch (error) {
        
      }
    },
    handleUpdateAddress,
    handleDeleteAddress,
    deleteMyAccount,
    logout,
    logining,
    apploading,
    updating,
    updated,
    errorMessage,
    userData,
    regForm,
    loginForm,
    editForm,
    newAddress,
    oldAddress,
    newBillAddress,
    preferences,
    accountSettings,
    handleRegformChange,
    handleLoginformChange,
    handleProfileFormChange,
    handleNewAddressChange,
    handleNewBillingAddressChange,
    handleAccountSettingsChange,
    handlePreferencesChange,
    handleSelectAddress,
    handleClearAddress,
    handleAddBillingAdress
    
    
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
