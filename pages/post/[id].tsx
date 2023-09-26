import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLatout";
import Link from "next/link";
import {useEffect, useState} from "react";
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/post";

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

interface IPost {
  post: MyPost
}

export default function Post({post: serverPost}: IPost) {
  const router = useRouter()

  const [post, setPost] = useState<MyPost>(serverPost)

  useEffect(() => {
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
      const data: MyPost = await response.json()

      setPost(data)
    }

    if (!serverPost) {
      load()
    }

  }, [])

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout title="Post page">
      {/*<h1>Post id {router.query.id}</h1>*/}
      <h1>{post.title}</h1>
      <hr/>
      <p>{post.body}</p>
      <Link href='/posts'>Back to all posts</Link>
    </MainLayout>
  )
}

export async function getServerSideProps({req, query}: PostNextPageContext) {
  const response = await fetch(`http://localhost:4200/posts/${query.id}`)
  const post: MyPost = await response.json()

  return {
    props: post,
  }
}
