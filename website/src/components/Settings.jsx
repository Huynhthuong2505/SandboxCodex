import { useEffect, useState } from "react";

export default function Settings({
  visible,
  close,
}){

  const [theme,setTheme]=useState(
    localStorage.getItem("editor-theme")||"vs-dark"
  );

  const [fontSize,setFontSize]=useState(
    Number(localStorage.getItem("editor-font-size")||15)
  );

  const [autoSave,setAutoSave]=useState(
    localStorage.getItem("editor-autosave")==="true"
  );

  useEffect(()=>{
    localStorage.setItem("editor-theme",theme);
  },[theme]);

  useEffect(()=>{
    localStorage.setItem("editor-font-size",fontSize);
  },[fontSize]);

  useEffect(()=>{
    localStorage.setItem("editor-autosave",autoSave);
  },[autoSave]);

  if(!visible) return null;

  return(
    <div
      onClick={close}
      style={{
        position:"fixed",
        inset:0,
        background:"rgba(0,0,0,.45)",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        zIndex:9999,
      }}
    >

      <div
        onClick={(e)=>e.stopPropagation()}
        style={{
          width:"92%",
          maxWidth:420,
          background:"#1f2937",
          color:"#fff",
          borderRadius:10,
          padding:20,
        }}
      >

        <h3>Editor Settings</h3>

        <p>Theme</p>

        <select
          value={theme}
          onChange={(e)=>setTheme(e.target.value)}
        >
          <option value="vs-dark">VS Dark</option>
          <option value="light">Light</option>
          <option value="hc-black">High Contrast</option>
        </select>

        <p>Font Size</p>

        <input
          type="range"
          min="12"
          max="30"
          value={fontSize}
          onChange={(e)=>setFontSize(Number(e.target.value))}
        />

        <div>
          {fontSize}px
        </div>

        <p>
          <label>

            <input
              type="checkbox"
              checked={autoSave}
              onChange={(e)=>setAutoSave(e.target.checked)}
            />

            Auto Save

          </label>
        </p>

        <button
          onClick={close}
        >
          Close
        </button>

      </div>

    </div>
  );

}
