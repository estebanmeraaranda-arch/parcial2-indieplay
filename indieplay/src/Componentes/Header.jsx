function GamepadLogo() {
    return (
        <div className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 28 28" fill="none">
                <path d="M8.1 8.2h11.8c3.5 0 5.9 3.2 5.1 6.6l-1.1 4.6c-.5 2.3-3.4 3-5 1.3l-1.8-2h-6.2l-1.8 2c-1.6 1.7-4.5 1-5-1.3L3 14.8c-.8-3.4 1.6-6.6 5.1-6.6Z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8.5 11.5v4m-2-2h4m8.6-.8h.1m2.4 2.1h.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        </div>
    );
}

export default function Header() {
    return (
        <header className="topbar">
            <div className="brand">
                <GamepadLogo />
                <div className="brand-copy">
                    <span className="brand-name">IndiePlay</span>
                    <span className="brand-divider" />
                    <span className="brand-section">Catálogo</span>
                </div>
            </div>
            <button className="login-button" type="button">
                <span className="login-indicator" />
                Iniciar Sesión
            </button>
        </header>
    );
}