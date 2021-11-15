import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    console.log("Logout");
    router.push("/login");
  };

  return (
    <>
      <Link href="/">Home</Link> | <Link href="/profile">Profile</Link> |{" "}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
