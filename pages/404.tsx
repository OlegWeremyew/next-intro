import Link from "next/link";
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
  return (
    <>
      <h1 className={classes.error}>Error 404</h1>
      <p>go to home homeless</p>
      <Link href='/'>go back</Link>
    </>
  )
}
