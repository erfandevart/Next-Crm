import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Devfusion CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://devfusion.ir" target="_blank" rel="noreferrer">
          Devfusion
        </a>
        <span></span> Next.js course | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
