import Router from 'next/router'
import {MainLayout} from "../../components/MainLatout";

export default function About() {

  const linkClickHandler = (value: string = '/') => {
    Router.push(value)
  }

  return (
    <MainLayout title="About page">
      <h1>About page</h1>
      <button onClick={() => linkClickHandler()}>Go back to home</button>
      <br/>
      <button onClick={() => linkClickHandler('posts')}>G to posts</button>
    </MainLayout>
  )
}