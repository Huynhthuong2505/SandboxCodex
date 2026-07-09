export default function Sidebar({
  files,
  current,
  setCurrent,
  createFile,
  deleteFile,
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

        <button onClick={createFile}>
          +
        </button>
      </div>

      {Object.keys(files).map((name) => (
        <div
          key={name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 10px",
            cursor: "pointer",
            background:
              current === name
                ? "#374151"
                : "transparent",
          }}
        >
          <span
            style={{ flex: 1 }}
            onClick={() => setCurrent(name)}
          >
            📄 {name}
          </span>

          <button
            onClick={() => deleteFile(name)}
            style={{
              marginLeft: 8,
            }}
          >
            🗑
          </button>
        </div>
      ))}
    </aside>
  );
}
