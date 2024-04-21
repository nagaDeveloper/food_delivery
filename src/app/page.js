import Link from "next/link";

export default function Home() {
  return (
    <>
      <a href="">ST Pizza</a>
      <nav>
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link href={""}>Login</Link>
      </nav>
    </>
  );
}
