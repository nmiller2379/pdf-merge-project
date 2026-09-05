import "./App.css";
import Header from "./components/Header/Header";
import UploadZone from "./components/UploadZone/UploadZone";
import FileList from "./components/FileList/FileList";
import MergeControls from "./components/MergeControls/MergeControls";
import ResultPanel from "./components/ResultPanel/ResultPanel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main" aria-label="PDF merger workspace">
        <UploadZone />
        <FileList />
        <MergeControls />
        <ResultPanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
