'use client';

export default function Post({ post }) {
    return (
        <div className="Post">
            <img src={post.image} />
        </div>
    );
}