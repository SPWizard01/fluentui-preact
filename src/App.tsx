import { Checkbox } from "./components/Checkbox";
import { Dialog, type DialogElement } from "./components/Dialog";
import { DialogBody } from "./components/DialogBody";
import { ThemeProvider } from "./components/ThemeProvider";
import { useRef } from "preact/hooks";
import { teamsLightTheme } from "@fluentui/tokens";
import { Accordion } from "./components/Accordion";
import { AccordionItem } from "./components/AccordionItem";
import { TextArea, type TextAreaElement } from "./components/TextArea";
import { ToggleButton } from "./components/ToggleButton";
import { Avatar } from "./components/Avatar";
import { AnchorButton } from "./components/AnchorButton";
import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { CompoundButton } from "./components/CompoundButton";

export function App() {
  const dref = useRef<DialogElement>(null);
  const dd = useRef<TextAreaElement>(null);
  return (
    <ThemeProvider theme={teamsLightTheme}>
      <Accordion expand-mode="single">
        <AccordionItem size="extra-large" disabled={true}>
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
