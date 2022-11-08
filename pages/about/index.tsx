import Router from 'next/router'
import {MainLayout} from "../../components/MainLatout";
import {NextPageContext} from "next";

interface IAbout {
  title: string
}

export default function About({title = 'Hello'}: IAbout) {

  const linkClickHandler = (value: string = '/') => {
    Router.push(value)
  }

  return (
    <MainLayout title="About page">
      <h1>{title}</h1>
      <button onClick={() => linkClickHandler()}>Go back to home</button>
      <br/>
      <button onClick={() => linkClickHandler('posts')}>G to posts</button>
    </MainLayout>
  )
}

About.getInitialProps = async ({req}: NextPageContext) => {
  if (!req) {
    return {posts: null}
  }

  const response = await fetch('http://localhost:4200/about')
  const data: {title: string}  = await response.json()

  return {
    title: data.title,
  }
}