export default function EditorTabs({
  files,
  current,
  setCurrent,
}) {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        background: "#1f2937",
        borderBottom: "1px solid #333",
        whiteSpace: "nowrap",
      }}
    >
      {Object.keys(files).map((name) => (
        <button
          key={name}
          onClick={() => setCurrent(name)}
          style={{
            padding: "10px 16px",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            background:
              current === name
                ? "#374151"
                : "transparent",
            borderBottom:
              current === name
                ? "2px solid #3b82f6"
                : "2px solid transparent",
          }}
        >
          📄 {name}
        </button>
      ))}
    </div>
  );
}
