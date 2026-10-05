import { useState } from "react";

function CompassIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
            <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
    );
}

function GridIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3.5" y="3.5" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <rect x="13.5" y="3.5" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <rect x="3.5" y="13.5" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <rect x="13.5" y="13.5" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.7" />
        </svg>
    );
}

function HeartIcon({ className }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M20.8 5.8a5.2 5.2 0 0 0-7.4 0L12 7.2l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 22l8.8-8.8a5.2 5.2 0 0 0 0-7.4Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const navItems = [
    { label: "Explorar", icon: CompassIcon },
    { label: "Géneros", icon: GridIcon },
    { label: "Mis Favoritos", icon: HeartIcon },
];

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState("Explorar");

    return (
        <aside className="sidebar">
            <div className="sidebar-label">Navegación</div>
            <nav aria-label="Navegación principal">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.label;
                    return (
                        <button
                            className={`nav-item${isActive ? " nav-item--active" : ""}`}
                            type="button"
                            key={item.label}
                            onClick={() => setActiveItem(item.label)}
                            aria-current={isActive ? "page" : undefined}
                        >
                            <Icon className="nav-icon" />
                            <span>{item.label}</span>
                            {isActive && <span className="active-spark" />}
                        </button>
                    );
                })}
            </nav>
            <div className="sidebar-footer">
                <div className="sidebar-orbit" aria-hidden="true">
                    <span />
                </div>
                <p>Descubre algo<br />extraordinario.</p>
                <span className="footer-caption">JUEGA DIFERENTE</span>
            </div>
        </aside>
    );
}