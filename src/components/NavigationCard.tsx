"use client";

const NavigationCardRoot: React.FC<React.ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`${className} bg-primary-light rounded-[20px] items-center justify-between py-2.5 px-[15px] w-full`}
      {...props}>
      {children}
    </div>
  );
};
const NavigationCardLeftLink: React.FC<React.ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      data-testid="navigation-left"
      className={`cursor-pointer flex items-center justify-center gap-1 font-semibold text-lg text-primary transition-all duration-150 ease-in hover:scale-110`}
      {...props}>
      <span className="text-2xl">{"<"}</span>
      {children}
    </div>
  );
};
const NavigationCardCenterLink: React.FC<React.ComponentProps<"p">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p
      data-testid="navigation-center"
      className={`font-semibold text-3xl text-primary`}
      {...props}>
      {children}
    </p>
  );
};
const NavigationCardRightLink: React.FC<React.ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      data-testid="navigation-right"
      className={`cursor-pointer flex items-center justify-center gap-1 font-semibold text-lg text-primary transition-all duration-150 ease-in hover:scale-110`}
      {...props}>
      {children}
      <span className="text-2xl">{">"}</span>
    </div>
  );
};

export const NavigationCard = {
  Root: NavigationCardRoot,
  CenterLink: NavigationCardCenterLink,
  LeftLink: NavigationCardLeftLink,
  RightLink: NavigationCardRightLink,
};
