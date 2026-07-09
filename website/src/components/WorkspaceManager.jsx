export function exportWorkspace(files){

  const blob=new Blob(
    [
      JSON.stringify(files,null,2)
    ],
    {
      type:"application/json"
    }
  );

  const url=URL.createObjectURL(blob);

  const a=document.createElement("a");

  a.href=url;
  a.download="sandbox-workspace.json";
  a.click();

  URL.revokeObjectURL(url);
}

export function importWorkspace(setFiles){

  const input=document.createElement("input");

  input.type="file";
  input.accept=".json";

  input.onchange=(e)=>{

    const file=e.target.files[0];

    if(!file) return;

    const reader=new FileReader();

    reader.onload=()=>{

      try{

        setFiles(
          JSON.parse(reader.result)
        );

      }catch{

        alert("Workspace không hợp lệ");

      }

    };

    reader.readAsText(file);

  };

  input.click();
}
