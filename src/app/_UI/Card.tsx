import Image from "next/image";
import { Character, Episode, Location } from "../app.type.";

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
    <figure className="flex h-fit items-center gap-3 overflow-hidden rounded-lg bg-black">
      <Image
        src={data?.image}
        className="select-none"
        width={180}
        height={180}
        alt={data?.name}
      />
      <div className="flex flex-col">
        <p className="mb-2 text-white xxs:text-xl xs:text-3xl md:text-xl lg:text-3xl">
          {data?.name}
        </p>
        <p className="mb-1 flex items-center gap-1 text-xs text-white xxs:text-sm md:text-xs lg:text-sm">
          <span
            className={`size-2 animate-pulse rounded-full duration-150 ${data?.status.toLowerCase() === "alive" && "bg-green-500"} ${data?.status.toLowerCase() === "dead" && "bg-red-500"} ${data?.status.toLowerCase() === "unknown" && "bg-gray-500"} `}
          ></span>
          {data?.status}-{data?.species}
        </p>

        <p className="text-xs text-gray-400 xs:text-sm md:text-xs lg:text-sm">
          Last known location:
        </p>
        <p className="mb-2 text-xs text-yellow-500 xs:text-base md:text-xs lg:text-sm">
          {data?.location?.name}
        </p>
        <p className="text-xs text-gray-400 xs:text-sm md:text-xs lg:text-sm">
          Origin:
        </p>
        <p className="text-xs text-yellow-500 xs:text-base md:text-xs lg:text-sm">
          {data?.origin?.name}
        </p>
      </div>
    </figure>
  );
}

function LocationCard({ data }: { data: Location }) {
  return (
    <div className="flex h-[180px] items-center gap-3 overflow-hidden rounded-lg bg-black p-4">
      <div className="space-y-3">
        <p className="text-3xl text-white">{data?.name}</p>
        <p className="mb-1 text-sm text-white">
          <span className="text-lg text-yellow-500">Type : </span> {data?.type}
        </p>
        <p className="text-sm text-white">
          <span className="text-lg text-yellow-500">Dimension : </span>{" "}
          {data?.dimension}
        </p>
      </div>
    </div>
  );
}

function EpisodeCard({ data }: { data: Episode }) {
  return (
    <div className="flex h-[180px] items-center gap-3 overflow-hidden rounded-lg bg-black p-4">
      <div className="space-y-3">
        <p className="text-2xl text-white xs:text-3xl">{data?.name}</p>
        <p className="mb-1 text-sm text-white">
          <span className="text-lg text-yellow-500">Air Date : </span>{" "}
          {data?.air_date}
        </p>
        <p className="text-sm text-white">
          <span className="text-lg text-yellow-500">Epi Code : </span>{" "}
          {data?.episode}
        </p>
      </div>
    </div>
  );
}
