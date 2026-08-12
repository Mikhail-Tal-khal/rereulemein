import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function BlogLayout({ children }: LayoutProps<"/blog">) {
  return (
    <>
      <a
        href="#blog-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:border focus:border-bronze/60 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-bronze"
      >
        Skip to content
      </a>
      <Nav />
      <main id="blog-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
