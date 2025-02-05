import Image from "next/image";
import { Character, Episode, Location } from "./allTypes";

type CardProps = {
  data: Character | Location | Episode;
  type?: "character" | "location" | "episode";
};

function Card({ data, type }: CardProps) {
  if (type === "character") return <CharacterCard data={data as Character} />;
  if (type === "location") return <LocationCard data={data as Location} />;
  if (type === "episode") return <EpisodeCard data={data as Episode} />;
}

export default Card;

function CharacterCard({ data }: { data: Character }) {
  return (
    <figure className="flex h-[180px] items-center gap-3 overflow-hidden rounded-lg bg-black">
      <Image
        src={data?.image}
        className="select-none"
        width={180}
        height={180}
        alt={data?.name}
      />
      <div className="flex flex-col">
        <p className="text-3xl text-white">{data?.name}</p>
        <p className="mb-1 flex items-center gap-1 text-sm text-white">
          <div
            className={`size-2 animate-pulse rounded-full duration-150 ${data?.status.toLowerCase() === "alive" && "bg-green-500"} ${data?.status.toLowerCase() === "dead" && "bg-red-500"} ${data?.status.toLowerCase() === "unknown" && "bg-gray-500"} `}
          ></div>
          {data?.status}-{data?.species}
        </p>

        <p className="text-sm text-gray-400">Last known location:</p>
        <p className="mb-2 text-yellow-500">{data?.location?.name}</p>

        <p className="text-sm text-gray-400">First seen in :</p>
        <p className="text-yellow-500">
          Interdimensional Cable 2 : tempting Fate
        </p>
      </div>
    </figure>
  );
}

function LocationCard({ data }: { data: Location }) {
  return (
    <div className="flex h-[180px] items-center gap-3 overflow-hidden rounded-lg bg-black p-4">
      <div className="flex basis-2/3 flex-col gap-4">
        <p className="text-3xl text-white">{data?.name}</p>
        <p className="mb-1 text-sm text-white">
          <span className="text-lg text-yellow-500">Type : </span> {data?.type}
        </p>
        <p className="text-sm text-white">
          <span className="text-lg text-yellow-500">Dimension : </span>{" "}
          {data?.dimension}
        </p>
      </div>
      <div className="flex basis-1/3 items-center justify-center">
        <button className="rounded-full bg-white px-7 py-2 text-black">
          Residents
        </button>
      </div>
      {/* <p className="mb-2 text-yellow-500">residents{data?.residents?.map(())}</p> */}
    </div>
  );
}

function EpisodeCard({ data }: { data: Episode }) {
  return (
    <div className="flex h-[180px] items-center gap-3 overflow-hidden rounded-lg bg-black p-4">
      <div className="flex basis-2/3 flex-col gap-4">
        <p className="text-3xl text-white">{data?.name}</p>
        <p className="mb-1 text-sm text-white">
          <span className="text-lg text-yellow-500">Air Date : </span>{" "}
          {data?.air_date}
        </p>
        <p className="text-sm text-white">
          <span className="text-lg text-yellow-500">Epi Code : </span>{" "}
          {data?.episode}
        </p>
      </div>
      <div className="flex basis-1/3 items-center justify-center">
        <button className="rounded-full bg-white px-7 py-2 text-black">
          Characters
        </button>
      </div>
    </div>
  );
}
