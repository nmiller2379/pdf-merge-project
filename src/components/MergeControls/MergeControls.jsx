import "./MergeControls.css";

function MergeControls() {
  return (
    <section className="merge-controls" aria-label="Merge actions">
      <h2>Merge Controls</h2>
      <div className="merge-controls__actions">
        <button
          type="button"
          className="merge-controls__button merge-controls__button--primary"
        >
          Merge PDFs
        </button>
        <button
          type="button"
          className="merge-controls__button merge-controls__button--secondary"
        >
          Clear Files
        </button>
      </div>
    </section>
  );
}

export default MergeControls;
