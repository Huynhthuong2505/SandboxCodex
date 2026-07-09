import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { WebContainer } from "@webcontainer/api";
import "xterm/css/xterm.css";

export default function AppTerminal() {
  const ref = useRef(null);

  useEffect(() => {
    let term;

    async function boot() {
      term = new Terminal({
        cursorBlink: true,
        convertEol: true,
        theme: {
          background: "#111827",
          foreground: "#ffffff",
        },
      });

      const fit = new FitAddon();
      term.loadAddon(fit);

      term.open(ref.current);
      fit.fit();

      term.writeln("🚀 Booting Sandbox CodeX...");
      term.writeln("");

      try {
        const wc = await WebContainer.boot();

        await wc.mount({
          "index.html": {
            file: {
              contents: "<h1>Hello Sandbox CodeX</h1>",
            },
          },
          "style.css": {
            file: {
              contents: "body{font-family:Arial}",
            },
          },
          "script.js": {
            file: {
              contents: "console.log('Sandbox CodeX');",
            },
          },
        });

        term.writeln("✅ Project mounted");
        term.writeln("$ ls");

        const proc = await wc.spawn("ls");

        proc.output.pipeTo(
          new WritableStream({
            write(data) {
              term.write(data);
            },
          })
        );
      } catch (err) {
        term.writeln("");
        term.writeln(String(err));
      }
    }

    boot();

    return () => term?.dispose();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
