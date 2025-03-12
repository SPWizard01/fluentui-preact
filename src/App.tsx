import { createRef } from "preact";
import { Checkbox } from "./components/Checkbox";
import { Dialog } from "./components/Dialog";
import { DialogBody } from "./components/DialogBody";
import { ThemeProvider } from "./components/ThemeProvider";
import type { Dialog as FluentDialog } from "@fluentui/web-components";
import { useRef } from "preact/hooks";
import { Button } from "./components/Button";
import { webLightTheme, webDarkTheme, teamsLightTheme } from "@fluentui/tokens";
import { Accordion } from "./components/Accordion";
import { AccordionItem } from "./components/AccordionItem";

export function App() {
  const dref = useRef<FluentDialog>(null);
  return (
    <ThemeProvider theme={teamsLightTheme}>
      <Checkbox
        onClick={() => {
          if (dref.current) {
            dref.current.show();
            console.log(dref);
          }
        }}
      >
        Click me
      </Checkbox>
      <Accordion expand-mode="single">
        <AccordionItem size="small" disabled={true}>
          <div slot="heading">Heading</div>
          <div>Content</div>
        </AccordionItem>
        <AccordionItem>
          <div slot="heading">Heading2</div>
          <div>Content</div>
        </AccordionItem>
      </Accordion>
      <Dialog ref={dref} type="modal">
        <DialogBody>
          <div>gtg</div>
        </DialogBody>
      </Dialog>
    </ThemeProvider>
  );
}
