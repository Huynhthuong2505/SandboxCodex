import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import Terminal from "../components/Terminal";
import AIChat from "../components/AIChat";

export default function IDE() {
  const [drawer, setDrawer] = useState(false);
  const [tab, setTab] = useState("preview");
  const [current, setCurrent] = useState("index.html");

  const [files, setFiles] = useState({
    "index.html": "<h1>Hello Sandbox CodeX</h1>",
    "style.css": "body{background:#111;color:#fff;font-family:sans-serif}",
    "script.js": "console.log('Sandbox CodeX');",
  });

  const createFile = () => {
    const name = prompt("Tên file");
    if (!name || files[name]) return;

    setFiles({
      ...files,
      [name]: "",
    });

    setCurrent(name);
    setDrawer(false);
  };

  const deleteFile = (name) => {
    if (!confirm("Xóa " + name + " ?")) return;

    const next = { ...files };
    delete next[name];

    setFiles(next);

    const remain = Object.keys(next);
    if (remain.length) setCurrent(remain[0]);
  };

  const preview = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
${files["style.css"] || ""}
</style>
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
          justifyContent: "space-between",
          alignItems: "center",
          background: "#111827",
          color: "#fff",
          padding: "0 10px",
        }}
      >
        <button onClick={() => setDrawer(!drawer)}>☰</button>

        <b>Sandbox CodeX</b>

        <button onClick={() => setTab("preview")}>▶</button>
      </header>

      {drawer && (
        <div
          style={{
            position: "fixed",
            top: 50,
            left: 0,
            width: 240,
            bottom: 0,
            zIndex: 99,
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
            deleteFile={deleteFile}
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

      <div
        style={{
          display: "flex",
          background: "#111827",
        }}
      >
        <button style={{ flex: 1 }} onClick={() => setTab("explorer")}>📁</button>
        <button style={{ flex: 1 }} onClick={() => setTab("terminal")}>🖥️</button>
        <button style={{ flex: 1 }} onClick={() => setTab("preview")}>🌐</button>
        <button style={{ flex: 1 }} onClick={() => setTab("ai")}>🤖</button>
      </div>

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
            deleteFile={deleteFile}
          />
        )}

        {tab === "ai" && <AIChat />}
      </div>
    </div>
  );
}
