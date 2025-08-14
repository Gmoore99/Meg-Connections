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

function InfoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <BaseModal
      title=""
      open={open}
      onClose={onClose}
      showActionButton={true}
      actionButtonText="Got It!"
      actionButtonClassName="px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-400"
      footerElements={
        <button
          className="px-4 py-2 bg-fuchsia-400 text-white rounded font-bold hover:bg-fuchsia-700"
          onClick={() => (window.location.href = "/")}
        >
          Home
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
                <div className="text-left">
                  Find groups of items or names that share something in common.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How Do I Play?</AccordionTrigger>
              <AccordionContent>
                <div className="text-left">
                  Select the items and tap 'Submit' to check if your guess matches
                  one of the answer categories.
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How Many Tries Do I Get?</AccordionTrigger>
              <AccordionContent>
                <div className="text-left">
                  {`You can make ${MAX_MISTAKES} mistakes before the game ends.`}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
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
      </Tabs>
    </BaseModal>
  );
}

export default InfoModal;
