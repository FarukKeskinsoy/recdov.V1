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
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post(
              'https://entegratoru-production.up.railway.app/getUyumsoftInvoices',
              //'http://localhost:3008/getUyumsoftInvoices',
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
    return (
        <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
            <div className="invoice-table">
                {/* <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                    <div className="ltr:ml-auto rtl:mr-auto">
                        <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div> */}

                <div className="datatables pagination-padding">
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
