import React, { useState, useEffect } from "react";
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

function LandingInfoModal({ open, onClose }) {
  const { resetAllGames } = React.useContext(PuzzleDataContext);
  const [showConfirm, setShowConfirm] = useState(false);

  // Reset confirmation dialog when modal closes
  useEffect(() => {
    if (!open) setShowConfirm(false);
  }, [open]);

  if (!open) return null;

  return (
    <BaseModal
      title=""
      open={open}
      onClose={onClose}
      showActionButton={true}
      actionButtonText="Got It!"
      actionButtonClassName="px-4 py-2 bg-blue-300 text-white rounded font-bold hover:bg-blue-600"
      onActionButtonClick={onClose}
      footerElements={
        <>
          <button
            className="px-4 py-2 bg-fuchsia-400 text-white rounded font-bold hover:bg-fuchsia-700"
            onClick={() => setShowConfirm(true)}
          >
            Reset Game
          </button>
          {showConfirm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <p className="mb-4 text-lg font-bold text-center">
                  Are you sure you want to reset the game?
                </p>
                <div className="flex gap-4">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded font-bold hover:bg-red-700"
                    onClick={() => {
                      resetAllGames();
                      setShowConfirm(false);
                      if (onClose) onClose();
                    }}
                  >
                    Yes, Reset
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-300 text-black rounded font-bold hover:bg-gray-400"
                    onClick={() => setShowConfirm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      }
    >
      <Tabs defaultValue="About-Meg">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="About-Meg">About Meg</TabsTrigger>
          <TabsTrigger value="how-to-play">How To Play</TabsTrigger>
        </TabsList>
        <TabsContent value="About-Meg">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who is She?</AccordionTrigger>
              <AccordionContent>
                <div className="text-left">
                  <div>1. My super wonderful, smart and beautiful gf</div>
                  <div>2. An insurrerably good NYT game player and enthusiast</div>
                  <div>3. The birthday girl!</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why Did I Put This Together?</AccordionTrigger>
              <AccordionContent>
                <div className="text-left mb-1">
                  <div>1. I'm a Simp </div>
                  <div>2. In the hope I can finally beat Meg in one of the NYT games (even if I created it)</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="how-to-play">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How Do I Play?</AccordionTrigger>
              <AccordionContent>
                <div className="text-left">
                  Game logic is the same as NYT games! Use the info button for
                  further instructions or to come back to homepage. Use the reset
                  button below to fully reset the game if you want to play through
                  again!
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How Many Games Are There?</AccordionTrigger>
              <AccordionContent>
                <div className="text-left">
                  There are 7 Meg-themed wordles and 5 Meg-themed connections games
                  to be played
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