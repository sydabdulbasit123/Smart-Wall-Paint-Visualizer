import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const features = [
  {
    number: "01",
    title: "Upload your room",
    description: "Upload a photo of your room and get ready to experiment.",
  },
  {
    number: "02",
    title: "Choose your colors",
    description: "Explore beautiful shades and find your perfect combination.",
  },
  {
    number: "03",
    title: "Visualize & save",
    description: "Preview your new walls and save your favorite designs.",
  },
];

const popularColors = [
  { name: "Sage Green", hex: "#A3B18A" },
  { name: "Warm Beige", hex: "#D8C5A8" },
  { name: "Soft White", hex: "#EDEAE2" },
  { name: "Terracotta", hex: "#C78368" },
  { name: "Dusty Blue", hex: "#8CA5B5" },
  { name: "Olive Green", hex: "#777B50" },
];

const rooms = [
  {
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700",
  },
  {
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700",
  },
  {
    name: "Modern Interior",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700",
  },
];

function Home() {
  const userdata  = useSelector((state) => state.user.userData);
  const navigate = useNavigate()

  return (
    <div className="bg-[#FAFAF7] text-[#252820] min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-white border-b border-gray-100">
        <a href="/" className="text-2xl font-bold text-[#526B50]">
          WallStudio.
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-[#526B50]">
            Home
          </Link>
          <a href="#colors" className="hover:text-[#526B50]">
            Colors
          </a>
          <a href="#how-it-works" className="hover:text-[#526B50]">
            How it works
          </a>
          <a href="#inspiration" className="hover:text-[#526B50]">
            Inspiration
          </a>
        </div>

        <div className="flex items-center gap-3">
          {!userdata && <Link to="/login" className="hidden sm:block text-sm font-medium">
            Login
          </Link>}
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
            className="bg-[#526B50] text-white px-5 py-2.5 rounded-lg text-sm hover:bg-[#405640] transition cursor-pointer"
          >
            {" "}
            {userdata ? "Dashboard" : "Get Started"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-[#526B50] uppercase tracking-widest">
              A new look starts here
            </span>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-5">
              Your walls.
              <br />
              Your colors.
              <br />
              <span className="text-[#71866C]">Your vision.</span>
            </h1>

            <p className="text-gray-500 mt-6 leading-7 max-w-md">
              Discover the perfect paint colors for your home. Upload your room,
              experiment with shades and visualize your dream space before
              painting.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to={userdata ? "/dashboard" : "/register"}
                className="bg-[#526B50] text-white px-7 py-3.5 rounded-lg hover:bg-[#405640] transition"
              >
                Start Visualizing →
              </Link>

              <a
                href="#how-it-works"
                className="border border-gray-300 px-7 py-3.5 rounded-lg hover:bg-white transition"
              >
                Explore More
              </a>
            </div>

            <p className="text-xs text-gray-400 mt-6">
              ✦ Simple. Creative. Made for your home.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200"
              alt="Beautiful modern living room"
              className="w-full h-[350px] md:h-[500px] object-cover rounded-2xl"
            />

            <div className="absolute bottom-5 left-5 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-xs text-gray-500">Featured shade</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-9 h-9 rounded-full bg-[#A3B18A]" />
                <div>
                  <p className="text-sm font-semibold">Sage Green</p>
                  <p className="text-xs text-gray-400">#A3B18A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest text-[#526B50]">
              Simple process
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3">
              Three steps to a beautiful home
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="border-t border-gray-200 pt-6"
              >
                <span className="text-3xl text-[#8A9C82] font-light">
                  {feature.number}
                </span>
                <h3 className="text-xl font-semibold mt-5">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Colors */}
      <section id="colors" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#526B50]">
                Find your shade
              </p>
              <h2 className="text-3xl font-semibold mt-3">
                Explore popular colors
              </h2>
            </div>

            <a
              href="/colors"
              className="text-sm text-[#526B50] hidden sm:block"
            >
              Explore all colors →
            </a>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
            {popularColors.map((color) => (
              <div key={color.name}>
                <div
                  className="h-28 md:h-40 rounded-xl border border-black/5"
                  style={{ backgroundColor: color.hex }}
                />
                <h3 className="text-sm font-medium mt-3">{color.name}</h3>
                <p className="text-xs text-gray-400 mt-1">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section id="inspiration" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-widest text-[#526B50]">
              Get inspired
            </p>
            <h2 className="text-3xl font-semibold mt-3">
              Find inspiration for every room
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div key={room.name} className="group overflow-hidden rounded-xl">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
                <h3 className="font-semibold mt-4">{room.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto bg-[#E8EDE3] rounded-2xl text-center py-16 px-6">
          <p className="text-sm text-[#526B50] uppercase tracking-widest">
            Your dream space awaits
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Ready to transform your walls?
          </h2>

          <p className="text-gray-600 mt-4">
            Start exploring colors and create a space you love.
          </p>

          <Link
            to={userdata ? "/dashboard" :"/register"}
            className="inline-block mt-8 bg-[#526B50] text-white px-8 py-3.5 rounded-lg hover:bg-[#405640] transition"
          >
            Get Started →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#252D24] text-white px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h2 className="text-2xl font-bold">WallStudio.</h2>
            <p className="text-sm text-gray-400 mt-3">
              Bring your imagination to your walls.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-300">
            <a href="/">Home</a>
            <a href="#colors">Colors</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6">
          <p className="text-xs text-gray-400">
            © 2026 WallStudio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
