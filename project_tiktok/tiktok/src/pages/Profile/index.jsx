import { useParams } from 'react-router-dom';

function Profile() {
    const { nickname } = useParams();
    
    return (
        <div>
            <h2>Profile page</h2>
            <p>Nickname: {nickname}</p>
        </div>
    );
}

export default Profile;
