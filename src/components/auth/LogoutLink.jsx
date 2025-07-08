import { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { logoutUser } from '../../auth/Logout';

const LogoutLink = () => {
    const { setUser } = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        logoutUser(setUser);
    };

    return (
        <a href="#" onClick={handleLogout}>
            Log out
        </a>
    );
};

export default LogoutLink;
