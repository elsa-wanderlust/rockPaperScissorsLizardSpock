import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="bg-green-200 h-screen w-screen justify-center flex pt-24">
        {children}
      </div>
      <Footer />
    </div>
  );
}
