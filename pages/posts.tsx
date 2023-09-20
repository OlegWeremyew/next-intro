import Head from "next/head";
import {MainLayout} from "../components/MainLatout";
import {useEffect, useState} from "react";
import Link from "next/link";
import {MyPost} from "../interfaces/post";
import {NextPageContext} from "next";

interface IPosts {
  posts: MyPost[]
}

export default function Posts({posts: serverPosts}: IPosts) {

  const [posts, setPosts] = useState<MyPost[]>(serverPosts)

  useEffect(() => {
    async function load() {
      const response = await fetch('http://localhost:4200/posts')
      const data = await response.json()
      setPosts(data)
    }

    load()
  }, [])

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title="Posts page">
      <Head>
        <title>Posts page</title>
        <meta name='keywords' content="post page, next learn"/>
        <meta name='description' content="tutorial"/>
      </Head>
      <h1>Posts page</h1>
      {/*     <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>*/}
      <ul>
        {posts.map((post: MyPost) => (
          <li key={post.id}>
            {/*<Link href={`/post/${post.id}`}>{post.title}</Link>*/}
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
  if (!req) {
    return {posts: null}
  }

  const response = await fetch('http://localhost:4200/posts')
  const posts: MyPost[] = await response.json()

  return {
    posts,
  }
}
