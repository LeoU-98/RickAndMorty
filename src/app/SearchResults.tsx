"use client";

import Card from "./Card";
import { useSearch } from "./Context/searchContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface ArrowProps {
  className?: string;
  style?: React.StyleHTMLAttributes<string>;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${"!-right-8 !flex !h-full !w-6 items-center justify-center rounded-full !bg-black !text-white duration-300 before:!content-none hover:!bg-white hover:!text-black"}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <MdOutlineArrowForwardIos className="text-red h-full w-full" />
    </div>
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${"!-left-8 !flex !h-full !w-6 items-center justify-center rounded-full !bg-black !text-white duration-300 before:!content-none hover:!bg-white hover:!text-black"}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <MdOutlineArrowBackIos className="h-full w-full" />
    </div>
  );
}

function SearchResults() {
  const { data, isLoading, error, category } = useSearch();
  const settings = {
    initialSlide: 0,
    slidesToShow: 1,
    slidesPerRow: 6,
    Infinity: false,
    adaptiveHeight: true,
    rows: 1,
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (isLoading) return <div>Loading ....</div>;
  if (error) return <div>error ....</div>;

  return (
    <div className="flex flex-col items-center gap-4 p-5">
      <div className="slider-container xl:max-w-[970] 2xl:max-w-[1200px]">
        <Slider {...settings}>
          {data?.results?.map((item) => (
            <Card data={item} type={category} key={item.id} />
          ))}
        </Slider>
      </div>
      <ServerSidePagination />
    </div>
  );
}

export default SearchResults;

function ServerSidePagination() {
  const { setCurrentPage, currentPage, LastPageNumber } = useSearch();

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={`rounded-lg px-4 py-2 duration-300 ${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-600"
            : "w-[92px] bg-black text-white hover:bg-white hover:text-black"
        }`}
      >
        Previous
      </button>

      <span className="rounded-full bg-black px-4 py-2 text-white">
        Page {currentPage}
      </span>

      <button
        onClick={() =>
          setCurrentPage((prev) => (prev < LastPageNumber! ? prev + 1 : prev))
        }
        disabled={currentPage! >= LastPageNumber!}
        className={`rounded-lg px-4 py-2 duration-300 ${
          currentPage! >= LastPageNumber!
            ? "cursor-not-allowed bg-gray-600"
            : "w-[92px] bg-black text-white hover:bg-white hover:text-black"
        }`}
      >
        Next
      </button>
    </div>
  );
}
