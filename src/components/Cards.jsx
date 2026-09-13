import { useState } from "react";

function Card({ card }) {
  const [votes, setVotes] = useState(card.votes || 0);
  const [voted, setVoted] = useState(false);

  function handleVote() {
    if (voted) {
      setVotes(votes - 1);
    } else {
      setVotes(votes + 1);
    }
    setVoted(!voted);
  }

  return (
    <div className="card-frame bg-white rounded-2xl border border-[#F0E4C8] shadow-[0_2px_10px_rgba(58,46,40,0.06)] overflow-hidden hover:shadow-[0_8px_24px_rgba(58,46,40,0.12)] hover:-translate-y-1 transition-all duration-200 ">
      <div className="card-pic">
        <img className="s-image" src={card.url} alt="Startup Image" />
      </div>
      <div className="card-content p-6 ">
        <span className="card-name text-xl font-bold text-[#3A2E28] mb-2 ">
          {card.Sname}
        </span>
        <div className="team-size text-red-600 text-xs font-semibold">{card.teamsize} members</div>
        <p className="cardinfo text-sm text-[#6B5D52] leading-relaxed mb-5">
          {card.Content}
        </p>
      </div>
      <div className="flex items-center justify-between px-6 pb-6 pt-4 border-t border-[#F0E4C8]">
        <button
          onClick={handleVote}
          className={`flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-full transition-colors ${
            voted
              ? "bg-[#C0392B] text-white"
              : "bg-[#C0392B]/10 hover:bg-[#C0392B] hover:text-white text-[#C0392B]"
          }`}
        >
          ▲{votes} Vote
        </button>
      </div>
    </div>
  );
}

export default Card;