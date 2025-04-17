

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                alt="Trust Agbata"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-2xl" />
          </div>
          <div className="space-y-6">
            <p className="text-xl text-gray-300">
              Hello! I'm Trust Agbata, a passionate Frontend Engineer and UI/UX Designer with a keen eye for creating beautiful, intuitive, and user-centered digital experiences.
            </p>
            <p className="text-xl text-gray-300">
              With expertise in modern web technologies and design principles, I bridge the gap between aesthetics and functionality to deliver exceptional digital solutions.
            </p>
            <p className="text-xl text-gray-300">
              I believe in the power of clean code, pixel-perfect design, and creating experiences that leave a lasting impression on users.
            </p>

            <div>
          <a
              href="https://docs.google.com/document/d/1jOYlB96HAVZxCjzBVFfxe6fd5i_9Bwln7dhbsiSNpik/edit?usp=sharing"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              View My CV
            </a>
          </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;