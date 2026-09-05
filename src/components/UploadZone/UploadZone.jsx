import "./UploadZone.css";

function UploadZone() {
  return (
    <section className="upload-zone" aria-label="Upload zone">
      <h2>Upload PDFs</h2>
      <div className="upload-zone__drop">
        <p>Drop PDF files here or browse from your device.</p>
        <button type="button">Choose Files</button>
      </div>
    </section>
  );
}

export default UploadZone;
