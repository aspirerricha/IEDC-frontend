import iedcimage from "../assets/iedcimage.png";

function NavBar() {
  return (
    <div className="navbar bg-[#FFEFC0] border-b-2 border-[#C0392B]/20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <div className="w-50 flex justify-center items-center ">
        <img
          src={iedcimage}
          alt="iedc image"
          className="w-4xl h-12 object-contain"
        />
      </div>
      <div className="other-text hidden md:flex items-center gap-8 text-sm font-medium">
        <a
          href="#showcase"
          className="text-[#3A2E28] font-medium hover:text-[#C0392B] transition-colors"
        >
          Startups
        </a>
        <a
          href="#submit"
          className="text-[#3A2E28] font-medium hover:text-[#C0392B] transition-colors"
        >
          Submit
        </a>
        <button
          onClick={() =>
            document
              .getElementById("submit")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="bg-[#C0392B] hover:bg-[#A5321F] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
        >
          Pitch Now
        </button>
      </div>
    </div>
  );
}
export default NavBar;
