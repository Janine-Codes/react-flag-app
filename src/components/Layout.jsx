import Header from "./Header/Header";
import { Outlet } from 'react-router-dom';

const Layout = ({toggleTheme}) => {
    return (
    <>
        <Header toggleTheme={toggleTheme}/>
        <Outlet />
    </>
    )
}

export default Layout