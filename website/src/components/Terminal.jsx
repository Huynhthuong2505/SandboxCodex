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
        theme: {
          background: "#111827",
          foreground: "#f8fafc",
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

        term.writeln("✅ WebContainer Ready");
        term.writeln("$ node -v");

        const proc = await wc.spawn("node", ["-v"]);

        proc.output.pipeTo(
          new WritableStream({
            write(data) {
              term.write(data);
            },
          })
        );
      } catch (e) {
        term.writeln("");
        term.writeln("❌ " + e.message);
      }
    }

    boot();

    return () => {
      if (term) term.dispose();
    };
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
