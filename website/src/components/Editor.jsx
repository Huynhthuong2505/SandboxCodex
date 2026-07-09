import Editor from "@monaco-editor/react";

export default function CodeEditor({
  language,
  code,
  setCode,
}) {

  const theme =
    localStorage.getItem("editor-theme") ||
    "vs-dark";

  const fontSize =
    Number(
      localStorage.getItem("editor-font-size")
    ) || 15;

  return (
    <Editor
      height="100%"
      language={language}
      value={code}
      theme={theme}
      onChange={(value)=>setCode(value||"")}
      options={{
        automaticLayout:true,
        fontSize,
        minimap:{
          enabled:true,
        },
        wordWrap:"on",
        scrollBeyondLastLine:false,
        smoothScrolling:true,
        cursorBlink:"smooth",
        tabSize:2,
      }}
    />
  );
}
