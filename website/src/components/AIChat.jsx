import { useState } from "react";

export default function AIChat(){

  const [messages,setMessages]=useState([
    {
      role:"assistant",
      text:"Xin chào! Tôi là Sandbox AI.",
    },
  ]);

  const [input,setInput]=useState("");

  const send=()=>{

    if(!input.trim()) return;

    const user=input;

    setMessages(v=>[
      ...v,
      {
        role:"user",
        text:user,
      },
      {
        role:"assistant",
        text:"Đã nhận yêu cầu: "+user,
      },
    ]);

    setInput("");

  };

  return(

    <div
      style={{
        height:"100%",
        display:"flex",
        flexDirection:"column",
        background:"#111827",
        color:"#fff",
      }}
    >

      <div
        style={{
          flex:1,
          overflowY:"auto",
          padding:12,
        }}
      >

        {messages.map((m,i)=>(

          <div
            key={i}
            style={{
              marginBottom:12,
              textAlign:
                m.role==="user"
                  ?"right"
                  :"left",
            }}
          >

            <div
              style={{
                display:"inline-block",
                padding:"10px 14px",
                borderRadius:8,
                background:
                  m.role==="user"
                  ?"#2563eb"
                  :"#1f2937",
              }}
            >
              {m.text}
            </div>

          </div>

        ))}

      </div>

      <div
        style={{
          display:"flex",
          borderTop:"1px solid #374151",
        }}
      >

        <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              send();
            }
          }}
          placeholder="Ask AI..."
          style={{
            flex:1,
            padding:12,
            border:"none",
            outline:"none",
            background:"#0f172a",
            color:"#fff",
          }}
        />

        <button
          onClick={send}
          style={{
            padding:"0 20px",
          }}
        >
          Send
        </button>

      </div>

    </div>

  );

}
