import { lazy } from 'react';
import BeyannameSorgula from '../pages/Apps/Invoice/BeyannameSorgula';
import MukelleflerList from '../pages/Apps/Invoice/Mukellefler';
import PdfViewerInBox from '../components/Pdf/PdfViewerInBox';
import PdfViewerOutBox from '../components/Pdf/PdfViewerOutBox';
import GelenList from '../pages/Apps/Invoice/GelenList';
import GidenList from '../pages/Apps/Invoice/GidenList';
import GelenDetail from '../pages/Apps/Invoice/GelenDetail';
import GidenDetail from '../pages/Apps/Invoice/GidenDetail';
import ContactDetail from '../pages/Apps/ContactDetail';
const Index = lazy(() => import('../pages/Index'));
const Finance = lazy(() => import('../pages/Finance'));
const Crypto = lazy(() => import('../pages/Crypto'));
const Mailbox = lazy(() => import('../pages/Apps/Mailbox'));
const Notes = lazy(() => import('../pages/Apps/Notes'));
const Contacts = lazy(() => import('../pages/Apps/Contacts'));
const Chat = lazy(() => import('../pages/Apps/Chat'));
const Scrumboard = lazy(() => import('../pages/Apps/Scrumboard'));
const Calendar = lazy(() => import('../pages/Apps/Calendar'));
const List = lazy(() => import('../pages/Apps/Invoice/List'));
const Preview = lazy(() => import('../pages/Apps/Invoice/Preview'));
const Add = lazy(() => import('../pages/Apps/Invoice/Add'));
const Edit = lazy(() => import('../pages/Apps/Invoice/Edit'));
const Profile = lazy(() => import('../pages/Users/Profile'));
const AccountSetting = lazy(() => import('../pages/Users/AccountSetting'));
const KnowledgeBase = lazy(() => import('../pages/Pages/KnowledgeBase'));
const ContactUsBoxed = lazy(() => import('../pages/Pages/ContactUsBoxed'));
const ContactUsCover = lazy(() => import('../pages/Pages/ContactUsCover'));
const Faq = lazy(() => import('../pages/Pages/Faq'));
const ComingSoonBoxed = lazy(() => import('../pages/Pages/ComingSoonBoxed'));
const ComingSoonCover = lazy(() => import('../pages/Pages/ComingSoonCover'));
const ERROR404 = lazy(() => import('../pages/Pages/Error404'));
const ERROR500 = lazy(() => import('../pages/Pages/Error500'));
const ERROR503 = lazy(() => import('../pages/Pages/Error503'));
const Maintenence = lazy(() => import('../pages/Pages/Maintenence'));
const LoginCover = lazy(() => import('../pages/Authentication/LoginCover'));
const RegisterCover = lazy(() => import('../pages/Authentication/RegisterCover'));
const RecoverIdCover = lazy(() => import('../pages/Authentication/RecoverIdCover'));
const UnlockCover = lazy(() => import('../pages/Authentication/UnlockCover'));
const About = lazy(() => import('../pages/About'));
const Error = lazy(() => import('../components/Error'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
    },
    // finance page
    {
        path: '/finance',
        element: <Finance />,
    },
    
    {
        path: '/notlar',
        element: <Notes />,
    },
    {
        path: '/mukellefler',
        element: <Contacts />,
    },
    {
        path: '/mukellefler/:vktc',
        element: <ContactDetail />,
    },
    {
        path: '/fatura/list',
        element: <List />,
    },
    // {
    //     path: '/apps/invoice/veri-yukleme',
    //     element: <VeriUploadPage />,
    // },
    {
        path: '/ithalat/beyanname-sorgula',
        element: <BeyannameSorgula />,
    },
    {
        path: '/ihracat/beyanname-sorgula',
        element: <BeyannameSorgula />,
    },
    {
        path: '/fatura/veri-yukleme',
        element: <MukelleflerList />,
    },
    {
        path: 'fatura/veri-yukleme/gelen/:mukellefid',
        element: <PdfViewerInBox />,
    },
    {
        path: 'fatura/veri-yukleme/giden/:mukellefid',
        element: <PdfViewerOutBox />,
    },
    {
        path: 'fatura/gelen-fatura',
        element: <GelenList />,
    },
    {
        path: 'fatura/giden-fatura',
        element: <GidenList />,
    },
    {
        path: 'fatura/gelen-fatura/:id',
        element: <GelenDetail />,
    },
    {
        path: 'fatura/giden-fatura/:id',
        element: <GidenDetail />,
    },
    
    // {
    //     path: '/fatura/beyanname-sorgula',
    //     element: <BeyannameSorgula />,
    // },
    {
        path: '/banka-entegrasyonu/liste',
        element: <List />,
    },
    // Apps page
    {
        path: '/gelen-dokumanlar',
        element: <Chat />,
    },
    {
        path: '/apps/scrumboard',
        element: <Scrumboard />,
    },
    {
        path: '/apps/calendar',
        element: <Calendar />,
    },
    // preview page
    {
        path: '/apps/invoice/preview',
        element: <Preview />,
    },
    {
        path: '/fatura/ekle',
        element: <Add />,
    },
    {
        path: '/apps/invoice/edit',
        element: <Edit />,
    },
    {
        path: '/banka-entegrasyonu',
        element: <Preview />,
    },
    {
        path: '/banka-entegrasyonu/ekstreler',
        element: <Edit />,
    },
    {
        path: '/banka-entegrasyonu/yeni-ekle',
        element: <Add />,
    },
    
    {
        path: '/banka-entegrasyonu/bilgileri-guncelle',
        element: <Edit />,
    },
    // components page
   

    // Users page
    {
        path: '/profil',
        element: <Profile />,
    },
    {
        path: '/hesap-ayarlari',
        element: <AccountSetting />,
    },
    // pages
    {
        path: '/pages/knowledge-base',
        element: <KnowledgeBase />,
    },
    {
        path: '/pages/contact-us-boxed',
        element: <ContactUsBoxed />,
        layout: 'blank',
    },
    {
        path: '/pages/contact-us-cover',
        element: <ContactUsCover />,
        layout: 'blank',
    },
    {
        path: '/pages/faq',
        element: <Faq />,
    },
    {
        path: '/pages/coming-soon-boxed',
        element: <ComingSoonBoxed />,
        layout: 'blank',
    },
    {
        path: '/pages/coming-soon-cover',
        element: <ComingSoonCover />,
        layout: 'blank',
    },
    {
        path: '/pages/error404',
        element: <ERROR404 />,
        layout: 'blank',
    },
    {
        path: '/pages/error500',
        element: <ERROR500 />,
        layout: 'blank',
    },
    {
        path: '/pages/error503',
        element: <ERROR503 />,
        layout: 'blank',
    },
    {
        path: '/pages/maintenence',
        element: <Maintenence />,
        layout: 'blank',
    },
    //Authentication
    {
        path: '/auth/giris-yap',
        element: <LoginCover />,
        layout: 'blank',
    },
    {
        path: '/auth/kayit-ol',
        element: <RegisterCover />,
        layout: 'blank',
    },
    {
        path: '/auth/kilit-ac',
        element: <UnlockCover />,
        layout: 'blank',
    },
    {
        path: '/auth/sifremi-unuttum',
        element: <RecoverIdCover />,
        layout: 'blank',
    },
    
    {
        path: '/about',
        element: <About />,
        layout: 'blank',
    },
    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    },
];


export { routes };
