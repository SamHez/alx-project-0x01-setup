import React from "react";

const PostCard: React.FC = () => {
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">Post Title</h2>
            <p>Post body content goes here...</p>
        </div>
    );
};

export default PostCard;
