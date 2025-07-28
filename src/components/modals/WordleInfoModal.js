import React from "react";
import { HelpCircle } from "lucide-react";
import BaseModal from "../modals/BaseModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function WordleInfoModal() {
  return (
    <BaseModal
      title=""
      trigger={
        <button className="bg-purple-200 text-black w-12 h-12 flex items-center justify-center rounded-full">
          <HelpCircle className="w-7 h-7" />
        </button>
      }
      initiallyOpen={false}
      actionButtonText="Got It!"
    >
      <Tabs defaultValue="how-to-play">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="how-to-play">How To Play</TabsTrigger>
          <TabsTrigger value="about-meg">About Meg</TabsTrigger>
        </TabsList>
        <TabsContent value="how-to-play">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What's The Goal?</AccordionTrigger>
              <AccordionContent>
                Guess the secret Meg-themed five letter word in six tries or less!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How Do I Play?</AccordionTrigger>
              <AccordionContent>
                Enter a valid five letter word and press Enter. The color of the tiles will change to show how close your guess was to the word.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What do the colors mean?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-4">
                  <li><span className="font-bold text-green-600">Green</span>: Correct letter in the correct spot.</li>
                  <li><span className="font-bold text-yellow-500">Yellow</span>: Correct letter in the wrong spot.</li>
                  <li><span className="font-bold text-gray-600">Gray</span>: Letter is not in the word.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="about-meg">
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
                  andcomputers.io
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why did I put this together?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-1">Because I'm a Simp</p>
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
    </BaseModal>
  );
}

export default WordleInfoModal;