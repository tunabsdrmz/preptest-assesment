"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TestsPage from "@/screens/TestsPage";
import FunctionsPage from "@/screens/FunctionsPage";
import PolynomsPage from "@/screens/PolynomsPage";
import { NavigationCard } from "@/components/NavigationCard";

const sections = ["Functions", "Tests", "Polynoms"] as const;
type SectionType = (typeof sections)[number];
const sectionsMap = {
  Functions: <FunctionsPage />,
  Tests: <TestsPage />,
  Polynoms: <PolynomsPage />,
};
export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState<SectionType>("Tests");
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const handleSwitch = (newSection: SectionType) => {
    if (sections.indexOf(newSection) > sections.indexOf(activeSection)) {
      setDirection("rtl");
    } else {
      setDirection("ltr");
    }
    setActiveSection(newSection);
  };
  const navigateToRight =
    sections[
      sections.indexOf(activeSection) - 1 === -1 ? 2 : sections.indexOf(activeSection) - 1
    ];
  const navigateToLeft =
    sections[
      sections.indexOf(activeSection) + 1 === 3 ? 0 : sections.indexOf(activeSection) + 1
    ];
  return (
    <div className="w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ x: direction === "ltr" ? "-100%" : "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: direction === "ltr" ? "100%" : "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-full flex flex-col items-center">
          {/* Top Bar Navigation Mobile */}

          <NavigationCard.Root className="xs:hidden flex flex-col">
            <NavigationCard.CenterLink>{activeSection}</NavigationCard.CenterLink>
            <div className="flex items-center justify-between w-full">
              <NavigationCard.LeftLink onClick={() => handleSwitch(navigateToLeft)}>
                {navigateToLeft}
              </NavigationCard.LeftLink>

              <NavigationCard.RightLink onClick={() => handleSwitch(navigateToRight)}>
                {navigateToRight}
              </NavigationCard.RightLink>
            </div>
          </NavigationCard.Root>

          {/* Top Bar Navigation */}

          <NavigationCard.Root className="hidden xs:flex xs:flex-row">
            <NavigationCard.LeftLink onClick={() => handleSwitch(navigateToLeft)}>
              {navigateToLeft}
            </NavigationCard.LeftLink>
            <NavigationCard.CenterLink>{activeSection}</NavigationCard.CenterLink>
            <NavigationCard.RightLink onClick={() => handleSwitch(navigateToRight)}>
              {navigateToRight}
            </NavigationCard.RightLink>
          </NavigationCard.Root>

          {/* Content View */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ x: direction === "ltr" ? "-100%" : "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: direction === "ltr" ? "100%" : "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex w-full h-full ">
              {sectionsMap[activeSection]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
