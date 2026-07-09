export default function TopBar({
  run,
  save,
  download,
  openExplorer,
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
        padding: "0 8px",
        borderBottom: "1px solid #222",
      }}
    >
      <button onClick={openExplorer}>
        ☰
      </button>

      <b>Sandbox CodeX</b>

      <div
        style={{
          display: "flex",
          gap: 6,
        }}
      >
        <button onClick={run}>
          ▶
        </button>

        <button onClick={save}>
          💾
        </button>

        <button onClick={download}>
          ⬇
        </button>
      </div>
    </header>
  );
}
