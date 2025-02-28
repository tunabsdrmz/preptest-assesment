"use client";

import Image from "next/image";
import { useState } from "react";

const CollapsibleCardRoot: React.FC<React.ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`bg-primary-light flex flex-col items-start rounded-[20px] gap-4 justify-start px-[36px] py-[29px] mt-3`}
      {...props}>
      {children}
    </div>
  );
};

const CollapsibleCardTitle: React.FC<React.ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="flex items-start justify-center gap-6 w-full">
      <div className="w-0 sm:w-[139px]" />
      <p
        className="text-primary font-medium text-2xl z-10 sm:ml-[15%] w-full text-center sm:text-left"
        {...props}>
        {children}
      </p>
    </div>
  );
};

const CollapsibleCardDescription: React.FC<React.ComponentProps<"p">> = ({
  children,
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6">
      <div className="bg-[#FFBCAD] rounded-[20px] flex items-center justify-center min-w-[239px] min-h-[186px] sm:min-w-[139px] sm:min-h-[186px]">
        <Image
          className="aspect-auto object-contain"
          src="/icons/BooksAndLaptop.png"
          alt="casual life 3d stack of books and mug next to laptop screen showing planets"
          width={139}
          height={186}
        />
      </div>
      <div className="flex flex-col items-center sm:items-start justify-center gap-3">
        <div
          data-collapse="collapse"
          className={`w-full basis-full overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[100vh]" : "max-h-[120px]"
          }`}>
          <p className="text-[#555555] text-base font-normal text-center sm:text-left">
            {children}
          </p>
        </div>
        <div
          data-test={"collapsible-card-toggle"}
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-target="collapse"
          className="cursor-pointer sm:ml-[20%] bg-primary rounded-[50px] flex items-center justify-center py-2 px-7 gap-2 text-white font-medium text-base transition-all duration-150 hover:scale-105">
          <p>{isOpen ? "Read Less" : "Read More"}</p>
          <span
            className={`transition-all duration-100 ${
              isOpen ? "rotate-270" : ""
            } rotate-90 text-2xl`}>
            &gt;
          </span>
        </div>
      </div>
    </div>
  );
};

export const CollapsibleCard = {
  Root: CollapsibleCardRoot,
  Title: CollapsibleCardTitle,
  Description: CollapsibleCardDescription,
};
