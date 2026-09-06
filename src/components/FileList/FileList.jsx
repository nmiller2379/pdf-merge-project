import "./FileList.css";

function FileList() {
  return (
    <section className="file-list" aria-label="Selected files">
      <h2>Selected Files</h2>
      <ul>
        <li>No files selected yet.</li>
      </ul>
    </section>
  );
}

export default FileList;
