export default function Button({ children, href, download, className = "" }) {
  return (
    <a
      href={href}
      download={download}
      className={`inline-flex items-center justify-center rounded-sm bg-btn px-5 py-3 font-semibold text-btn-text transition-all duration-300 ease-in-out hover:border-1 hover:translate-x-1 hover:bg-btn-hover ${className}`}>
      {children}
    </a>
  );
}
