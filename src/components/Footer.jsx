export default function Footer() {
  return (
    <footer className='py-8 glass-header border-t border-slate-800 text-center text-slate-400 text-sm'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4'>
        <p className='font-outfit font-bold text-white tracking-wide'>
          Kamalesh S<span className='text-accent-main'> - Portfolio</span>
        </p>
        <p className='text-xs text-accent'>
          &copy; {new Date().getFullYear()} Kamalesh S. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
