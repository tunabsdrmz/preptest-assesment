"use client";

import Image from "next/image";

const BlurredCard = () => {
  return (
    <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center z-50 backdrop-blur-sm font-medium rounded-[20px]">
      <div className="bg-secondary/20 flex flex-col items-center justify-center z-50 w-full h-full rounded-[20px]">
        <Image
          className="object-contain aspect-auto"
          src="/icons/padlock.png"
          alt="padlock"
          width={54}
          height={54}
        />
        <p className="text-xs text-dark/85 text-center pt-1.5 pb-6">
          You cannot proceed to the next section <br /> until you have completed the
          tests.
        </p>
        <div className="rounded-[30px] p-[3px] bg-gradient-to-b from-[#FFEDDC] via-[#FFE6C0] to-[#FF7B5D00] group transition-all duration-150 hover:scale-105">
          <div className="bg-primary/55 cursor-pointer rounded-[30px] flex items-center justify-center w-[190px] h-[46px] group transition-all duration-150">
            <p className="text-base text-white">Generate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface BigCardRootProps
  extends React.ComponentProps<"div">,
    React.ComponentProps<"p"> {
  isLocked?: boolean;
  isActivated?: boolean;
}
const BigCardRoot: React.FC<BigCardRootProps> = ({
  isLocked = false,
  isActivated = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      data-test="big-card"
      className={`rounded-[20px] p-[3px] ${
        !isLocked && isActivated ? "bg-gradient-to-b from-[#6FB2B8] to-[#FFECD4]" : ""
      }`}>
      <div
        className={`relative ${
          isLocked ? "bg-secondary/10" : "bg-primary-light"
        } flex flex-col rounded-[20px] gap-1.5 justify-center items-start px-[25px] pt-[19px] pb-[30px] min-h-[300]`}
        {...props}>
        {children}

        <Image
          className="absolute right-0 bottom-0 z-0"
          src="/icons/BigCardIcon.png"
          alt="3d fluency password key"
          width={171}
          height={241}
        />

        {isLocked && <BlurredCard />}
      </div>
    </div>
  );
};

const BigCardTitle: React.FC<BigCardRootProps> = ({
  isActivated = false,
  children,
  className,
  ...props
}) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <p
        className="text-dark font-medium text-xl z-10"
        {...props}>
        {children}
      </p>
      <Image
        data-test="checkmark"
        className={`object-contain aspect-square ${
          isActivated ? "opacity-100" : "opacity-0"
        }`}
        src="/icons/checkmark.png"
        alt="checkmark"
        width={36}
        height={36}
      />
    </div>
  );
};

const BigCardDescription: React.FC<React.ComponentProps<"p">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className="text-light-dark font-normal text-base z-10"
      {...props}>
      {children}
    </p>
  );
};

const BigCardTopicCardContainer: React.FC<React.ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`grid grid-cols-1 xxs:grid-cols-2 gap-3 place-items-start z-10 pt-6 pb-8`}
      {...props}>
      {children}
    </div>
  );
};

interface BigCardTopicCardProps extends React.ComponentProps<"div"> {
  topic?: "SUBTOPICS" | "QUESTION" | "TIME" | "DIFFUCULTY" | string;
  count?: number | string;
}

const BigCardTopicCard: React.FC<BigCardTopicCardProps> = ({
  topic,
  count,
  className,
  ...props
}) => {
  return (
    <div
      className="flex items-center justify-center gap-2 z-10"
      {...props}>
      <div className="rounded-[15px] p-[3px] bg-gradient-to-b from-[#FFEDDC] from-5% to-[#FF7B5D]">
        <div className="flex items-center justify-center h-[35px] w-[60px] rounded-[15px] bg-primary text-white text-sm font-semibold">
          {count}
        </div>
      </div>
      <p className="text-dark font-medium text-xs">{topic}</p>
    </div>
  );
};

interface BigCardButtonProps extends React.ComponentProps<"div"> {
  icon?: boolean;
}

const BigCardButton: React.FC<BigCardButtonProps> = ({
  icon = true,
  className,
  children,
  ...props
}) => {
  return (
    <div
      data-test="big-card-button"
      className="rounded-[30px] p-[3px] bg-gradient-to-b from-[#FFFFFF] from-0% to-[#6FB2B8] group transition-all duration-150 hover:scale-105 z-10">
      <div
        className="cursor-pointer flex items-center justify-center gap-2.5 z-10 bg-secondary rounded-[30px] py-2.5 text-white font-medium text-base px-12 group transition-all duration-150"
        {...props}>
        {children}
        {icon && <span className="text-2xl">&gt;</span>}
      </div>
    </div>
  );
};

export const BigCard = {
  Root: BigCardRoot,
  Title: BigCardTitle,
  Description: BigCardDescription,
  TopicCard: BigCardTopicCard,
  Button: BigCardButton,
  TopicCardContainer: BigCardTopicCardContainer,
};
