import { useRouter } from "next/router";
import blogs from "../../data/blogs.json";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog with matching id
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{blog.content}</p>
    </div>
  );
}
