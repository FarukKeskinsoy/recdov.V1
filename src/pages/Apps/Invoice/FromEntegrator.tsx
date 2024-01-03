import { Link, NavLink, useParams } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconTrashLines from '../../../components/Icon/IconTrashLines';
import IconPlus from '../../../components/Icon/IconPlus';
import IconEdit from '../../../components/Icon/IconEdit';
import IconEye from '../../../components/Icon/IconEye';
import axios from 'axios';
import { DocumentReference, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase/firebase';
import { Button, Stack } from '@mui/material';
import { Group } from '@mui/icons-material';
import MonthSelector from './MonthSelector';

interface User {
    // Assuming that adresler is an array of Address objects
    adresler?:any;
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
    entegrator?:string;
    enusername?:string;
    enpassword?:string
  }

const FromEntegrator = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Invoice List'));
    });
    const { mukellef } = useParams();
    const [thisUser, setThisUser] = useState<User>({});

    const [invoices, setInvoices] = useState<any>(null);
    const [fetching, setFetching] = useState<boolean>(true);

    const [error, setError] = useState<string | null>(null);

    var formattedOutput = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2,
      });

    useEffect(()=>{
        const thisCred=auth.currentUser;
        const userDocPath = thisCred?.uid ? `Users/${thisCred.uid}/Mukellefler/${mukellef}` : '';
        const refUser: DocumentReference = doc(db, userDocPath);
        getDoc(refUser).then((usr)=>{
            if(usr.exists()){
              setThisUser(usr.data())
            }
        })

    },[])

    const baseUrls:any={
      uyumsoft:'https://entegratoru-production.up.railway.app/getUyumsoftInvoices',

    }
    useEffect(() => {
        const fetchData = async () => {
          try {
    
            const response = await axios.post(
              //'https://entegratoru-production.up.railway.app/getUyumsoftInvoices',
              //'http://localhost:3008/getUyumsoftInvoices',
              baseUrls[`${thisUser.entegrator}`],
              {
                UYUMSOFT_USERNAME: thisUser.enusername,
                UYUMSOFT_PASSWORD: thisUser.enpassword,
                days:"30",
                months:"09",
                years:"2023",
                daye:"10",
                monthe:"10",
                yeare:"2023"
              }
            );
            setInvoices(response.data.list);
            setFetching(false)
            console.log(response.data)
          } catch (error) {
            setFetching(false)

            setError('Error fetching data');
          }
        };
    
        thisUser&&thisUser.enusername&& fetchData();
      }, [thisUser]); // Empty
  

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'faturatarihi',
        direction: 'asc',
    });

    useEffect(() => {
        setPage(1);
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [pageSize]);

    
    // cariAdi: 'BURHAN KESKİN LOJİSTİK TİCARET LİMİTED ŞİRKETİ',
    // ettn: '1669A264-894C-45FA-BF4D-5DFB6C930854',
    // faturaNo: 'EF02023000004583',
    // faturatarihi: '2023-10-06',
    // faturaTipi: 'TEVKIFAT',
    // senaryo: 'TICARIFATURA',
    // cariVknTckn: '1911315533',
    
      const handleMonthSelect = (selectedMonth: number) => {
        console.log(`Selected month: ${selectedMonth}`);
        // Add your logic for handling the selected month
      };
      async function uploadDataToServer(dataToUpload:any) {
        const response = await fetch('http://localhost:5011/upload-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ dataToUpload }),
        });
      
        const result = await response.json();
        console.log(result);
      }
      
      // Example usage
      const faturaData = {
        Fatura_No: 'INV12345',
        ETTN: 'ETTN123',
        Fatura_Tarihi: '2023-12-24', // Assuming a date format, adjust as needed
        Durum: 'Pending',
        Tur: 'Sales',
        Tip_Tur: 'Retail',
        Cari_Adi: 'Customer ABC',
        Cari_Vkn_Tckn: '1234567890', // Adjust based on your needs
        Alias: 'CustomerAlias',
        Cari_Ulke: 'Turkey',
        Cari_Sehir: 'Istanbul',
        Odenecek_Miktar: 500.00,
        Vergi_Toplamı: 75.00,
        Vergi_Haric_Tutar:"örnek",
        Toplam_Indirim:"örnek",
        Para_Birimi:"örnek",
        Kur:"örnek",
        Toplam_Kdv_1:"örnek",
        Toplam_Kdv_8:"örnek",
        Toplam_Kdv_18:"örnek",
        Kdv_0_Matrah:"örnek",
        Kdv_1_Matrah:"örnek",
        Kdv_8_Matrah:"örnek",
        Kdv_18_Matrah:"örnek",
        Siparis_No:"örnek",
        Senaryo:"örnek",
        Tasimacilik:"örnek",
        Sigorta:"örnek",
        FOB:"örnek",
        Lokal_Dokuman_No:"örnek",
        Ekstra_Bilgi:"örnek",
        Alici_Email_Adresi:"örnek",
        Mal_Hizmet_Sira_No:"örnek",
        Mal_Hizmet_Adi:"örnek",
        Mal_Hizmet_Miktar:"örnek",
        Mal_Hizmet_Birim:"örnek",
        Mal_Hizmet_Birim_Fiyat:"örnek",
        Mal_Hizmet_Aciklama:"örnek",
        Mal_Hizmet_Not:"örnek",
        Mal_Hizmet_Satici_Kodu:"örnek",
        Mal_Hizmet_Alici_Kodu:"örnek",
        Mal_Hizmet_Toplam_Tutar:"örnek",
        Mal_Hizmet_KDV_Orani:"örnek",
        Mal_Hizmet_KDV_Tutari:"örnek",
        Mal_Hizmet_OIV_Orani:"örnek",
        Mal_Hizmet_OIV_Tutari:"örnek",
        Not_1:"örnek",
        Not_2:"örnek",
        Not_3:"örnek",
        Tevkifat_Tutari:"örnek",
        Tevkifat_Orani:"örnek",
        Mal_Hizmet_Vergi_Muafiyet_Kodu:"örnek",
        Konaklama_Vergisi:"örnek",
        Irsaliye_Bilgileri:"örnek",
        // ... (add values for other fields accordingly)
      };
    return (
        <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
            <div className="invoice-table">
                {/* <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                    <div className="ltr:ml-auto rtl:mr-auto">
                        <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div> */}

                <div className="datatables pagination-padding">
                    <Button
                        onClick={()=>uploadDataToServer(faturaData)}
                    >
                        send
                    </Button>
                {/* <MonthSelector onSelect={handleMonthSelect} /> */}

                    <DataTable
                        className="whitespace-nowrap table-hover invoice-table"
                        records={invoices}
                        fetching={fetching}
                        columns={[
                            {
                                accessor: 'cariAdi',
                                sortable: true,
                                title:"Cari Adı"
                                
                                
                            },
                            {
                                accessor: 'cariVknTckn',
                                sortable: true,
                                title:"Cari VKN/TCKN"
                                
                                
                            },
                            {
                                accessor: 'ettn',
                                sortable: true,
                                title:"ETTN"

                            },
                            {
                                accessor: 'faturaNo',
                                sortable: true,
                                title:"Fatura No"

                            },
                            {
                                accessor: 'faturatarihi',
                                sortable: true,
                                title:"Fatura Tarihi"

                            },
                            {
                                accessor: 'faturaTipi',
                                sortable: true,
                                title:"Fatura Tipi"

                            },
                            {
                                accessor: 'senaryo',
                                sortable: true,
                                title:"Senaryo"

                            },
                           
                            {
                                accessor: 'genelToplam',
                                sortable: true,
                                titleClassName: 'text-right',
                                render: ({ genelToplam }:{genelToplam:string}) => <div className="text-right font-semibold">{`${formattedOutput.format(parseFloat(genelToplam))}`}</div>,
                            },
                            {
                                accessor: 'curr',
                                sortable: true,
                                titleClassName: 'text-right',
                                title:"Birim",
                            },
                            
                        ]}
                        highlightOnHover
                        totalRecords={invoices?.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                        selectedRecords={selectedRecords}
                        onSelectedRecordsChange={setSelectedRecords}
                        paginationText={({ from, to, totalRecords }) => `Toplam ${totalRecords} kayıttan ${from} - ${to} arası gösteriliyor`}
                    />
                </div>
            </div>
        </div>
    );
};

export default FromEntegrator;
