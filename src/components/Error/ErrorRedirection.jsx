import { NavLink } from 'react-router-dom'


const ErrorRedirection = () => {
    return (
        <div className='flexFooter'>
            <div className='linkHome'>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} end>
                    <h3>Retourner sur la page d'accueil</h3>
                </NavLink>
            </div>
        </div>
    );
};

export default ErrorRedirection;