import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme'

export default function MyApp(props) {
  const{ Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side-theme');
     if (jssStyles){
       jssStyles.parentElement.removeChild(jssStyles);
     }
  }, []);

  return(
    <div>
      <Head>
      <meta charset="utf-8" />
      <meta name="author" content="Anselmo Lima - Grupo Fatos" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#000333" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000333" />
      <meta name="msapplication-navbutton-color" content="#000333" />
      <meta name="msapplication-TileImage" content="https://grupofatos.com.br/contabilidade/wp-content/uploads/2017/01/cropped-logo-3-1-270x270.webp&quot;" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta name="google-site-verification" content="mNm2aKKa259yAhiAMdt1k7Ctm1WvsS-Gh5Xycgb_osc" />
      <meta name="description" content="Empresa de contabilidade com sede em São José dos Campos e unidade em São Paulo. Atende nacionalmente. Você merece um atendimento personalizado. Fale conosco!" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />" 

        <title>Contabilidade em São Jose dos Campos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ThemeProvider theme={theme}>
       <CssBaseline/>
       <Component {...pageProps}></Component>
      </ThemeProvider>
      </div>
  )
}




