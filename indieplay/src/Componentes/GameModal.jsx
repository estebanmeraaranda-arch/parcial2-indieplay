export default function GameModal({ game, onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Cerrar detalles">
                    ✕
                </button>
                <div className="modal-header">
                    <img src={game.image} alt={game.title} style={{ objectPosition: game.imagePosition }} />
                    <div className={`modal-wash modal-wash--${game.accent}`} />
                    <span className="modal-genre">{game.genre}</span>
                </div>
                <div className="modal-body">
                    <h2>{game.title}</h2>
                    <p className="modal-studio">{game.studio}</p>
                    <p className="modal-description">{game.description}</p>
                </div>
            </div>
        </div>
    );
}
