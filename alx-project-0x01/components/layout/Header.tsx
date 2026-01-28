import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between">
                <div className="font-bold">ALX Project</div>
                <ul className="flex space-x-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/posts">Posts</Link></li>
                    <li><Link href="/users">Users</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
