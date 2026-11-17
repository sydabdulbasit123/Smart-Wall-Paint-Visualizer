
const projects = [
  {
    name: "Living Room",
    date: "Nov 16, 2026",
    color: "#A3B18A",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600"
  },
  {
    name: "Bedroom Design",
    date: "Nov 14, 2026",
    color: "#D6C6B5",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600"
  },
  {
    name: "Modern Kitchen",
    date: "Nov 12, 2026",
    color: "#899B8A",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
  }
];

const colors = [
  "#526B50",
  "#A3B18A",
  "#DDAF91",
  "#D6C6B5",
  "#899B8A",
  "#E6DCCF"
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8F8F5] text-gray-800 flex">

      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-white border-r p-6 flex-col">
        <h1 className="text-xl font-bold text-[#526B50]">
          WallStudio.
        </h1>

        <p className="text-xs text-gray-400 mt-2 mb-10">
          YOUR SPACE, YOUR STYLE
        </p>

        <nav className="space-y-2">
          {["Dashboard", "My Projects", "Explore Colors", "Saved Designs", "Settings"].map((item, index) => (
            <a
              key={item}
              href={index === 0 ? "/dashboard" : "#"}
              className={`block px-4 py-3 rounded-lg text-sm transition ${
                index === 0
                  ? "bg-[#EAF0E7] text-[#526B50] font-semibold"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t pt-5">
          <p className="font-medium text-sm">Abdul Basit</p>
          <p className="text-xs text-gray-400">Personal Account</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 md:p-10 max-w-7xl mx-auto w-full">

        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-semibold">
              Good afternoon!
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Let's make your space beautiful.
            </p>
          </div>

          <button className="bg-[#526B50] text-white px-5 py-3 rounded-lg text-sm hover:bg-[#405640] transition">
            + New Project
          </button>
        </header>

        {/* Welcome Banner */}
        <section className="bg-[#E8EDE3] rounded-2xl p-7 md:p-10 mb-8">
          <div className="max-w-lg">
            <p className="text-sm text-[#526B50] font-medium mb-3">
              DESIGN YOUR DREAM HOME
            </p>

            <h2 className="text-3xl font-semibold leading-tight">
              A new color can change everything.
            </h2>

            <p className="text-gray-600 text-sm mt-3 mb-6">
              Upload your room photo and experiment with
              beautiful paint colors.
            </p>

            <button className="bg-[#526B50] text-white px-5 py-3 rounded-lg text-sm">
              Start Visualizing →
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            ["Total Projects", "12"],
            ["Saved Designs", "08"],
            ["Favorite Colors", "06"]
          ].map(([title, value]) => (
            <div key={title} className="bg-white border rounded-xl p-5">
              <p className="text-sm text-gray-500">{title}</p>
              <h3 className="text-3xl font-semibold mt-2">{value}</h3>
            </div>
          ))}
        </section>

        {/* Recent Projects */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-semibold">Recent Projects</h2>
            <a href="#" className="text-sm text-[#526B50] font-medium">
              View all →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div key={project.name} className="bg-white rounded-xl overflow-hidden border group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{project.name}</h3>
                    <div
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>

                  <p className="text-xs text-gray-400 mt-2">
                    Last edited: {project.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Colors */}
        <section>
          <h2 className="text-xl font-semibold mb-5">
            Explore Popular Colors
          </h2>

          <div className="bg-white border rounded-xl p-5">
            <div className="flex flex-wrap gap-4">
              {colors.map((color) => (
                <div key={color} className="text-center">
                  <div
                    className="w-12 h-12 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs text-gray-400 mt-2">{color}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;
