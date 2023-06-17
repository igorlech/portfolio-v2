import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

export default function HomePage() {
  return (
    <>
      <Nav />
      <HeroBanner />
      <section className="page">
        <h1 className="heading">Home Page</h1>
      </section>
      <Footer />
    </>
  );
}
