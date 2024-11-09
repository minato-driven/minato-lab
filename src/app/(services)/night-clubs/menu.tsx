'use client'
import { useState } from "react";

export default function Menu() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <nav
            className={`sidebar vh-100 overflow-y-auto ${isCollapsed ? "collapsed" : ""} bg-light`}
            style={{
                transition: "width 0.3s",
                width: isCollapsed ? "50px" : "200px",
            }}
        >
            {/* 折りたたみボタン */}
            <button onClick={toggleSidebar} className="btn btn-primary mt-3 ms-3">
                {isCollapsed ? "▶" : "◀"}
            </button>

            {/* メニュー項目 */}
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            {isCollapsed ? "🏠" : "ダッシュボード"}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            {isCollapsed ? "👤" : "ユーザー管理"}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            {isCollapsed ? "⚙️" : "設定"}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            {isCollapsed ? "📊" : "レポート"}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
