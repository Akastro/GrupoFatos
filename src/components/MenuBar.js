import styles from '../styles/globals.css';


const MenuBar = () => (
    <div>
        <nav className="navbar">
            <div className="max-width">
                <div className={styles.logo}>
                    <a href="/"><img src="/logo.png" alt="Grupo Fatos"></img></a>
                </div>
                <ul className={styles.menu}>
                    <li><a href="#solucao" className={styles.menu-btn}>Soluções</a></li>
                    <li><a href="#contabilidade" className={styles.menu-btn}>Contabilidade</a></li>
                    <li><a href="#servico" className={styles.menu-btn}>Serviços</a></li>
                    <li><a href="https://" className={styles.menu-btn} _target="_blank">Blog</a></li>
                    <li><a href="/Sobre" className={styles.menu-btn}>Sobre Nós</a></li>
                    <li><a href=" https://www.facebook.com/grfatos" target=" _blank=" className={styles.menu-btn}><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href=" https://www.youtube.com/grupofatos " target=" _blank " className={styles.menu-btn} _target="_blank"><i class="fab fa-youtube"></i></a></li>
                    <li><a href=" https://www.instagram.com/gf_contabilidade " target=" _blank " className={styles.menu-btn}><i class="fab fa-instagram"></i></a></li>
                    <li><a href=" https://www.linkedin.com/company/grupo-fatos-apoio-ao-empreendedor " target=" _blank " className={styles.menu-btn}><i class="fab fa-linkedin-in"></i></a></li>
                    
                    <li><div class=" navbar-buttons mbr-section-btn "><a className={styles.btn-primary} href=" https://grupofatos.com.br/area-do-cliente.html ">Área do Cliente</a></div></li>
                </ul>
                <div className={styles.menu-btn}>
                <i class="fas fa-align-right"></i>
                </div>
            </div>
        </nav>
    </div>
); 

export default MenuBar;