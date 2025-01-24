import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data, preview = false }) {
    const renderPreview = (props) => {
        if (!preview) return null;

        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    const Comp = preview ? Tippy : 'div';
    const props = preview ? {
        interactive: true,
        delay: [800, 0],
        offset: [-20, 0],
        placement: 'bottom',
        render: renderPreview,
    } : {};

    return (
        <div>
            <Comp {...props}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.nickname}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{`${data.first_name} ${data.last_name}`}</strong>
                            {data.tick && (
                                <FontAwesomeIcon 
                                    className={cx('check')} 
                                    icon={faCheckCircle}
                                    size="1x"
                                    style={{ width: '1em' }}
                                />
                            )}
                        </p>
                        <p className={cx('name')}>{data.nickname}</p>
                    </div>
                </div>
            </Comp>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    preview: PropTypes.bool,
};

export default AccountItem; 