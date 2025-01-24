import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, preview = false }) {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [isSeeAll, setIsSeeAll] = useState(false);
    
    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getSuggested({ 
                page: 1, 
                perPage: isSeeAll ? 16 : 5 
            });
            
            // Lọc ra các users không trùng nhau dựa vào nickname
            const uniqueUsers = result.filter((user, index, self) =>
                index === self.findIndex((t) => t.nickname === user.nickname)
            );
            
            setSuggestedUsers(uniqueUsers);
        };

        fetchApi();
    }, [isSeeAll]);

    const handleSeeAll = () => {
        setIsSeeAll(!isSeeAll);
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            
            <div className={cx('account-list')}>
                {suggestedUsers.map((account) => (
                    <AccountItem key={account.id} data={account} preview={preview} />
                ))}
            </div>

            <p className={cx('more-btn')} onClick={handleSeeAll}>
                {isSeeAll ? 'See less' : 'See all'}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    preview: PropTypes.bool,
};

export default SuggestedAccounts;
