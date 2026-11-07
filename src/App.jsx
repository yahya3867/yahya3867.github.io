import "./App.css";
import Intro from "./About";
import Publications from "./Publications";
import Projects from "./Projects";
import Awards from "./Awards";
import News from "./News";
import BrandMark from "./BrandMark";
import Concepts from "./Concepts";

const pages = {
 concepts: { title: "Interactive concepts", Component: Concepts },
 publications: { title: "Publications", Component: Publications },
 projects: { title: "Projects", Component: Projects },
 awards: { title: "Awards", Component: Awards },
 recent: { title: "Recent", Component: News },
 contact: { title: "Get in touch", Component: Contact },
};

function Contact() {
 return (
  <section className="block" id="contact">
   <h1 className="block-title">Get in touch</h1>
   <p>You can find me here:</p>
   <nav className="contact contact-page" aria-label="Get in touch links">
    <a href="mailto:yahya.masri@yahoo.com">Email</a>
    <a href="https://github.com/yahya3867" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://www.linkedin.com/in/yahya-masri/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://scholar.google.com/citations?user=9H1ryOAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
    <a href="/Yahya_Masri_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
   </nav>
  </section>
 );
}

const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
const page = Object.hasOwn(pages, path) ? pages[path] : null;
const isHome = path === "" || path === "index.html";
document.title = isHome ? "Yahya Masri" : `${page?.title || "Page not found"} | Yahya Masri`;

export default function App() {
 const Content = page?.Component;
 return (
  <>
   <a href="#main" className="skip-link">Skip to content</a>
   <main className={`page ${isHome ? "home-page" : "detail-page"}`} id="main" tabIndex={-1}>
    {isHome ? <Intro /> : <>
     <a className="home-link" href="/"><BrandMark />Yahya Masri</a>
     {Content ? <Content heading="h1" /> : <section className="block"><h1 className="block-title">Page not found</h1><p>That page doesn't exist. <a href="/">Back to the homepage.</a></p></section>}
    </>}
    <p className="colophon">&copy; {new Date().getFullYear()} Yahya Masri</p>
   </main>
  </>
 );
}
