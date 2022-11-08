import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLatout";

export default function Post() {
  const router = useRouter()
  return (
    <MainLayout title="Post page">
      <h1>Post id {router.query.id}</h1>
    </MainLayout>
  )
}