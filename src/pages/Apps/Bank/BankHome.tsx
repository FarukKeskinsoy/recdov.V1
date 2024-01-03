import React, { Fragment, MouseEvent, useEffect, useState } from 'react'
import { useAuth } from '../../../context/authentication.context';
import { CollectionReference, DocumentReference, addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase/firebase';
import "./bank.scss"
import Empty from './Empty';
import { Dialog, Transition } from '@headlessui/react';
import IconX from '../../../components/Icon/IconX';
import { Button, IconButton } from '@mui/material';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { DeleteForever, Edit, Launch } from '@mui/icons-material';
import IconTrashLines from '../../../components/Icon/IconTrashLines';
import IconPlus from '../../../components/Icon/IconPlus';
import { DataTable } from 'mantine-datatable';


interface Bank {
    bankName: string;
    userName: string;
    password: string;
    // Add more properties if needed
  }
const BankHome = () => {
    const [loading,setLoading]=useState<boolean>(true)
    const [uploading,setupLoading]=useState<boolean>(false)
    const [banks,setBanks]=useState<any>([])
    const [selectedBank,setselectedBank]=useState<any>(null)
    const [willbeDeleted,setWillBeDeleted]=useState<any>(null)
    const [addmodalopen,setAddModalOpen]=useState<boolean>(false)
    const [addmodaleditopen,setAddModalEditOpen]=useState<boolean>(false)
    const [warnModalOpen,setWarnModalOpen]=useState<boolean>(false)
    const [newEntegry,setNewEntegry]=useState<Bank>({
        bankName:"",
        userName:"",
        password:""
    })
    const [editEntegry,setEditEntegry]=useState<any>({})
    const {user}=useAuth()
    useEffect(() => {
        let controller = new AbortController();
    
        const fetchData = async () => {
            const thisCred=auth.currentUser;
            const userDocPath = thisCred?.uid ? `Users/${thisCred.uid}/BankEntegrations` : '';
            const refUser: CollectionReference = collection(db, userDocPath);
    
          try {
            const logQuerySnapshot = await getDocs(refUser);
    
            var list:object[]= [];
            logQuerySnapshot.forEach((doc) => {
              list.unshift({ ...doc.data(), id: doc.id });
            });
    
            setBanks(list);
            setLoading(false);
          } catch (error) {
            setLoading(false);
            alert("An error occurred");
            console.error("Error fetching user data:", error);
          }
        };
    
        fetchData();
    
        return () => controller?.abort();
      }, [uploading]); // Dependency array includes userid and updating to trigger the effect when they change
    
      
      const handleNewOpen=()=>{
        setAddModalOpen(true)
      }
      const handleNewClose=()=>{
        setAddModalOpen(false)
      }
      const NewEntegryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewEntegry((prevEditForm) => ({ ...prevEditForm, [name]: value }))
    }
      const NewEntegrySelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setNewEntegry((prevEditForm) => ({ ...prevEditForm, [name]: value }))
    }
    const handleEditBankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
      
        // Update the state with the new value
        setEditEntegry((prevEditForm:any) => {
          const updatedForm = { ...prevEditForm, [name]: value };
      
          // Filter out properties with null or ""
          const filteredForm = Object.fromEntries(
            Object.entries(updatedForm).filter(([key, value]) => value !== null && value !== "")
          );
      
          return filteredForm;
        });
      };
    const handleEditBankChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
      
        // Update the state with the new value
        setEditEntegry((prevEditForm:any) => {
          const updatedForm = { ...prevEditForm, [name]: value };
      
          // Filter out properties with null or ""
          const filteredForm = Object.fromEntries(
            Object.entries(updatedForm).filter(([key, value]) => value !== null && value !== "")
          );
      
          return filteredForm;
        });
      };
    const handleClear =()=>{
        setNewEntegry({
            bankName:"",
            userName:"",
            password:""
        })
        setAddModalOpen(false)
    }
    const selectForEdit=(row:any)=>{
        setselectedBank(row)
        if(selectedBank){
            setAddModalEditOpen(true)
        }
    }
    const deleteDialog=(row:any)=>{
        setWillBeDeleted(row)
        if(willbeDeleted){
            setWarnModalOpen(true)
        }
    }
    const handleEditClear =()=>{
        setEditEntegry({})
        setAddModalEditOpen(false)
    }
    const handleDeleteClear =()=>{
        setWillBeDeleted(null)
        setWarnModalOpen(false)
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
    
    const bankaListe=[
        {id:"01",label:"İş Bankası",value:"isbank"},
        {id:"02",label:"Garanti AŞ",value:"garanti"},
        {id:"03",label:"AKBANK",value:"akbank"},
    ]
    const handleAddNewbank=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setupLoading(true);
        try {
            const userDocPath = auth.currentUser ? `Users/${auth.currentUser.uid}/BankEntegrations/${newEntegry.userName}` : '';
            const refUser: DocumentReference = doc(db, userDocPath);
            await setDoc(refUser,{
                ...newEntegry,

                createdAt:new Date(),
            })
            setupLoading(false);
            showMessage('Yeni Entegrasyon başarıyla yüklendi.');
            setAddModalOpen(false)
        } catch (error) {
            setupLoading(false)
            alert('Bir hata meydana geldi.');
            console.log(error)

        }

    }
    const handleEditbank=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setupLoading(true);
        const oldDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}/BankEntegrations/${selectedBank?.userName}` : '';
        const oldRef: DocumentReference = doc(db, oldDocPath);
        try {
            if(editEntegry?.userName){
                const newDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}/BankEntegrations/${editEntegry?.userName}` : '';
                const newRef: DocumentReference = doc(db, newDocPath);
                await deleteDoc(oldRef)
                await setDoc(newRef,{
                    ...selectedBank,
                    ...editEntegry
                })
            }else{
                await updateDoc(oldRef,{
                    ...editEntegry,
                    updAt:new Date()
                  })
            }
          showMessage('Bilgiler başarıyla güncellendi.');
          setAddModalEditOpen(false)
          setEditEntegry({})
          setupLoading(false)
        } catch (error) {
          showMessage('Bir hata meydana geldi.',"error");
          console.log(error)
          setupLoading(false)
        }
        

    }

    const deleteBank=async(event: MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setupLoading(true);
        
        const oldDocPath = auth.currentUser?.uid ? `Users/${auth.currentUser.uid}/BankEntegrations/${willbeDeleted?.userName}` : '';
        const oldRef: DocumentReference = doc(db, oldDocPath);

        try {
            await deleteDoc(oldRef)
            showMessage('Bilgiler başarıyla silindi.');
            setupLoading(false)
            setWillBeDeleted(null)
            setWarnModalOpen(false)
        } catch (error) {
            setupLoading(false)
            console.log(error)
        }

    }

    const columns = [
        {
            key: '',
            label: 'S.NO',
        },
        {
            key: 'bankName',
            label: 'Banka Adı',
        },
        {
            key: 'userName',
            label: 'Kullanıcı Adı',
        },
        {
            key: '',
            label: 'Ekstreler',
        },
        
    ];
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
    <div
        className='bnk-home'
    >
        {banks?.length===0?<Empty
            handleNewOpen={handleNewOpen}
        />:
        <>
        <div className="invoice-table">
                <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                    <div className="flex items-center gap-2">
                        
                        <button onClick={handleNewOpen} className="btn btn-primary gap-2">
                            <IconPlus />
                            Yeni Ekle
                        </button>
                    </div>
                    
                </div>

                
            </div>
                <div className="table-responsive btable">
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
                            {banks?.map((item:any,idx:number) => {
                                return (
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{item.bankName}</td>
                                        <td>{item.userName}</td>
                                        <td>
                                            <NavLink to={`ekstreler/${item.userName}`} className="ltr:text-right rtl:text-left">
                                                <Launch/>
                                            </NavLink>
                                            <IconButton
                                                onClick={()=>selectForEdit(item)}
                                                color='inherit'
                                            >
                                              <Edit/>  
                                            </IconButton>
                                            <IconButton
                                                onClick={()=>deleteDialog(item)}
                                                color='inherit'

                                            >
                                              <DeleteForever/>  
                                            </IconButton>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        </>
        }
    
                
        
        <Transition appear show={addmodalopen} as={Fragment}>
                <Dialog as="div" open={addmodalopen} onClose={() => setAddModalOpen(false)} className="relative z-[51]">
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
                                        onClick={() => setAddModalOpen(false)}
                                        className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        Banka Ekle
                                    </div>
                                    <div className="p-5">
                                        <form
                                            onSubmit={handleAddNewbank}
                                        >
                                            <div className="mb-5">
                                                <label htmlFor="bankName">Banka Adı</label>
                                                <select
                                                    name="bankName"
                                                    id='bankName'
                                                    className="form-input"
                                                    placeholder='banka seçiniz'
                                                    required
                                                    onChange={NewEntegrySelectChange}
                                                    value={newEntegry.bankName}
                                                >
                                                    <option value="" disabled selected>Banka seçiniz</option>
                                                    {bankaListe.map((b,bdx)=>{
                                                        return(
                                                            <option key={bdx} value={b.value}>{b.label}</option>

                                                        )
                                                    })}
                                                    
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="userName">Kullanıcı Adı</label>
                                                <input 
                                                    id="userName"
                                                    name="userName"
                                                    required
                                                    type="text"
                                                    placeholder="kullanıcı adınınızı giriniz" className="form-input"
                                                    value={newEntegry.userName} 
                                                    onChange={NewEntegryChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="password">Şifre</label>
                                                <input 
                                                    id="password"
                                                    name="password"
                                                    type="text"
                                                    required
                                                    placeholder="parolayı giriniz" className="form-input"
                                                    value={newEntegry.password} 
                                                    onChange={NewEntegryChange}
                                                />
                                            </div>
                                            
                                            
                                            <div className="flex justify-end items-center mt-8">
                                                <button type="button" className="btn btn-outline-danger" onClick={handleClear}>
                                                    İptal
                                                </button>
                                                <input
                                                    disabled={uploading}
                                                    type="submit"
                                                    value="Kaydet"
                                                    className="btn btn-primary ltr:ml-4 rtl:mr-4" 
                                                    
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
        </Transition>

        <Transition appear show={addmodaleditopen} as={Fragment}>
                <Dialog as="div" open={addmodaleditopen} onClose={() => setAddModalEditOpen(false)} className="relative z-[51]">
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
                                        onClick={() => setAddModalEditOpen(false)}
                                        className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        Düzenle
                                    </div>
                                    <div className="p-5">
                                        <form
                                            onSubmit={handleEditbank}
                                        >
                                            <div className="mb-5">
                                                <label htmlFor="bankName">Banka Adı</label>
                                                <select
                                                    name="bankName"
                                                    id='bankName'
                                                    className="form-input"
                                                    placeholder='banka seçiniz'
                                                    required
                                                    defaultValue={selectedBank?.bankName}
                                                    onChange={handleEditBankChangeSelect}
                                                    
                                                    value={editEntegry?.bankName}
                                                >
                                                    <option value="" disabled selected>Banka seçiniz</option>
                                                    {bankaListe.map((b,bdx)=>{
                                                        return(
                                                            <option key={bdx} value={b.value}>{b.label}</option>

                                                        )
                                                    })}
                                                    
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="userName">Kullanıcı Adı</label>
                                                <input 
                                                    id="userName"
                                                    name="userName"
                                                    required
                                                    type="text"
                                                    placeholder="kullanıcı adınınızı giriniz" className="form-input"
                                                    defaultValue={selectedBank?.userName}

                                                    value={editEntegry?.userName} 
                                                    onChange={handleEditBankChange}
                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label htmlFor="password">Şifre</label>
                                                <input 
                                                    id="password"
                                                    name="password"
                                                    defaultValue={selectedBank?.password}
                                                    type="text"
                                                    required
                                                    placeholder="parolayı giriniz" className="form-input"
                                                    value={editEntegry?.password} 
                                                    onChange={handleEditBankChange}
                                                />
                                            </div>
                                            
                                            
                                            <div className="flex justify-end items-center mt-8">
                                                <button type="button" className="btn btn-outline-danger" onClick={handleEditClear}>
                                                    İptal
                                                </button>
                                                <input
                                                    disabled={uploading||Object.keys(editEntegry).length<1}
                                                    type="submit"
                                                    value="Kaydet"
                                                    className="btn btn-primary ltr:ml-4 rtl:mr-4" 
                                                    
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
        </Transition>
        <Transition appear show={warnModalOpen} as={Fragment}>
                <Dialog as="div" open={warnModalOpen} onClose={() => setWarnModalOpen(false)} className="relative z-[51]">
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
                                        onClick={() => setWarnModalOpen(false)}
                                        className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-gray-800 dark:hover:text-gray-600 outline-none"
                                    >
                                        <IconX />
                                    </button>
                                    <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">
                                        Sil
                                    </div>
                                    <div className="p-5">
                                                    <h5>Bu işlem geri alınamaz</h5>
                                                    <div className="flex justify-end items-center mt-8">

                                                <button type="button" className="btn btn-outline-danger" onClick={handleDeleteClear}>
                                                    İptal
                                                </button>
                                                <button
                                                    onClick={deleteBank}
                                                    disabled={uploading}
                                                    type="button"
                                                    className="btn btn-danger ltr:ml-4 rtl:mr-4" 
                                                    
                                                >
                                                    Yine de Sil
                                                </button>
                                                </div>
                                    
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
        </Transition>
            

    </div>
  )
}

export default BankHome