import Link from "next/link";

function Navbar() {
  return (
    <nav className="container mx-auto mt-1 flex items-center justify-between rounded-md bg-gradient-to-r from-slate-800/80 to-slate-600/80 px-8 py-2">
      <div className="basis-1/3">Logo</div>
      <ul className="flex basis-1/3 items-center justify-center gap-4">
        <li>
          <Link
            prefetch={false}
            href={"/"}
            className="rounded-full bg-green-500 px-4 py-2 text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
            href={"Characters"}
            className="rounded-full bg-green-500 px-4 py-2 text-white"
          >
            Characters
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
            href={"Locations"}
            className="rounded-full bg-green-500 px-4 py-2 text-white"
          >
            Locations
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
            href={"Episodes"}
            className="rounded-full bg-green-500 px-4 py-2 text-white"
          >
            Episodes
          </Link>
        </li>
      </ul>
      <div className="flex basis-1/3 flex-col items-end">
        <div>
          <p>Your Name : LeoU </p>
          <p>Your Current Location : Earth</p>
          <p>Time Now : 12 pm</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
