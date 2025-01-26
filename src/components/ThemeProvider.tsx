import { setTheme, type Theme } from "@fluentui/web-components";
import { createRef, type ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";
import { webLightTheme } from "@fluentui/tokens";
export interface ThemeProviderProps {
  theme?: Theme;
  children: ComponentChildren;
}
export function ThemeProvider(props: ThemeProviderProps) {
  const divRef = createRef<HTMLDivElement>();
  useEffect(() => {
    const theme = props.theme || webLightTheme;
    if (divRef.current) {
       setTheme(theme, divRef.current);
    }
  }, []);
  return <div ref={divRef}>{props.children}</div>;
}
