import { FaTimes, FaSearch, FaSpinner } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Accountltem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            try {
                const result = await searchService.search(debouncedValue);
                setSearchResult(result);
            } catch (error) {
                console.log('Error:', error);
                setSearchResult([]);
            } finally {
                setLoading(false);
            }
        };

        fetchApi();

        return () => {
            setLoading(false);
        };
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ') || searchValue.trim() !== '') {
            setSearchValue(searchValue);
            setShowResult(true);
        }
    };

    return (
        <div>
            <HeadlessTippy
                interactive
               
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Kết quả tìm kiếm</h4>
                            {searchResult && searchResult.length > 0 ? (
                                searchResult.map((result) => <AccountItem key={result.id} data={result} />)
                            ) : (
                                <div className={cx('no-result')}>Không tìm thấy kết quả</div>
                            )}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
    
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FaTimes />
                        </button>
                    )}
    
                    {loading && <FaSpinner className={cx('loading')} />}
    
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <FaSearch />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
