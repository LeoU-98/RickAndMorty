import Image from "next/image";
import { Character } from "./allTypes";

type CardProps = {
  data: Character;
};

function Card({ data }: CardProps) {
  console.log(data);

  return (
    <li>
      <figure className="flex items-center gap-3 overflow-hidden rounded-lg bg-black">
        <Image src={data?.image} width={180} height={180} alt={data?.name} />

        <div className="">
          <p className="text-3xl text-white">{data?.name}</p>
          <p className="mb-1 text-sm text-white">
            *{data?.status}-{data?.species}
          </p>

          <p className="text-sm text-gray-400">Last known location:</p>
          <p className="mb-2 text-yellow-500">{data?.location?.name}</p>

          <p className="text-sm text-gray-400">First seen in :</p>
          <p className="text-yellow-500">
            Interdimensional Cable 2 : tempting Fate
          </p>
        </div>
      </figure>
    </li>
  );
}

export default Card;
