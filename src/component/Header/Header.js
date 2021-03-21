import React from 'react';
import { Navbar } from 'react-bootstrap';
import{Link} from 'react-router-dom';
import'./Header.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
    }
    return (
        <div  >
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home"><h2 className="text-info">Capricorn Riders</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end ">
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/destination" className="nav-link">Destination</Link>
                <Link to="#" className="nav-link">Blog</Link>
                <Link to="#" className="nav-link">Contact</Link>
                <Link to="/login" className="nav-link"onClick={handleSignOut} >{loggedInUser.email?'Logout':'Login'}</Link>
                <Link to="#" className="nav-link active text-dark">{loggedInUser.displayName||loggedInUser.email}</Link>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;