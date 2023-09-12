import Image from 'next/image';
import React from 'react';

const Project = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className={`flex flex-col justify-end rounded-xl max-w-[500px]`}>
      <div className="flex overflow-x-auto snap-x snap-mandatory rounded-t-xl overflow-hidden ">
        <Image
          src="https://picsum.photos/1080"
          className="snap-center aspect-[16/10] object-cover h-full"
          alt="test"
          height={1080}
          width={1080}
        />
        <Image
          src="https://picsum.photos/1080"
          className="snap-center aspect-[16/10] object-cover h-full"
          alt="test"
          height={1080}
          width={1080}
        />
        <Image
          src="https://picsum.photos/1080"
          className="snap-center  aspect-[16/10] object-cover h-full"
          alt="test"
          height={1080}
          width={1080}
        />
      </div>
      <div className="flex  justify-between items-center bg-secondEle rounded-b-xl p-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500"></div>
          <div className="flex flex-col flex-1">
            <h3 className=" font-semibold">{title}</h3>
            <p className="line-clamp-1 text-sm">{description}</p>
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
    </div>
  );
};

export default Project;
