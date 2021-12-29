const Menu = () => (
    <div>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="/"><img src="/logo.png" alt="Grupo Fatos"></img></a>
                </div>
                <ul className="menu">
                    <li><a href="#solucao" className="menu-btn">Soluções</a></li>
                    <li><a href="#contabilidade" className="menu-btn">Contabilidade</a></li>
                    <li><a href="#servico" className="menu-btn">Serviços</a></li>
                    <li><a href="https://" className="menu-btn" _target="_blank">Blog</a></li>
                    <li><a href="/Sobre" className="menu-btn">Sobre Nós</a></li>
                    <li><a href="https://www.facebook.com/grfatos" target=" _blank=" className="menu-btn"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href=" https://www.youtube.com/grupofatos " target=" _blank " className="menu-btn" _target="_blank"><i class="fab fa-youtube"></i></a></li>
                    <li><a href=" https://www.instagram.com/gf_contabilidade " target=" _blank " className="menu-btn"><i class="fab fa-instagram"></i></a></li>
                    <li><a href=" https://www.linkedin.com/company/grupo-fatos-apoio-ao-empreendedor " target=" _blank " className="menu-btn"><i class="fab fa-linkedin-in"></i></a></li>
                    <div class=" navbar-buttons mbr-section-btn "><a class=" btn btn-primary display-7 " href=" https://grupofatos.com.br/area-do-cliente.html ">Área do Cliente</a></div>
                </ul>
                <div className="menu-btn">
                <i class="fas fa-align-right"></i>
                </div>
            </div>
        </nav>
    </div>
);

export default Menu;