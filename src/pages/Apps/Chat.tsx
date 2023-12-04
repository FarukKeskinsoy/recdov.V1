import Dropdown from '../../components/Dropdown';
import { IRootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
import IconSettings from '../../components/Icon/IconSettings';
import IconHelpCircle from '../../components/Icon/IconHelpCircle';
import IconLogin from '../../components/Icon/IconLogin';
import IconSearch from '../../components/Icon/IconSearch';
import IconMessagesDot from '../../components/Icon/IconMessagesDot';
import IconPhone from '../../components/Icon/IconPhone';
import IconUserPlus from '../../components/Icon/IconUserPlus';
import IconBell from '../../components/Icon/IconBell';
import IconMenu from '../../components/Icon/IconMenu';
import IconMessage from '../../components/Icon/IconMessage';
import IconPhoneCall from '../../components/Icon/IconPhoneCall';
import IconVideo from '../../components/Icon/IconVideo';
import IconCopy from '../../components/Icon/IconCopy';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import IconShare from '../../components/Icon/IconShare';
import IconMoodSmile from '../../components/Icon/IconMoodSmile';
import IconSend from '../../components/Icon/IconSend';
import IconMicrophoneOff from '../../components/Icon/IconMicrophoneOff';
import IconDownload from '../../components/Icon/IconDownload';
import IconCamera from '../../components/Icon/IconCamera';

const contactList = [
    {
        userId: 1,
        name: 'Nia Hillyer',
        path: 'profile-16.jpeg',
        time: '2:09 PM',
        preview: 'How do you do?',
        messages: [
            {
                fromUserId: 0,
                toUserId: 1,
                text: 'Hi, I am back from vacation',
            },
            {
                fromUserId: 0,
                toUserId: 1,
                text: 'How are you?',
            },
            {
                fromUserId: 1,
                toUserId: 0,
                text: 'Welcom Back',
            },
            {
                fromUserId: 1,
                toUserId: 0,
                text: 'I am all well',
            },
            {
                fromUserId: 0,
                toUserId: 1,
                text: 'Coffee?',
            },
        ],
        active: true,
    },
    {
        userId: 2,
        name: 'Sean Freeman',
        path: 'profile-1.jpeg',
        time: '12:09 PM',
        preview: 'I was wondering...',
        messages: [
            {
                fromUserId: 0,
                toUserId: 2,
                text: 'Hello',
            },
            {
                fromUserId: 0,
                toUserId: 2,
                text: "It's me",
            },
            {
                fromUserId: 0,
                toUserId: 2,
                text: 'I have a question regarding project.',
            },
        ],
        active: false,
    },
    {
        userId: 3,
        name: 'Alma Clarke',
        path: 'profile-2.jpeg',
        time: '1:44 PM',
        preview: 'I’ve forgotten how it felt before',
        messages: [
            {
                fromUserId: 0,
                toUserId: 3,
                text: 'Hey Buddy.',
            },
            {
                fromUserId: 0,
                toUserId: 3,
                text: "What's up",
            },
            {
                fromUserId: 3,
                toUserId: 0,
                text: 'I am sick',
            },
            {
                fromUserId: 0,
                toUserId: 3,
                text: 'Not comming to office today.',
            },
        ],
        active: true,
    },
    {
        userId: 4,
        name: 'Alan Green',
        path: 'profile-3.jpeg',
        time: '2:06 PM',
        preview: 'But we’re probably gonna need a new carpet.',
        messages: [
            {
                fromUserId: 0,
                toUserId: 4,
                text: 'Hi, collect your check',
            },
            {
                fromUserId: 4,
                toUserId: 0,
                text: 'Ok, I will be there in 10 mins',
            },
        ],
        active: true,
    },
    {
        userId: 5,
        name: 'Shaun Park',
        path: 'profile-4.jpeg',
        time: '2:05 PM',
        preview: 'It’s not that bad...',
        messages: [
            {
                fromUserId: 0,
                toUserId: 3,
                text: 'Hi, I am back from vacation',
            },
            {
                fromUserId: 0,
                toUserId: 3,
                text: 'How are you?',
            },
            {
                fromUserId: 0,
                toUserId: 5,
                text: 'Welcom Back',
            },
            {
                fromUserId: 0,
                toUserId: 5,
                text: 'I am all well',
            },
            {
                fromUserId: 5,
                toUserId: 0,
                text: 'Coffee?',
            },
        ],
        active: false,
    },
    {
        userId: 6,
        name: 'Roxanne',
        path: 'profile-5.jpeg',
        time: '2:00 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: [
            {
                fromUserId: 0,
                toUserId: 6,
                text: 'Hi',
            },
            {
                fromUserId: 0,
                toUserId: 6,
                text: 'Uploaded files to server.',
            },
        ],
        active: false,
    },
    {
        userId: 7,
        name: 'Ernest Reeves',
        path: 'profile-6.jpeg',
        time: '2:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: [],
        active: true,
    },
    {
        userId: 8,
        name: 'Laurie Fox',
        path: 'profile-7.jpeg',
        time: '12:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: [],
        active: true,
    },
    {
        userId: 9,
        name: 'Xavier',
        path: 'profile-8.jpeg',
        time: '4:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: [],
        active: false,
    },
    {
        userId: 10,
        name: 'Susan Phillips',
        path: 'profile-9.jpeg',
        time: '9:00 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: [],
        active: true,
    },
    {
        userId: 11,
        name: 'Dale Butler',
        path: 'profile-10.jpeg',
        time: '5:09 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: [],
        active: false,
    },
    {
        userId: 12,
        name: 'Grace Roberts',
        path: 'user-profile.jpeg',
        time: '8:01 PM',
        preview: 'Wasup for the third time like is you bling bitch',
        messages: [],
        active: true,
    },
];
const loginUser = {
    id: 0,
    name: 'Alon Smith',
    path: 'profile-34.jpeg',
    designation: 'Software Developer',
};
const Chat = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Gelen Dökümanlar'));
    });
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);

    const [isShowChatMenu, setIsShowChatMenu] = useState(false);
    const [searchUser, setSearchUser] = useState('');
    const [isShowUserChat, setIsShowUserChat] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);
    const [textMessage, setTextMessage] = useState('');
    const [filteredItems, setFilteredItems] = useState<any>(contactList);

    useEffect(() => {
        setFilteredItems(() => {
            return contactList.filter((d) => {
                return d.name.toLowerCase().includes(searchUser.toLowerCase());
            });
        });
    }, [searchUser]);

    const scrollToBottom = () => {
        if (isShowUserChat) {
            setTimeout(() => {
                const element: any = document.querySelector('.chat-conversation-box');
                element.behavior = 'smooth';
                element.scrollTop = element.scrollHeight;
            });
        }
    };
    const selectUser = (user: any) => {
        setSelectedUser(user);
        setIsShowUserChat(true);
        scrollToBottom();
        setIsShowChatMenu(false);
    };
    const sendMessage = () => {
        if (textMessage.trim()) {
            let list = contactList;
            let user: any = list.find((d) => d.userId === selectedUser.userId);
            user.messages.push({
                fromUserId: selectedUser.userId,
                toUserId: 0,
                text: textMessage,
                time: 'Just now',
            });
            setFilteredItems(list);
            setTextMessage('');
            scrollToBottom();
        }
    };
    const sendMessageHandle = (event: any) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };
    return (
        <div>
            <div className={`flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full sm:min-h-0 ${isShowChatMenu ? 'min-h-[999px]' : ''}`}>
                <div className={`panel p-4 flex-none max-w-xs w-full absolute xl:relative z-10 space-y-4 xl:h-full hidden xl:block overflow-hidden ${isShowChatMenu ? '!block' : ''}`}>
                    
                </div>
                <div className={`bg-black/60 z-[5] w-full h-full absolute rounded-md hidden ${isShowChatMenu ? '!block xl:!hidden' : ''}`} onClick={() => setIsShowChatMenu(!isShowChatMenu)}></div>
                <div className="panel p-0 flex-1">
                    Döküman
                </div>
            </div>
        </div>
    );
};

export default Chat;
