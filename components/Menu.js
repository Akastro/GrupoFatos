import Link from "next/link";

const linkStyle = {
    marginRight: 15
}


const Menu =() => (
    <div>
        <Link href="#solucoes">
        <a style = {linkStyle}>Soluções</a>     
        </Link>

        <Link href="http://">
        <a style = {linkStyle}>Contabilidade</a>     
        </Link>

        <Link href="http://">
        <a style = {linkStyle}>Serviços</a>     
        </Link>

        <Link href="http://">
        <a style = {linkStyle}>Blog</a>     
        </Link>

        <Link href="http://">
        <a style = {linkStyle}>Sobre Nós</a>     
        </Link>


        </div>
);

export default Menu;