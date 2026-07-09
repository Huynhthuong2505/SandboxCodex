import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Xin chào 👋 Tôi là Sandbox AI.",
    },
  ]);

  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;

    setMessages((m) => [
      ...m,
      {
        role: "user",
        content: text,
      },
      {
        role: "assistant",
        content: "AI chưa được kết nối API.",
      },
    ]);

    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          flex: 1,
          overflow: "auto",
          padding: 10,
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: 10,
              padding: 10,
              borderRadius: 8,
              background:
                m.role === "user"
                  ? "#2563eb"
                  : "#1f2937",
              color: "#fff",
            }}
          >
            <b>{m.role}:</b><br />
            {m.content}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          padding: 8,
          borderTop: "1px solid #333",
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập tin nhắn..."
          style={{
            flex: 1,
            padding: 10,
          }}
        />

        <button
          onClick={send}
          style={{
            marginLeft: 8,
            padding: "0 16px",
          }}
        >
          Gửi
        </button>
      </div>
    </div>
  );
}
