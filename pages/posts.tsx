import Head from "next/head";
import {MainLayout} from "../components/MainLatout";
import {useEffect, useState} from "react";

export default function Post() {

  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:4200/posts')
      const data = await response.json()
      setPosts(data)
    }
    load()
  }, [])

  return (
    <MainLayout title="Posts page">
      <Head>
        <title>Posts page</title>
        <meta name='keywords' content="post page, next learn"/>
        <meta name='description' content="tutorial"/>
      </Head>
      <h1>Posts page</h1>
      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>
    </MainLayout>
  )
}