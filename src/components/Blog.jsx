import { useLoaderData } from "react-router";
import { NavLink } from "react-router-dom";

export default function Blog() {
    const posts = useLoaderData();
    return (
        <div>
            Blog
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}