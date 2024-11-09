import { ReactNode } from "react";
import Menu from "./menu";

export default function Layout({ children }: { children: ReactNode }) {
    return (
            <div className="row">
                {/* 左メニュー */}
                <div className="col-md-3 col-lg-2 d-md-block">
                    <Menu />
                </div>
                {/* メインコンテンツ */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {children}
                </main>
            </div>
    );
}
