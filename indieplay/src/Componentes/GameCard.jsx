function ArrowIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12m-4.5-4.5L16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function GameCard({ game, index, onClick }) {
    return (
        <article className="game-card" style={{ "--card-index": index }}>
            <div className="game-cover">
                <img src={game.image} alt={`Atmósfera visual de ${game.title}`} style={{ objectPosition: game.imagePosition }} />
                <div className={`cover-wash cover-wash--${game.accent}`} />
                <span className="genre-pill">{game.genre}</span>
                <span className="game-number">0{index + 1}</span>
            </div>
            <div className="game-info">
                <div className="game-meta">
                    <div>
                        <h3>{game.title}</h3>
                        <p>{game.studio}</p>
                    </div>
                    <span className={`status-dot status-dot--${game.accent}`} aria-label="Disponible" />
                </div>
                <button className={`card-action card-action--${game.accent}`} type="button" onClick={onClick}>
                    <span>{game.action}</span>
                    <ArrowIcon />
                </button>
            </div>
        </article>
    );
}