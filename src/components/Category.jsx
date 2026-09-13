function Category({ activeCategory, setActiveCategory, query, setQuery }) {
  function showcategory(cat) {
    setActiveCategory(cat);
  }

  function FormFunction(e) {
    e.preventDefault();
  }

  const categories = [
    "All",
    "EdTech",
    "FinTech",
    "AI",
    "HealthTech",
    "AgriTech",
    "E-Commerce",
  ];

  return (
    <div className="Category mt-24">
      <div className="Form-search max-w-7xl mx-auto flex flex-col px-8">
        <h2 className="text-4xl font-black text-gray-900 mb-3">
          Startup Showcase
        </h2>

        <form
          onSubmit={FormFunction}
          className="searchstartup flex flex-wrap items-center gap-3 box-border mb-8"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search startups...."
            className="inputstartup flex-1 min-w-[260px] max-w-xl pl-10 pr-4 py-3 rounded-xl text-sm outline-none border text-gray-800 bg-red-50 border-red-200"
          />

          <button
            type="submit"
            className="search-button py-3 px-6 bg-[#e50914] text-white rounded font-medium"
          >
            Search
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => showcategory(cat)}
              className={`text-base font-semibold px-3 py-3 rounded-xl border ${
                activeCategory === cat
                  ? "bg-[#e50914] text-white border-[#e50914]"
                  : "text-gray-500 bg-red-50 border-red-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Category;