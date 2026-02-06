import React, { useState } from 'react';
import './DailyMonDashboard.css';

const DailyMonDashboard = () => {
    const [coins, setCoins] = useState(350);
    const [quests, setQuests] = useState([
        { id: 1, title: "Morning Hydration", desc: "Drink 500ml of water", icon: "💧", colorClass: "bg-blue", completed: false },
        { id: 2, title: "Power Walk", desc: "10,000 Steps today", icon: "👟", colorClass: "bg-orange", completed: false },
        { id: 3, title: "Mind & Soul", desc: "Read for 20 minutes", icon: "📚", colorClass: "bg-purple", completed: false },
    ]);

    const toggleQuest = (id) => {
        setQuests(quests.map(q => {
            if (q.id === id) {
                const isCompleting = !q.completed;
                if (isCompleting) triggerConfetti();
                setCoins(prev => isCompleting ? prev + 50 : prev - 50);
                return { ...q, completed: !q.completed };
            }
            return q;
        }));
    };

    const triggerConfetti = () => {
        // Simple console log for demo, in real app install 'canvas-confetti'
        console.log("🎉 Confetti Popup!");
    };

    return (
        <div className="dailymon-container">
            {/* Top Stats Bar */}
            <header className="stats-bar">
                <div className="level-badge">
                    <span>LV.5</span> Explorer
                </div>
                <div className="currency-streak">
                    <div className="stat-pill">
                        🪙 {coins}
                    </div>
                    <div className="stat-pill">
                        🔥 12 Days
                    </div>
                </div>
            </header>

            {/* Mascot Interaction Area */}
            <section className="mascot-area">
                <div className="mascot-character">
                    <div className="mascot-face">
                        <div className="eye"></div>
                        <div className="eye"></div>
                        <div className="mouth"></div>
                    </div>
                </div>
            </section>

            {/* Daily Quests List */}
            <section>
                <h2 className="section-title">Today's Quests</h2>
                <div className="quest-list">
                    {quests.map((quest) => (
                        <div
                            key={quest.id}
                            className={`quest-card ${quest.completed ? 'completed' : ''}`}
                            onClick={() => toggleQuest(quest.id)}
                        >
                            <div className="quest-info">
                                <div className={`quest-icon ${quest.colorClass}`}>
                                    {quest.icon}
                                </div>
                                <div className="quest-details">
                                    <h4>{quest.title}</h4>
                                    <p>{quest.desc}</p>
                                </div>
                            </div>
                            <div className="check-circle"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Navigation */}
            <nav className="bottom-nav">
                <div className="nav-item active">
                    <span className="nav-icon">⚔️</span>
                    Quests
                </div>
                <div className="nav-item">
                    <span className="nav-icon">🛍️</span>
                    Shop
                </div>
                <div className="nav-item">
                    <span className="nav-icon">👥</span>
                    Social
                </div>
                <div className="nav-item">
                    <span className="nav-icon">👤</span>
                    Profile
                </div>
            </nav>
        </div>
    );
};

export default DailyMonDashboard;
