import "./ResultPanel.css";

function ResultPanel() {
  return (
    <section className="result-panel" aria-label="Merge result">
      <h2>Result</h2>
      <p>Your merged file will appear here when ready.</p>
      <button type="button">Download Merged PDF</button>
    </section>
  );
}

export default ResultPanel;
