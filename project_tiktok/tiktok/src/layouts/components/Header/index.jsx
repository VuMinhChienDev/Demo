import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FaTimes, FaSearch, FaSpinner, FaEllipsisV, FaFont, FaGlobe, FaKeyboard } from 'react-icons/fa';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import Config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { 
    PlusIcon, 
    MessageIcon, 
    InboxIcon,
    UserIcon,
    CoinIcon,
    SettingIcon,
    LanguageIcon,
    HelpIcon,
    KeyboardIcon,
    LogoutIcon 
} from '~/components/Icons';
import Search from '~/components/Search';

const cx = classNames.bind(styles);

// Menu items khi đã đăng nhập
const userMenu = [
    {
        icon: <UserIcon />,
        title: 'View profile',
       to: Config.routes.profile
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
        to: Config.routes.coin
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: Config.routes.settings
    },
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
               
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: Config.routes.feedback
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts'
    },
];

function Header() {
   
    const currentUser = true;

   

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
                console.log('Selected menu item:', menuItem);
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={Config.routes.home} className={cx('logo')}>
                    <img src="https://sf16-scmcdn-sg.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg" alt="TikTok Logo" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <PlusIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>

                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <img
                                    className={cx('user-avatar')}
                                    src={images.userAvatar}
                                    alt="Chien"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<PlusIcon />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;