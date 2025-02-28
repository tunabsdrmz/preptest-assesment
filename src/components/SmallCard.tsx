"use client";

import Image from "next/image";

interface SmallCardRootProps extends React.ComponentProps<"div"> {
  variant?: "primary" | "secondary";
}

const variants = {
  primary: "bg-primary-light",
  secondary: "bg-secondary-light",
};

const SmallCardRoot: React.FC<SmallCardRootProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const variantClassName = variants[variant];
  return (
    <div
      className={`relative ${variantClassName} flex flex-col items-start rounded-[20px] gap-0.5 justify-center px-[25px] pt-[14px] pb-[20px] min-h-[90]`}
      {...props}>
      {children}
      <Image
        className="absolute right-1.5 bottom-0 z-0"
        src="/icons/SmallCardIcon.png"
        alt="casual life chart and statistics"
        width={163}
        height={165}
      />
    </div>
  );
};

const SmallCardTitle: React.FC<React.ComponentProps<"p">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className="text-dark font-medium text-xl z-10"
      {...props}>
      {children}
    </p>
  );
};

const SmallCardDescription: React.FC<React.ComponentProps<"p">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className="text-light-dark font-normal text-sm z-10"
      {...props}>
      {children}
    </p>
  );
};

export const SmallCard = {
  Root: SmallCardRoot,
  Title: SmallCardTitle,
  Description: SmallCardDescription,
};
