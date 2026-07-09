import { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Xin chào 👋 Tôi là Sandbox AI.",
    },
  ]);

  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;

    setMessages((m) => [
      ...m,
      {
        role: "user",
        text: input,
      },
      {
        role: "assistant",
        text: "AI chưa được kết nối API.",
      },
    ]);

    setInput("");
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
              textAlign:
                m.role === "user"
                  ? "right"
                  : "left",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: 10,
                borderRadius: 8,
                background:
                  m.role === "user"
                    ? "#2563eb"
                    : "#1f2937",
                color: "#fff",
                maxWidth: "90%",
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          borderTop: "1px solid #333",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập câu hỏi..."
          style={{
            flex: 1,
            padding: 12,
            border: "none",
            outline: "none",
          }}
        />

        <button
          onClick={send}
          style={{
            width: 70,
          }}
        >
          Gửi
        </button>
      </div>
    </div>
  );
}
