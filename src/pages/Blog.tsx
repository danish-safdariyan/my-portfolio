export default function Blog() {
  return (
    <section
      id="blog"
      className="min-h-screen px-6 py-24 flex flex-col items-center justify-center bg-gradient-to-br from-[#131927] via-black to-[#0e0b1f] text-white snap-start"
    >
      <h2 className="text-4xl font-bold mb-6">Writing & Blogs</h2>
      <p className="text-lg text-gray-300 mb-4">
        I share articles on development, design, and more on{" "}
        <a
          href="https://medium.com/@yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Medium
        </a>{" "}
        and{" "}
        <a
          href="https://hashnode.com/@yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Hashnode
        </a>
        .
      </p>
    </section>
  );
}
