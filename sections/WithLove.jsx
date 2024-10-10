"use client";
import Signature from "@/components/Signature";
import { Heart } from "lucide-react";
import React from "react";
import { motion } from "react";

const WithLove = () => {
  return (
    <div
      id="MadewithLove"
      className="p-6 bg-secondEle rounded-xl flex items-center flex-col gap-6 overflow-x-hidden"
    >
      <div className="w-full">
        <div className="text-[#97979e] font-bold flex gap-4">
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          <div className="flex gap-2 items-center">
            Made with <Heart size={22} fill="rgba(239,68,68)" stroke="rgba(239,68,68,68)" /> by
          </div>
        </div>
        <div className="font-bold text-2xl">Kurnia Kharisma</div>
        <div className="flex items-center justify-center">
          <Signature />
        </div>
      </div>
    </div>
  );
};

export default WithLove;
