export default function TopBar({
  createFile,
  saveWorkspace,
  runPreview,
}) {
  return (
    <header
      style={{
        height: 50,
        background: "#111827",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10px",
        borderBottom: "1px solid #222",
      }}
    >
      <b>Sandbox CodeX</b>

      <div
        style={{
          display: "flex",
          gap: 8,
        }}
      >
        <button onClick={createFile}>
          📄
        </button>

        <button onClick={saveWorkspace}>
          💾
        </button>

        <button onClick={runPreview}>
          ▶
        </button>
      </div>
    </header>
  );
}
