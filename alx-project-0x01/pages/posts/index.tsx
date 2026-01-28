import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const Posts: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-8">
                <h1 className="text-4xl font-bold mb-4">Posts Page</h1>
                <p>This page will display posts.</p>
            </main>
            <Footer />
        </div>
    );
};

export default Posts;
