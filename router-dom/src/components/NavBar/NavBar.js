import { Outlet, Link} from "react-router-dom";
import styles from './NavBar.modules.css';

export default function NavBar(){
    return(
        <>
            <ui className={styles.list}>
                <li classame={styles.item}>
                    <Link to='/'>Home</Link>
                </li>
            </ui>
            <ui className={styles.list}>
                <li classame={styles.item}>
                    <Link to='/Contatos'>Contatos</Link>
                </li>
            </ui>
            <ui className={styles.list}>
                <li classame={styles.item}>
                    <Link to='/Empresa'>Empresa</Link>
                </li>
            </ui>

            <Outlet/>
        </>

    )
}
