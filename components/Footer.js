import Link from "next/link";

const linkStyle = {
    marginRight: 15
}


const Menu =() => (
    <div>
        <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>


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
        </div>
);

export default Footer;