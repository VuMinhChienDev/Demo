import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import Styles from './Popper.module.scss'; // Đảm bảo đường dẫn đúng

const cx = classNames.bind(Styles);


        
        function Wrapper({ children, className }) {
            return <div className={cx('Wrapper', className)}>{children}</div>;
    
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;  // Default export
