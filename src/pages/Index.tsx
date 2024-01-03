import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import { setPageTitle } from '../store/themeConfigSlice';
import logo from "../assets/logo-t.png"
import logod from "../assets/logo-td.png"
import IconMultipleForwardRight from '../components/Icon/IconMultipleForwardRight';
import Dropdown from '../components/Dropdown';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import ReactApexChart from 'react-apexcharts';
import IconDollarSign from '../components/Icon/IconDollarSign';
import IconInbox from '../components/Icon/IconInbox';
import IconTag from '../components/Icon/IconTag';
import IconCreditCard from '../components/Icon/IconCreditCard';
import IconShoppingCart from '../components/Icon/IconShoppingCart';
import IconArrowLeft from '../components/Icon/IconArrowLeft';
import IconCashBanknotes from '../components/Icon/IconCashBanknotes';
import IconUser from '../components/Icon/IconUser';
import IconNetflix from '../components/Icon/IconNetflix';
import IconBolt from '../components/Icon/IconBolt';
import IconPlus from '../components/Icon/IconPlus';
import IconCaretDown from '../components/Icon/IconCaretDown';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useAuth } from '../context/authentication.context';
import { auth } from '../firebase/firebase';

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Anasayfa'));
    });
    const {userData} = useAuth()
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [loading] = useState(false);

    //Revenue Chart
    const revenueChart: any = {
        series: [
            {
                name: 'Income',
                data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
            },
            {
                name: 'Expenses',
                data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000],
            },
        ],
        options: {
            chart: {
                height: 325,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },

            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
                lineCap: 'square',
            },
            dropShadow: {
                enabled: true,
                opacity: 0.2,
                blur: 10,
                left: -7,
                top: 22,
            },
            colors: isDark ? ['#2196F3', '#E7515A'] : ['#1B55E2', '#E7515A'],
            markers: {
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: 6,
                        fillColor: '#1B55E2',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 5,
                        fillColor: '#E7515A',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                ],
            },
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            xaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: true,
                },
                labels: {
                    offsetX: isRtl ? 2 : 0,
                    offsetY: 5,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-xaxis-title',
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    formatter: (value: number) => {
                        return value / 1000 + 'K';
                    },
                    offsetX: isRtl ? -30 : -10,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
                opposite: isRtl ? true : false,
            },
            grid: {
                borderColor: isDark ? '#191E3A' : '#E0E6ED',
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '16px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
                x: {
                    show: false,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: isDark ? 0.19 : 0.28,
                    opacityTo: 0.05,
                    stops: isDark ? [100, 100] : [45, 100],
                },
            },
        },
    };

    //Sales By Category
    const salesByCategory: any = {
        series: [userData?.is, userData?.bes, userData?.bs],
        options: {
            chart: {
                type: 'donut',
                height: 460,
                fontFamily: 'Nunito, sans-serif',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 25,
                colors: isDark ? '#0e1726' : '#fff',
            },
            colors: isDark ? ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'] : ['#e2a03f', '#5c1ac3', '#e7515a'],
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                height: 50,
                offsetY: 20,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '65%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '29px',
                                offsetY: -10,
                            },
                            value: {
                                show: true,
                                fontSize: '26px',
                                color: isDark ? '#bfc9d4' : undefined,
                                offsetY: 16,
                                formatter: (val: any) => {
                                    return val;
                                },
                            },
                            total: {
                                show: true,
                                label: 'Toplam',
                                color: '#888ea8',
                                fontSize: '29px',
                                formatter: (w: any) => {
                                    return w.globals.seriesTotals.reduce(function (a: any, b: any) {
                                        return a + b;
                                    }, 0);
                                },
                            },
                        },
                    },
                },
            },
            labels: ['Beyanname', 'Fatura', 'Entegrasyon'],
            states: {
                hover: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
            },
        },
    };

    //Daily Sales
    const dailySales: any = {
        series: [
            {
                name: 'Sales',
                data: [44, 55, 41, 67, 22, 43, 21],
            },
            {
                name: 'Last Week',
                data: [13, 23, 20, 8, 13, 27, 33],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'bar',
                fontFamily: 'Nunito, sans-serif',
                toolbar: {
                    show: false,
                },
                stacked: true,
                stackType: '100%',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 1,
            },
            colors: ['#e2a03f', '#e0e6ed'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            xaxis: {
                labels: {
                    show: false,
                },
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            },
            yaxis: {
                show: false,
            },
            fill: {
                opacity: 1,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                },
            },
            legend: {
                show: false,
            },
            grid: {
                show: false,
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 10,
                    right: -20,
                    bottom: -20,
                    left: -20,
                },
            },
        },
    };

    //Total Orders
    const totalOrders: any = {
        series: [
            {
                name: 'Sales',
                data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40],
            },
        ],
        options: {
            chart: {
                height: 290,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: isDark ? ['#00ab55'] : ['#00ab55'],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            yaxis: {
                min: 0,
                show: false,
            },
            grid: {
                padding: {
                    top: 125,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: 0.3,
                    opacityTo: 0.05,
                    stops: [100, 100],
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
            },
        },
    };
{/* <img src={isDark?logod:logo} style={{width:"60%",margin:"auto"}}  /> */}
    return (
        <div>
            <div className="pt-5">
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
            <div className="panel h-full">
                        <div className="flex items-center mb-5">
                            <h5 className="font-semibold text-lg dark:text-white-light">Kredi Harcama Oranları</h5>
                        </div>
                        <div>
                            <div className="bg-white dark:bg-black rounded-lg overflow-hidden">
                                {loading ? (
                                    <div className="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                        <span className="animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"></span>
                                    </div>
                                ) : (
                                    <ReactApexChart series={salesByCategory.series} options={salesByCategory.options} type="donut" height={460} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="panel h-full p-0 border-0 overflow-hidden">
                        <div className="p-6 bg-gradient-to-r from-[#4361ee] to-[#160f6b] min-h-[190px]">
                            <div className="flex justify-between items-center mb-6">
                                <div className="bg-black/50 rounded-full p-1 ltr:pr-3 rtl:pl-3 flex items-center text-white font-semibold">
                                {auth.currentUser?.photoURL?<img className="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100" src="/assets/images/user-profile.jpeg" alt="userProfile" />:
                                <div className="border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2">
                                <IconUser className="w-4 h-4" />
                                </div>}                                       {userData?.uName}
                                </div>
                                <button type="button" className="ltr:ml-auto rtl:mr-auto flex items-center justify-between w-9 h-9 bg-black text-white rounded-md hover:opacity-80">
                                    <IconPlus className="w-6 h-6 m-auto" />
                                </button>
                            </div>
                            <div className="text-white flex justify-between items-center">
                                <p className="text-xl">Hesap Özeti</p>
                                <h5 className="ltr:ml-auto rtl:mr-auto text-2xl">
                                    <span className="text-white-light"></span>{userData?.credit} kredi
                                </h5>
                            </div>
                        </div>
                        <div className="-mt-12 px-8 grid grid-cols-2 gap-2">
                            <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]">
                                <span className="flex justify-between items-center mb-4 dark:text-white">
                                    Alınan
                                    <IconCaretDown className="w-4 h-4 text-success rotate-180" />
                                </span>
                                <div className="btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">5000</div>
                            </div>
                            <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]">
                                <span className="flex justify-between items-center mb-4 dark:text-white">
                                    Harcanan
                                    <IconCaretDown className="w-4 h-4 text-danger" />
                                </span>
                                <div className="btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">{userData?.bes+userData?.bs+userData?.is}</div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="mb-5">
                                <span className="bg-[#1b2e4b] text-white text-xs rounded-full px-4 py-1.5 before:bg-white before:w-1.5 before:h-1.5 before:rounded-full ltr:before:mr-2 rtl:before:ml-2 before:inline-block">
                                    Üye
                                </span>
                            </div>
                            
                            <div className="text-center px-2 flex justify-around">
                                <button type="button" className="btn btn-secondary ltr:mr-2 rtl:ml-2">
                                    Detaylar
                                </button>
                                <button type="button" className="btn btn-success">
                                    Şimdi Al 300 ₺
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="panel h-full sm:col-span-2 xl:col-span-1 pb-0">
                        <h5 className="font-semibold text-lg dark:text-white-light mb-5">Son İşlemler</h5>
                        <PerfectScrollbar className="relative h-[290px] ltr:pr-3 rtl:pl-3 ltr:-mr-3 rtl:-ml-3 mb-4">
                            <div className="text-sm cursor-pointer">
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-primary w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Updated Server Logs</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">Just Now</div>

                                    <span className="badge badge-outline-primary absolute ltr:right-0 rtl:left-0 text-xs bg-primary-light dark:bg-black opacity-0 group-hover:opacity-100">
                                        Pending
                                    </span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-success w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Send Mail to HR and Admin</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">2 min ago</div>

                                    <span className="badge badge-outline-success absolute ltr:right-0 rtl:left-0 text-xs bg-success-light dark:bg-black opacity-0 group-hover:opacity-100">
                                        Completed
                                    </span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-danger w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Backup Files EOD</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">14:00</div>

                                    <span className="badge badge-outline-danger absolute ltr:right-0 rtl:left-0 text-xs bg-danger-light dark:bg-black opacity-0 group-hover:opacity-100">Pending</span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-black w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Collect documents from Sara</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">16:00</div>

                                    <span className="badge badge-outline-dark absolute ltr:right-0 rtl:left-0 text-xs bg-dark-light dark:bg-black opacity-0 group-hover:opacity-100">Completed</span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-warning w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Conference call with Marketing Manager.</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">17:00</div>

                                    <span className="badge badge-outline-warning absolute ltr:right-0 rtl:left-0 text-xs bg-warning-light dark:bg-black opacity-0 group-hover:opacity-100">
                                        In progress
                                    </span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-info w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Rebooted Server</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">17:00</div>

                                    <span className="badge badge-outline-info absolute ltr:right-0 rtl:left-0 text-xs bg-info-light dark:bg-black opacity-0 group-hover:opacity-100">Completed</span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-secondary w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Send contract details to Freelancer</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">18:00</div>

                                    <span className="badge badge-outline-secondary absolute ltr:right-0 rtl:left-0 text-xs bg-secondary-light dark:bg-black opacity-0 group-hover:opacity-100">
                                        Pending
                                    </span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-primary w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Updated Server Logs</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">Just Now</div>

                                    <span className="badge badge-outline-primary absolute ltr:right-0 rtl:left-0 text-xs bg-primary-light dark:bg-black opacity-0 group-hover:opacity-100">
                                        Pending
                                    </span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-success w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Send Mail to HR and Admin</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">2 min ago</div>

                                    <span className="badge badge-outline-success absolute ltr:right-0 rtl:left-0 text-xs bg-success-light dark:bg-black opacity-0 group-hover:opacity-100">
                                        Completed
                                    </span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-danger w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Backup Files EOD</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">14:00</div>

                                    <span className="badge badge-outline-danger absolute ltr:right-0 rtl:left-0 text-xs bg-danger-light dark:bg-black opacity-0 group-hover:opacity-100">Pending</span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-black w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Collect documents from Sara</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">16:00</div>

                                    <span className="badge badge-outline-dark absolute ltr:right-0 rtl:left-0 text-xs bg-dark-light dark:bg-black opacity-0 group-hover:opacity-100">Completed</span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-warning w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Conference call with Marketing Manager.</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">17:00</div>

                                    <span className="badge badge-outline-warning absolute ltr:right-0 rtl:left-0 text-xs bg-warning-light dark:bg-black opacity-0 group-hover:opacity-100">
                                        In progress
                                    </span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-info w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Rebooted Server</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">17:00</div>

                                    <span className="badge badge-outline-info absolute ltr:right-0 rtl:left-0 text-xs bg-info-light dark:bg-black opacity-0 group-hover:opacity-100">Completed</span>
                                </div>
                                <div className="flex items-center py-1.5 relative group">
                                    <div className="bg-secondary w-1.5 h-1.5 rounded-full ltr:mr-1 rtl:ml-1.5"></div>
                                    <div className="flex-1">Send contract details to Freelancer</div>
                                    <div className="ltr:ml-auto rtl:mr-auto text-xs text-white-dark dark:text-gray-500">18:00</div>

                                    <span className="badge badge-outline-secondary absolute ltr:right-0 rtl:left-0 text-xs bg-secondary-light dark:bg-black opacity-0 group-hover:opacity-100">
                                        Pending
                                    </span>
                                </div>
                            </div>
                        </PerfectScrollbar>
                        <div className="border-t border-white-light dark:border-white/10">
                            <Link to="/" className=" font-semibold group hover:text-primary p-4 flex items-center justify-center group">
                                Hepsini Gör
                                <IconArrowLeft className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition duration-300 ltr:ml-1 rtl:mr-1" />
                            </Link>
                        </div>
                    </div>
                    


                </div>
                

            </div>
        </div>
    );
};

export default Index;
