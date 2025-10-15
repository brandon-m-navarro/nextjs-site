"use client";

export default function SkillRating({
  rating,
  backgroundColor,
  fillColor,
}: {
  rating: number;
  backgroundColor: string;
  fillColor: string;
}) {
  let i = 1;
  const ratingFunc = function (index: number) {
    i++;
    return index <= rating;
  };
  const addFill = function () {
    return fillColor;
  };
  return (
    <div className="flex">
      <div
        className={`mr-[1px] rounded-full w-[10px] h-[10px] ${backgroundColor} ${
          ratingFunc(i) ? addFill() : ""
        }`}
      ></div>
      <div
        className={`mr-[1px] rounded-full w-[10px] h-[10px] ${backgroundColor} ${
          ratingFunc(i) ? addFill() : ""
        }`}
      ></div>
      <div
        className={`mr-[1px] rounded-full w-[10px] h-[10px] ${backgroundColor} ${
          ratingFunc(i) ? addFill() : ""
        }`}
      ></div>
      <div
        className={`mr-[1px] rounded-full w-[10px] h-[10px] ${backgroundColor} ${
          ratingFunc(i) ? addFill() : ""
        }`}
      ></div>
      <div
        className={`rounded-full w-[10px] h-[10px] ${backgroundColor} ${
          ratingFunc(i) ? addFill() : ""
        }`}
      ></div>
    </div>
  );
}
