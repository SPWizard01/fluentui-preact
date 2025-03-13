import React from "preact";
import { Checkbox } from "../src/components/Checkbox";
import { Dialog, type DialogElement } from "../src/components/Dialog";
import { DialogBody } from "../src/components/DialogBody";
import { ThemeProvider } from "../src/components/ThemeProvider";
import { useRef } from "preact/hooks";
import { teamsLightTheme } from "@fluentui/tokens";
import { Accordion } from "../src/components/Accordion";
import { AccordionItem } from "../src/components/AccordionItem";
import { TextArea, type TextAreaElement } from "../src/components/TextArea";
import { ToggleButton } from "../src/components/ToggleButton";
import { Avatar } from "../src/components/Avatar";
import { AnchorButton } from "../src/components/AnchorButton";
import { Badge } from "../src/components/Badge";
import { Button } from "../src/components/Button";
import { CompoundButton } from "../src/components/CompoundButton";
export function App() {
  const dref = useRef<DialogElement>(null);
  const dd = useRef<TextAreaElement>(null);
  return (
    <ThemeProvider theme={teamsLightTheme}>
      <Accordion expandmode="single">
        <AccordionItem size="extra-large">
          <div slot="heading">Heading</div>
          <div>Content</div>
        </AccordionItem>
        <AccordionItem>
          <div slot="heading">Heading2</div>
          <div>Content</div>
        </AccordionItem>
      </Accordion>
      <br />
      <AnchorButton appearance="primary">AnchorButton</AnchorButton>
      <br />
      <br />
      <br />
      <Avatar active="active" />
      <br />
      <br />
      <Badge appearance="tint" />
      <br />
      <Button appearance="outline">Outline</Button>
      <br />
      <br />
      Checkbox
      <Checkbox
        onclick={() => {
          console.log(dd.current?.displayShadow);
        }}
      />
      <br />
      <br />
      <CompoundButton appearance="subtle">CompoundButton</CompoundButton>
      <br />
      <TextArea maxLength={10} dirName="" displayShadow={true} ref={dd} />
      <br />
      <ToggleButton
        onclick={(e) => {
          if (dref.current) {
            dref.current.show();
          }
        }}
      >
        Show Dialog
      </ToggleButton>
      <br />

      <Dialog ref={dref} type="modal">
        <DialogBody>
          <div>asd</div>
        </DialogBody>
      </Dialog>
    </ThemeProvider>
  );
}
