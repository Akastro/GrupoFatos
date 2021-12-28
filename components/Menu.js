import styles from '../styles/Home.module.css';
import styles from '../styles/globals.css';


const Menu =() => (
    <div>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="https://grupofatos.com.br">
                    <img src="/logo.png" alt="Grupo Fatos Logo" className={styles.logo} />
                    </a>
                    <ul className="menu">
                        <li><a href="#solucoes" className="menu-btn">Soluções</a></li>
                        <li><a href="#contabilidade" className="menu-btn">Contabilidade</a></li>
                        <li><a href="#servicos" className="menu-btn">Serviços</a></li>
                    </ul>
                    <div>
                        Menu
                    </div>
                </div>
            </div>
        </nav>
       
        </div>
);

export default Menu;