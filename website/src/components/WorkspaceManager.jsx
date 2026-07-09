import { useState } from "react";

export default function WorkspaceManager({
  files,
  setFiles,
}) {

  const [name, setName] = useState("");

  const workspaces = JSON.parse(
    localStorage.getItem("workspaces") || "{}"
  );

  const saveWorkspace = () => {

    if (!name.trim()) return;

    const next = {
      ...workspaces,
      [name]: files,
    };

    localStorage.setItem(
      "workspaces",
      JSON.stringify(next)
    );

    alert("Workspace saved.");

  };

  const loadWorkspace = (workspace) => {

    setFiles(workspaces[workspace]);

  };

  const removeWorkspace = (workspace) => {

    delete workspaces[workspace];

    localStorage.setItem(
      "workspaces",
      JSON.stringify(workspaces)
    );

    location.reload();

  };

  return (

    <div
      style={{
        height: "100%",
        background: "#111827",
        color: "#fff",
        padding: 12,
      }}
    >

      <h3>📂 Workspace Manager</h3>

      <input
        placeholder="Workspace name..."
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <button
        onClick={saveWorkspace}
        style={{
          marginLeft:10,
        }}
      >
        Save
      </button>

      <hr/>

      {

        Object.keys(workspaces).map((item)=>(

          <div
            key={item}
            style={{
              display:"flex",
              justifyContent:"space-between",
              marginBottom:8,
            }}
          >

            <span>{item}</span>

            <div>

              <button
                onClick={()=>loadWorkspace(item)}
              >
                Open
              </button>

              <button
                onClick={()=>removeWorkspace(item)}
                style={{
                  marginLeft:6,
                }}
              >
                Delete
              </button>

            </div>

          </div>

        ))

      }

    </div>

  );

}
