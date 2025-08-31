import blogs from "../../data/blogs.json";

export async function getStaticPaths() {
  // Log all slugs for debugging
  console.log("Blog slugs:", blogs.map((blog) => blog.slug));

  // Filter out invalid slugs
  const paths = blogs
    .filter((blog) => typeof blog.slug === "string" && blog.slug.length > 0)
    .map((blog) => ({
      params: { slug: blog.slug },
    }));

  return {
    paths,
    fallback: false,
  };
}
