function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-950 py-12 text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">FleetMind AI</h3>
          <p className="mt-3 text-sm text-slate-400">
            End-to-end AI based fleet management platform for complex transport operations.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Contact</h4>
          <p className="mt-3 text-sm text-slate-400">ssairabatool98@gmail.com</p>
          <p className="text-sm text-slate-400">+92 34800000</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Head Office</h4>
          <p className="mt-3 text-sm text-slate-400">
            145 Innovation Drive, Mobility District
            <br />
            Skardu Pakistan
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 w-full max-w-6xl border-t border-slate-800 px-6 pt-5 text-sm text-slate-500">
        &copy; {new Date().getFullYear()} FleetMind AI. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;