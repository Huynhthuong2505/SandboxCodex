import { useState } from "react";

export default function Settings(){

  const [theme,setTheme]=useState(
    localStorage.getItem("editor-theme")||"vs-dark"
  );

  const [fontSize,setFontSize]=useState(
    Number(localStorage.getItem("editor-font-size"))||15
  );

  const [autoSave,setAutoSave]=useState(
    localStorage.getItem("editor-autosave")==="true"
  );

  const save=()=>{

    localStorage.setItem(
      "editor-theme",
      theme
    );

    localStorage.setItem(
      "editor-font-size",
      fontSize
    );

    localStorage.setItem(
      "editor-autosave",
      autoSave
    );

    alert("Settings saved");

  };

  return(

    <div
      style={{
        padding:16,
        height:"100%",
        background:"#111827",
        color:"#fff",
      }}
    >

      <h3>⚙ Settings</h3>

      <p>Theme</p>

      <select
        value={theme}
        onChange={(e)=>setTheme(e.target.value)}
      >
        <option value="vs-dark">
          Dark
        </option>

        <option value="light">
          Light
        </option>

        <option value="hc-black">
          High Contrast
        </option>

      </select>

      <p>Font Size</p>

      <input
        type="number"
        value={fontSize}
        min="10"
        max="40"
        onChange={(e)=>setFontSize(Number(e.target.value))}
      />

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
        onClick={save}
      >
        Save Settings
      </button>

    </div>

  );

}
