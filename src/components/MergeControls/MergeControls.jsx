import "./MergeControls.css";

function MergeControls() {
  return (
    <section className="merge-controls" aria-label="Merge actions">
      <h2>Merge Controls</h2>
      <div className="merge-controls__actions">
        <button type="button">Merge PDFs</button>
        <button type="button">Clear Files</button>
      </div>
    </section>
  );
}

export default MergeControls;
