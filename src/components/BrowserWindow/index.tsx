import browserToolbar from "./assets/browser-toolbar.svg";
import page from "./assets/page.svg";

const BrowserWindow = () => {
  return (
    <section className="-mt-[5rem] bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto z-10 relative shadow-2xl rounded overflow-hidden">
        <img src={browserToolbar} alt="toolbar" />
        <img src={page} alt="page" />
      </div>
    </section>
  );
};

export default BrowserWindow;
