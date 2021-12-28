const Menu = () => (
    <div>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="/">Grupo Fatos</a>
                </div>
                <ul className="menu">
                    <li><a href="#solucao" className="menu-btn">Soluções</a></li>
                    <li><a href="#contabilidade" className="menu-btn">Contabilidade</a></li>
                    <li><a href="#servico" className="menu-btn">Serviços</a></li>
                    <li><a href="https://" className="menu-btn" _target="_blank">Blog</a></li>
                    <li><a href="/Sobre" className="menu-btn">Sobre Nós</a></li>
                </ul>
                <div className="menu-btn">
                <i class="fas fa-align-right"></i>
                </div>
            </div>
        </nav>
    </div>
);

export default Menu;