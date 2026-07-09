import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import Terminal from "../components/Terminal";
import AIChat from "../components/AIChat";

const DEFAULT_FILES = {
  "index.html": "<h1>Hello Sandbox CodeX</h1>",
  "style.css": "body{background:#111;color:#fff;font-family:sans-serif}",
  "script.js": "console.log('Sandbox CodeX');",
};

export default function IDE() {
  const [drawer, setDrawer] = useState(false);
  const [tab, setTab] = useState("preview");
  const [current, setCurrent] = useState("index.html");

  const [files, setFiles] = useState(() => {
    const data = localStorage.getItem("sandbox-workspace");
    return data ? JSON.parse(data) : DEFAULT_FILES;
  });

  useEffect(() => {
    localStorage.setItem(
      "sandbox-workspace",
      JSON.stringify(files)
    );
  }, [files]);

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

  const preview = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>${files["style.css"] || ""}</style>
</head>
<body>
${files["index.html"] || ""}
<script>${files["script.js"] || ""}</script>
</body>
</html>`;
  
  return (
    <div>...</div>
  );
}
