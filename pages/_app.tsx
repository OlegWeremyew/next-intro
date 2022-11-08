import '../styles/main.css'
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({Component, pageProps}: any) {
  return (
    <>
      <NextNProgress
        color={"#b22323"}
        // startPosition="0.3"
        // stopDelayMs="100"
        height={5}
      />
      <Component {...pageProps}/>
      {/*<style jsx global>{`*/}
      {/*  body {*/}
      {/*    font-family: 'Roboto', sans-serif*/}
      {/*  }*/}
      {/*`}</style>*/}
    </>
  )
}