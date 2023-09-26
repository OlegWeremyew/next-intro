import Link from "next/link";
import Head from "next/head";
import {ReactNode} from "react";

export function MainLayout({children, title = "Next app"}: {children: ReactNode, title?: string}) {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name='keywords' content="About page, next learn"/>
        <meta name='description' content="tutorial"/>
        <meta charSet='utf-8'/>
      </Head>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx global>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background-color: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          color: white;
          text-decoration: none;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  )
}
