function CharactersSkeleton({ type }: { type: string }) {
  const ItemPlaceholder = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <ul className="rounded-4xl grid h-full grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-5">
        {ItemPlaceholder.map((cardNum) => (
          <CardSkeleton key={cardNum} type={type} />
        ))}
      </ul>
      <div className="mt-1 flex items-center justify-center gap-1 rounded-3xl bg-black py-1 sm:gap-4">
        <div className="h-8 w-8 animate-pulse cursor-pointer overflow-hidden rounded-full bg-slate-500/90"></div>
        <div className="h-8 w-8 animate-pulse cursor-pointer overflow-hidden rounded-full bg-slate-500/90"></div>
        <div className="h-8 w-8 animate-pulse cursor-pointer overflow-hidden rounded-full bg-slate-500/90"></div>
      </div>
    </>
  );
}

export default CharactersSkeleton;

function CardSkeleton({ type }: { type: string }) {
  if (type === "character") return <CharacterSkeletion />;
  else return <EpisodeOrLocationSkeletion />;
}

function CharacterSkeletion() {
  return (
    <li className="rounded-4xl w-full cursor-pointer rounded-2xl bg-black text-white">
      <a className="grid size-full min-h-24 grid-cols-[90px_auto] items-center gap-5 p-2 px-10 ring-1 ring-transparent focus:outline-none focus:ring-white md:grid-cols-[90px_auto_90px]">
        <div className="flex h-[100px] w-[85px] items-center justify-center overflow-hidden rounded-lg bg-black text-center">
          <svg
            className="h-10 w-10 animate-pulse text-slate-500/90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>

        <div className="space-y-2 text-nowrap sm:col-span-1 sm:col-start-2 sm:row-start-1">
          <div className="h-4 w-[75%] animate-pulse rounded bg-slate-500/90"></div>
          <div className="h-3 w-[30%] animate-pulse rounded bg-slate-500/90"></div>
          <div className="h-4 w-1/2 animate-pulse rounded bg-slate-500/90"></div>
          <div className="h-2 w-2/5 animate-pulse rounded bg-slate-500/90"></div>
          <div className="h-4 w-1/2 animate-pulse rounded bg-slate-500/90"></div>
          <div className="h-2 w-2/5 animate-pulse rounded bg-slate-500/90"></div>
        </div>
      </a>
    </li>
  );
}

function EpisodeOrLocationSkeletion() {
  return (
    <li className="rounded-4xl flex w-full cursor-pointer flex-col justify-center gap-3 rounded-2xl bg-black p-8 text-white">
      <div className="h-6 w-[75%] max-w-xs animate-pulse rounded bg-slate-500/90"></div>
      <div className="h-4 w-[30%] max-w-xs animate-pulse rounded bg-slate-500/90"></div>
      <div className="h-4 w-1/2 max-w-xs animate-pulse rounded bg-slate-500/90"></div>
    </li>
  );
}
