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
        width: 220,
        height: "100%",
        background: "#111827",
        color: "#fff",
        overflowY: "auto",
        borderRight: "1px solid #222",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
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
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 10px",
            background:
              current === name
                ? "#374151"
                : "transparent",
          }}
        >
          <span
            style={{
              cursor: "pointer",
              flex: 1,
            }}
            onClick={() => setCurrent(name)}
          >
            📄 {name}
          </span>

          <button
            onClick={() => deleteFile(name)}
          >
            🗑
          </button>
        </div>
      ))}
    </aside>
  );
}
