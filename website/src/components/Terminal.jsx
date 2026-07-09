import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

export default function AppTerminal() {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      convertEol: true,
      theme: {
        background: "#111827",
        foreground: "#f8fafc",
      },
    });

    const fitAddon = new FitAddon();

    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();

    term.writeln("Sandbox CodeX Terminal");
    term.writeln("Type 'help' to begin.");
    term.write("$ ");

    let command = "";

    term.onData((data) => {
      if (data === "\r") {
        term.writeln("");

        switch (command.trim()) {
          case "help":
            term.writeln("Commands:");
            term.writeln(" help");
            term.writeln(" clear");
            term.writeln(" version");
            break;

          case "clear":
            term.clear();
            break;

          case "version":
            term.writeln("Sandbox CodeX v1.0");
            break;

          case "":
            break;

          default:
            term.writeln("Command not found: " + command);
        }

        command = "";
        term.write("$ ");
      } else if (data === "\u007F") {
        if (command.length > 0) {
          command = command.slice(0, -1);
          term.write("\b \b");
        }
      } else {
        command += data;
        term.write(data);
      }
    });

    window.addEventListener("resize", () => fitAddon.fit());

    return () => term.dispose();
  }, []);

  return (
    <div
      ref={terminalRef}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  );
}
