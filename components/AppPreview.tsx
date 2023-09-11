'use client';
import React from 'react';

const AppPreview = ({
  title,
  description,
  isBorder = true,
  link,
}: {
  title: string;
  description: string;
  isBorder?: boolean;
  link: string;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-3 items-center w-full">
          <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl"></div>
          <div className="flex flex-col flex-1">
            <h4 className="font-semibold text-lg w-[90%] ">{title}</h4>
            <p className="line-clamp-1 text-[#98989f]">{description}</p>
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          className="text-sm px-6 h-fit py-2 bg-thirdEle text-blueAccent rounded-full font-bold "
        >
          OPEN
        </a>
      </div>
      {isBorder ? <div className="ml-14 bg-slate-500 h-[0.1px]"></div> : null}
    </div>
  );
};

export default AppPreview;
