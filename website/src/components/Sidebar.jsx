export default function Sidebar({
  files,
  current,
  setCurrent,
  createFile,
  deleteFile,
  renameFile,
}) {
  return (
    <aside
      style={{
        height: "100%",
        background: "#111827",
        color: "#fff",
        overflow: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          borderBottom: "1px solid #333",
        }}
      >
        <b>EXPLORER</b>

        <button onClick={createFile}>+</button>
      </div>

      {Object.keys(files).map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: 8,
            background:
              current === name
                ? "#374151"
                : "transparent",
          }}
        >
          <span
            style={{
              flex: 1,
              cursor: "pointer",
            }}
            onClick={() => setCurrent(name)}
          >
            📄 {name}
          </span>

          <button
            onClick={() => renameFile(name)}
            title="Rename"
          >
            ✏️
          </button>

          <button
            onClick={() => deleteFile(name)}
            title="Delete"
          >
            🗑️
          </button>
        </div>
      ))}
    </aside>
  );
}
