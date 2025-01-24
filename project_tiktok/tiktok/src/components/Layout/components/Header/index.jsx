import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    // ... menu items
];

function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Search />

                <div className={cx('actions')}>
                    <Button className={cx('upload-btn')} text>
                        <UploadIcon />
                        <span className={cx('upload-text')}>
                            Upload video
                            </span>
                    </Button>

                    <Tippy delay={[0, 50]} content="Messages" placement="bottom">
                        <button className={cx('action-btn')}>
                            <MessageIcon />
                        </button>
                    </Tippy>

                    <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                        <button className={cx('action-btn')}>
                            <InboxIcon />
                            <span className={cx('badge')}></span>
                        </button>
                    </Tippy>
                </div>
            </div>
        </header>
    );
}

export default Header;
 