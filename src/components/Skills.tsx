import { Code2, Palette, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={40} className="text-purple-400" />,
      title: "Frontend Development",
      skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML/CSS", "Chakra UI"]
    },
    {
      icon: <Palette size={40} className="text-pink-400" />,
      title: "UI/UX Design",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: <Monitor size={40} className="text-purple-400" />,
      title: "Tools & Others",
      skills: ["Git & Github", "VS Code", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50"
            >
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;