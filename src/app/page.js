"use client"
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Next.JS Project</h1>
        <Link href={"/about"}>about page</Link>
        <Link href={"/contact"}>contact page</Link>
        <Link href={"/home"}>home page</Link>
        <button onClick={()=>router.push("/home")}>go to home page</button>
       </main>
    </div>
  );
}
