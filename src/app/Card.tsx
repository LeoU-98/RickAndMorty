import Image from "next/image";

function Card() {
  return (
    <li>
      <figure className="flex items-center gap-3 bg-white">
        <div className="size-60 bg-blue-400">
          <Image src="" width={50} height={50} alt="Trulli" />
        </div>

        <div className="bg-black">
          <p className="text-[28px] text-white">Michael Jenkins</p>
          <p className="mb-4 text-white">* Dead - Human</p>

          <p className="text-white">Last known location:</p>
          <p className="mb-4 text-lg text-yellow-500">Interdimensional Cable</p>

          <p className="text-white">First seen in :</p>
          <p className="text-lg text-yellow-500">
            Interdimensional Cable 2 : tempting Fate
          </p>
        </div>
        {/* <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> */}
      </figure>
    </li>
  );
}

export default Card;
