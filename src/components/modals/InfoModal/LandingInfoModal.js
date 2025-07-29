import React from "react";
import { MAX_MISTAKES } from "../../../lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import BaseModal from "../BaseModal";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";

function LandingInfoModal({ initiallyOpen = false, onClose }) {
  const { resetAllGames } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title=""
      initiallyOpen={initiallyOpen}
      onClose={onClose}
      showActionButton={true}
      actionButtonText="Got It!"
      actionButtonClassName="px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-400"
      footerElements={
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded font-bold hover:bg-purple-800"
          onClick={() => {
            resetAllGames();
            if (onClose) onClose();
          }}
        >
          Restart Game
        </button>
      }
    >
      <Tabs defaultValue="how-to-play">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="how-to-play">How To Play</TabsTrigger>
          <TabsTrigger value="About-Meg">About Meg</TabsTrigger>
        </TabsList>
        <TabsContent value="how-to-play">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What's The Goal?</AccordionTrigger>
              <AccordionContent>
                Find groups of items or names that share something in common.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How Do I Play?</AccordionTrigger>
              <AccordionContent>
                Select the items and tap 'Submit' to check if your guess matches
                one of the answer categories.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How Many Tries Do I Get?</AccordionTrigger>
              <AccordionContent>
                {`You can make ${MAX_MISTAKES} mistakes before the game ends.`}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="About-Meg">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who is She?</AccordionTrigger>
              <AccordionContent>
                My super hot gf{" "}
                <a
                  href="https://andcomputers.io/"
                  target="_blank"
                  className="underline font-bold"
                  rel="noopener noreferrer"
                >
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why Did I Put This Together?</AccordionTrigger>
              <AccordionContent>
                <div className="mb-1">
                  <div>a. In the hope I can finally beat Meg in one of the NYT games.</div>
                  <div>b. I'm a simp</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Another Prompt?
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-flow-row">
                  <p>TBC </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
      {localStorage.setItem("wordleWordIndex", "0")}
    </BaseModal>
  );
}

export default LandingInfoModal;