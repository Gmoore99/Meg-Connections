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
        <button className="bg-purple-200 text-black w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
          <HelpCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      }
      initiallyOpen={false}
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
              <AccordionTrigger>What Do The Colors Mean?</AccordionTrigger>
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
                <div>
                  <div>1. My super wonderful, smart and beautiful gf</div>
                  <div>2. An insurrerably good NYT game player and enthusiast</div>
                  <div>3. The birthday girl!</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why Did I Put This Together?</AccordionTrigger>
              <AccordionContent>
                <div className="mb-1">
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

export default WordleInfoModal;