import Link from "next/link";

function Navbar() {
  return (
    <nav className="container mx-auto mt-1 flex justify-between rounded-full bg-black/50 px-8 py-2">
      <div>Logo</div>
      <ul className="flex gap-2">
        <li>
          <Link href={"ch"}>Characters</Link>
        </li>
        <li>
          <Link href={"ch"}>Locations</Link>
        </li>
        <li>
          <Link href={"ch"}>Episodes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
