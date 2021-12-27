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
        <a style = {linkStyle}>Servilos</a>     
        </Link>

        <Link href="http://">
        <a style = {linkStyle}>Blog</a>     
        </Link>

        <Link href="http://">
        <a style = {linkStyle}>Sobre Nós</a>     
        </Link>

        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>

        </div>
);

export default Menu;