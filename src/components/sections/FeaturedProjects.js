// FeaturedProjects.js
// This component highlights key projects of the foundation.

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Camel Institutions Excellence Programme",
      description: "CIEP Initiative.",
    },
    {
      id: 2,
      title: "Camel All Round Development centres",
      description: "A Residential Hostel is a facility that provides safe shelter and all resources.",
    },
    {
      id: 3,
      title: "Camel All Round Education centres",
      description: "Ensuring quality education for underprivileged children.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <h3 className="text-2xl font-bold text-center mb-8">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow rounded p-4">
            <h4 className="text-xl font-bold mb-2">{project.title}</h4>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}