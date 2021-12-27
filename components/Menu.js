import Link from "next/link";

const linkStyle = {
    marginRight: 15
}


const Menu =() => (
    <div>
        <Link href="http://">
        <a style = {linkStyle}>Soluções</a>     
        </Link>

        <Link href="http://">
        <a style = {linkStyle}>Contabilidade</a>     
        </Link>

        <Link href="http://">
        <a style = {linkStyle}>Servilos</a>     
        </Link>

        <Link href="http://">
        <a>Blog</a>     
        </Link>

        <Link href="http://">
        <a>Sobre Nós</a>     
        </Link>


        </div>
);

export default Menu;