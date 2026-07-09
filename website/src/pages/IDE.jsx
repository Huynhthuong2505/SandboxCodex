import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import Terminal from "../components/Terminal";

export default function IDE() {
  const [drawer, setDrawer] = useState(false);
  const [tab, setTab] = useState("preview");
  const [current, setCurrent] = useState("index.html");

  const [files, setFiles] = useState({
    "index.html": "<h1>Hello Sandbox CodeX</h1>",
    "style.css": "body{background:#111;color:#fff}",
    "script.js": "console.log('Sandbox CodeX');",
  });

  const createFile = () => {
    const name = prompt("File name");

    if (!name || files[name]) return;

    setFiles({
      ...files,
      [name]: "",
    });

    setCurrent(name);
    setDrawer(false);
  };

  const preview = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>${files["style.css"] || ""}</style>
</head>
<body>
${files["index.html"] || ""}
<script>
${files["script.js"] || ""}
</script>
</body>
</html>
`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "#0f172a",
      }}
    >
      <header
        style={{
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 12px",
          background: "#111827",
          color: "#fff",
        }}
      >
        <button onClick={() => setDrawer(!drawer)}>☰</button>

        <b>Sandbox CodeX</b>

        <button>▶</button>
      </header>

      {drawer && (
        <div
          style={{
            position: "fixed",
            top: 50,
            left: 0,
            bottom: 0,
            width: 240,
            zIndex: 999,
            background: "#111827",
          }}
        >
          <Sidebar
            files={files}
            current={current}
            setCurrent={(v) => {
              setCurrent(v);
              setDrawer(false);
            }}
            createFile={createFile}
          />
        </div>
      )}

      <div style={{ flex: 1 }}>
        <Editor
          language={
            current.endsWith(".css")
              ? "css"
              : current.endsWith(".js")
              ? "javascript"
              : "html"
          }
          code={files[current]}
          setCode={(value) =>
            setFiles({
              ...files,
              [current]: value,
            })
          }
        />
      </div>

      <nav
        style={{
          display: "flex",
          background: "#111827",
          borderTop: "1px solid #222",
        }}
      >
        <button style={{ flex: 1 }} onClick={() => setTab("explorer")}>
          📁
        </button>

        <button style={{ flex: 1 }} onClick={() => setTab("terminal")}>
          🖥️
        </button>

        <button style={{ flex: 1 }} onClick={() => setTab("preview")}>
          🌐
        </button>

        <button style={{ flex: 1 }} onClick={() => setTab("ai")}>
          🤖
        </button>
      </nav>

      <div
        style={{
          height: "35%",
          borderTop: "1px solid #222",
        }}
      >
        {tab === "preview" && <Preview html={preview} />}

        {tab === "terminal" && <Terminal />}

        {tab === "explorer" && (
          <Sidebar
            files={files}
            current={current}
            setCurrent={setCurrent}
            createFile={createFile}
          />
        )}

        {tab === "ai" && (
          <div
            style={{
              color: "#fff",
              padding: 20,
            }}
          >
            🤖 AI Chat (Coming Soon)
          </div>
        )}
      </div>
    </div>
  );
}
