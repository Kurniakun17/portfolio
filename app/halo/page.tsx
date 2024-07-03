import Test from "@/components/Test";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex w-[80%] m-auto mt-4 gap-2 duration-300">
        <div className="h-[300px] rounded-xl flex-1 hover:grow-[20] cursor-pointer duration-300 bg-gray-400 flex flex-col items-start justify-end p-4 group/parent">
          {/* <div className="flex">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyftgSMaCl-Fr1dj9m0ULr32hGFqAbvHOrg&s"
              className="rounded-xl h-12 w-12 inline"
            />
            <p className="duration-300 group-hover/parent:scale-100  group-hover/parent:opacity-100">
              Angry Birds Reloaded
            </p>
          </div> */}
        </div>
        <div className="h-[300px] rounded-xl flex-1 hover:grow-[20] cursor-pointer duration-300 bg-gray-400 flex flex-col items-start justify-end p-4">
          2
        </div>
        <div className="h-[300px] rounded-xl flex-1 hover:grow-[20] cursor-pointer duration-300 bg-gray-400 flex flex-col items-start justify-end p-4">
          3
        </div>
        <div className="h-[300px] rounded-xl flex-1 hover:grow-[20] cursor-pointer duration-300 bg-gray-400 flex flex-col items-start justify-end p-4">
          4
        </div>
        <div className="h-[300px] rounded-xl flex-1 hover:grow-[20] cursor-pointer duration-300 bg-gray-400 flex flex-col items-start justify-end p-4">
          5
        </div>
      </div>
    </div>
  );
};

export default page;
