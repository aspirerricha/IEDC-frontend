function SubForm() {
  function Submitform(e) {
    e.preventDefault();
    alert("Submitted form successfully");
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm outline-none border text-[#3A2E28] bg-red-50 border-[#F0E4C8] focus:border-[#C0392B] transition-colors";

  return (
    <div className="idea-form mt-24 px-6">
      <h1 className="font-extrabold text-5xl text-center mb-10">Pitch Your Idea</h1>
      <p className="text-base text-gray-500 text-center pb-5">Got a startup idea? Fill out the form below and join the IEDC showcase.</p>

      <form
        onSubmit={Submitform}
        className="idea-sub max-w-xl mx-auto flex flex-col gap-5 px-8 py-8 rounded-2xl border  border-[#e0a142] bg-white shadow-[0_2px_10px_rgba(58,46,40,0.06)]"
      >
        <div className="flex flex-col gap-1.5">
          <label className="font-bold text-xs text-gray-600 uppercase tracking-wide">Founder Name</label>
          <input type="text" placeholder="e.g. Priya Krishnan" className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-bold text-xs text-gray-600 uppercase tracking-wide">Startup Title</label>
          <input type="text" placeholder="e.g. EduPath AI" className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-bold text-xs text-gray-600 uppercase tracking-wide">Category</label>
          <select className={inputClass}>
            <option value="">Choose a category</option>
            <option>EdTech</option>
            <option>FinTech</option>
            <option>AI</option>
            <option>HealthTech</option>
            <option>AgriTech</option>
            <option>E-Commerce</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-bold text-xs text-gray-600 uppercase tracking-wide">Pitch Deck Link</label>
          <input type="text" placeholder="https://drive.google.com/..." className={inputClass} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-bold text-xs text-gray-600 uppercase tracking-wide">Summary</label>
          <textarea rows={4} placeholder="What does it do, and who is it for?" className={inputClass} />
        </div>

        <button
          type="submit"
          className="mt-2 py-3 px-6 bg-[#C0392B] hover:bg-[#A5321F] text-white rounded-full font-semibold transition-colors"
        >
          Submit Pitch
        </button>
      </form>
    </div>
  );
}

export default SubForm;