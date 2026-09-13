import { useState } from "react";
import Card from "../components/Cards";
import Category from "../components/Category";
import SubForm from "../components/ideaForm";

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const cardsinfo = [
    {
      id: 1,
      Sname: "EduPath AI",
      category: "EdTech",
      teamsize: 4,
      Content:
        "Adaptive AI engine that generates personalized learning roadmaps for engineering students, reducing course dropout rates by predicting knowledge gaps before exams.",
      url: "https://bridge-u.com/wp-content/uploads/2023/09/education-technology-essential-featured-1.png",
    },
    {
      id: 2,
      Sname: "GreenWallet",
      category: "FinTech",
      teamsize: 5,
      Content:
        "Micro-investment platform allowing students to buy fractional carbon credits and track their environmental impact portfolio in real time via a mobile-first dashboard.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67oTzNFFZr_Nw64hqoT7nKSymf5-o2lPqQuTd4cH5cGn5YfEYWxNWo-g&s=10",
    },
    {
      id: 3,
      Sname: "MindBridge",
      category: "HealthTech",
      teamsize: 5,
      Content:
        "Anonymous peer-support network for college mental health. Matches students with trained volunteer listeners based on conversation mood signals detected by NLP.",
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=340&fit=crop&auto=format",
    },
    {
      id: 4,
      Sname: "LocaleMart",
      category: "E-Commerce",
      teamsize: 4,
      Content:
        "Hyperlocal campus marketplace connecting hostel students with home-cooked meal providers, textbook swaps, and freelance services within a 2 km radius.",
      url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=340&fit=crop&auto=format",
    },
  ];

  const filteredCards = cardsinfo.filter((card) => {
    const matchesCategory =
      activeCategory === "All" || card.category === activeCategory;
    const matchesQuery = card.Sname.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      <div className="Hero-Section relative overflow-hidden bg-[linear-gradient(135deg,_#FFF8E7_0%,_#FDEFD1_100%)] min-h-screen">
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-amber-500 opacity-10 blur-[100px] pointer-events-none"></div>

        <div className="punchline p-10 relative mt-28 text-center">
          <h1 className="font-blode text-8xl text-[#C0392B] font-black">
            The World Needs Your
          </h1>
          <h1 className="font-blode text-9xl text-[#E0A526] font-black">
            IDEAS
          </h1>
          <p className="text-[#3A2E28] text-lg mt-6 max-w-lg mx-auto font-medium">
            Submit your startup, get votes, and pitch live at demo day.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("submit")
                .scrollIntoView({ behavior: "smooth" })
            }
            type="submit"
            className="pitch-button bg-[#C0392B] hover:bg-[#A5321F] hover:-translate-y-0.5 text-white rounded-full font-medium shadow-[0_8px_20px_rgba(192,57,43,0.35)] transition-all duration-200 mt-8 px-8 py-4 inline-flex items-center justify-center"
          >
            Pitch Your Idea
          </button>
        </div>
      </div>

      <Category
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        query={query}
        setQuery={setQuery}
      />

      <p className="text-gray-500 max-w-7xl mx-auto px-8 -mt-4 mb-2">
        {filteredCards.length} idea{filteredCards.length !== 1 ? "s" : ""} found
        · Vote for your favourite
      </p>

      <div
        id="showcase"
        className="startup-cards grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full box-border"
      >
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => <Card card={card} key={card.id} />)
        ) : (
          <p className="col-span-full text-center text-gray-500 py-16">
            No ideas match your search.
          </p>
        )}
      </div>

      <div id="submit">
        <SubForm />
      </div>

      <footer className="border-t py-8 text-center text-red-300 mt-5">
        IEDC Innovation Hub · Innovation & Entrepreneurship Development Cell ·
      </footer>
    </>
  );
}

export default Home;
