export default function Sidebar({
  files,
  current,
  setCurrent,
  createFile,
  renameFile,
  deleteFile,
}) {
  return (
    <aside
      style={{
        height: "100%",
        background: "#111827",
        color: "#fff",
        padding: 10,
        overflow: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 12,
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
            background:
              current === name
                ? "#374151"
                : "transparent",
            borderRadius: 6,
            marginBottom: 6,
            padding: 8,
          }}
        >
          <div
            onClick={() => setCurrent(name)}
            style={{
              cursor: "pointer",
              marginBottom: 6,
            }}
          >
            📄 {name}
          </div>

          <div
            style={{
              display: "flex",
              gap: 6,
            }}
          >
            <button
              style={{ flex: 1 }}
              onClick={() => renameFile(name)}
            >
              ✏
            </button>

            <button
              style={{ flex: 1 }}
              onClick={() => deleteFile(name)}
            >
              🗑
            </button>
          </div>
        </div>
      ))}
    </aside>
  );
}
