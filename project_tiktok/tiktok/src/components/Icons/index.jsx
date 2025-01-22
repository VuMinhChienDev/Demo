import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faPaperPlane,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';

const PlusIcon = ({ width = '2rem', height = '2rem' }) => (
    <FontAwesomeIcon 
        icon={faPlus} 
        width={width} 
        height={height}
    />
);

const MessageIcon = ({ width = '2rem', height = '2rem' }) => (
    <FontAwesomeIcon 
        icon={faPaperPlane} 
        width={width} 
        height={height}
    />
);

const InboxIcon = ({ width = '2rem', height = '2rem' }) => (
    <FontAwesomeIcon 
        icon={faMessage} 
        width={width} 
        height={height}
    />
);

export { PlusIcon, MessageIcon, InboxIcon }; 