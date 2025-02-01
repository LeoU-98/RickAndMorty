import Link from "next/link";

function Navbar() {
  return (
    <nav className="container mx-auto mt-1 flex items-center justify-between rounded-md bg-black/50 px-8 py-8">
      <div className="basis-1/3">Logo</div>
      <ul className="flex basis-1/3 items-center justify-center gap-4">
        <li>
          <Link
            href={"ch"}
            className="rounded-full bg-green-500 px-4 py-2 text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"ch"}
            className="rounded-full bg-green-500 px-4 py-2 text-white"
          >
            Characters
          </Link>
        </li>
        <li>
          <Link
            href={"ch"}
            className="rounded-full bg-green-500 px-4 py-2 text-white"
          >
            Locations
          </Link>
        </li>
        <li>
          <Link
            href={"ch"}
            className="rounded-full bg-green-500 px-4 py-2 text-white"
          >
            Episodes
          </Link>
        </li>
      </ul>
      <div className="flex basis-1/3 flex-col items-end">
        <div>
          <p>Your Name : Name </p>
          <p>Your Current Location : Earth</p>
          <p>Time Now : 12 pm</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
