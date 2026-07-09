import { useEffect, useRef } from "react";

export default function Preview({ html }) {
  const frame = useRef(null);

  useEffect(() => {
    if (!frame.current) return;

    const doc = frame.current.contentWindow.document;

    doc.open();
    doc.write(html);
    doc.close();
  }, [html]);

  return (
    <iframe
      ref={frame}
      title="preview"
      sandbox="allow-scripts allow-modals"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        background: "#fff",
      }}
    />
  );
}
