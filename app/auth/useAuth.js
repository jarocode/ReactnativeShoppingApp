import { useContext } from "react/cjs/react.development";
import jwtDecode from 'jwt-decode';

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
    const {user, setUser} = useContext(AuthContext);
    
    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    }

    const logIn = (authToken) => {
        const user = jwtDecode(authToken);
        setUser(user);
        authStorage.storeToken(authToken);
    }
    return {
        user,
       logOut,
       logIn
    }
}