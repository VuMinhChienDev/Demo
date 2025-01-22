import classNames from "classnames/bind";
import Styles from './Popper.module.scss'; // Đảm bảo đường dẫn đúng

const cx = classNames.bind(Styles);


        
        function Wrapper({ children, className }) {
            return <div className={cx('Wrapper', className)}>{children}</div>;
    
}

export default Wrapper;  // Default export
