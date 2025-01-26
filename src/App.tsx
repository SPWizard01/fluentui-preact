import { createRef } from "preact";
import { Checkbox } from "./components/Checkbox";
import { Dialog } from "./components/Dialog";
import { DialogBody } from "./components/DialogBody";
import { ThemeProvider } from "./components/ThemeProvider";
import type { Dialog as FluentDialog } from "@fluentui/web-components";
import { useRef } from "preact/hooks";

export function App() {
  const dref = useRef<FluentDialog>(null);
  return (
    <ThemeProvider>
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
      <Dialog ref={dref} type="modal">
        <DialogBody>
          <div>gtg</div>
        </DialogBody>
      </Dialog>
    </ThemeProvider>
  );
}
