import Link from "next/link";
import styles from '../styles/Home.module.css'

const linkStyle = {
    marginRight: 15
}


const Menu =() => (
    <div>
        <Link>
        <a
          style = {linkStyle}
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        </Link>

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