import Head from 'next/head';
import Menu from '../components/Menu';


export default function Home() {
  return (
    <div>
      <Head>
      <meta charset="utf-8" />
      <meta name="theme-color" content="#000333" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000333" />
      <meta name="msapplication-navbutton-color" content="#000333" />
      <meta name="msapplication-TileImage" content="https://grupofatos.com.br/contabilidade/wp-content/uploads/2017/01/cropped-logo-3-1-270x270.webp&quot;" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta name="google-site-verification" content="mNm2aKKa259yAhiAMdt1k7Ctm1WvsS-Gh5Xycgb_osc" />
      <meta name="description" content="Empresa de contabilidade com sede em São José dos Campos e unidade em São Paulo. Atende nacionalmente. Você merece um atendimento personalizado. Fale conosco!" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>

        <title>Contabilidade em São Jose dos Campos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />    
      <Footer />
    </div>
    
  )
}
export default Home;