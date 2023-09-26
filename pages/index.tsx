import Link from "next/link"
import {MainLayout} from "../components/MainLatout";

export default function Home() {
  return (
    <MainLayout title="home page">
      <h1>Start page</h1>
      <Link href="about">
        About page
      </Link>
      <Link href="about/author">
        Author page author
      </Link>
      <Link href="posts">
        Posts page
      </Link>
    </MainLayout>
  )
}
