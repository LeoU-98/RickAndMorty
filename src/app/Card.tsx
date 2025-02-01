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
        <Image src={data?.image} width={220} height={220} alt={data?.name} />

        <div className="">
          <p className="text-[28px] text-white">{data?.name}</p>
          <p className="mb-4 text-white">
            *{data?.status}-{data?.species}
          </p>

          <p className="text-white">Last known location:</p>
          <p className="mb-4 text-lg text-yellow-500">{data?.location?.name}</p>

          <p className="text-white">First seen in :</p>
          <p className="text-lg text-yellow-500">
            Interdimensional Cable 2 : tempting Fate
          </p>
        </div>
      </figure>
    </li>
  );
}

export default Card;
