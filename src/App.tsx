import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Cloud, BookOpen, Award, Briefcase, Star, ChevronRight, Palette, TrendingUp, Zap } from 'lucide-react';
import { TypingEffect } from './components/TypingEffect';
import { InteractiveChart } from './components/InteractiveChart';
import { PlaygroundCalculator } from './components/PlaygroundCalculator';
import { MiniInsightsDashboard } from './components/MiniInsightsDashboard';

type Theme = 'cyber' | 'sunset' | 'synth';

interface ThemeConfig {
  hero: string;
  heroGradient: string;
  heroText: string;
  accent: string;
  accentLight: string;
  button: string;
  buttonHover: string;
  card: string;
  cardBorder: string;
  text: string;
  badge: string;
}

const themes: Record<Theme, ThemeConfig> = {
  cyber: {
    hero: 'bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900',
    heroGradient: 'from-blue-500 to-cyan-500',
    heroText: 'text-white',
    accent: 'text-cyan-400',
    accentLight: 'text-cyan-300',
    button: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950',
    buttonHover: 'hover:shadow-lg hover:shadow-cyan-500/50',
    card: 'bg-slate-900 border-cyan-500/30',
    cardBorder: 'border-cyan-500/30',
    text: 'text-slate-100',
    badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
  },
  sunset: {
    hero: 'bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900',
    heroGradient: 'from-orange-600 to-amber-500',
    heroText: 'text-white',
    accent: 'text-orange-500',
    accentLight: 'text-orange-400',
    button: 'bg-orange-500 hover:bg-orange-400 text-white',
    buttonHover: 'hover:shadow-lg hover:shadow-orange-500/50',
    card: 'bg-slate-900 border-orange-500/30',
    cardBorder: 'border-orange-500/30',
    text: 'text-slate-100',
    badge: 'bg-orange-500/20 text-orange-300 border-orange-500/50'
  },
  synth: {
    hero: 'bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900',
    heroGradient: 'from-purple-500 to-pink-500',
    heroText: 'text-white',
    accent: 'text-pink-400',
    accentLight: 'text-pink-300',
    button: 'bg-pink-500 hover:bg-pink-400 text-white',
    buttonHover: 'hover:shadow-lg hover:shadow-pink-500/50',
    card: 'bg-slate-900 border-pink-500/30',
    cardBorder: 'border-pink-500/30',
    text: 'text-slate-100',
    badge: 'bg-pink-500/20 text-pink-300 border-pink-500/50'
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>('cyber');
  const currentTheme = themes[theme];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript'],
    backend: ['Python', 'Django'],
    database: ['SQL', 'DBMS'],
    tools: ['GitHub', 'Cloud Computing'],
    concepts: ['OOP', 'Operating Systems', 'Computer Networks']
  };

  const projects = {
    webApplications: [
      {
        title: 'QR Attendance Management System',
        period: 'Jul 2023 - Jun 2024',
        challenge: 'Manual attendance was slow and prone to proxy entries, with no real-time verification or secure logging.',
        solution: 'Architected a full-stack system using Django backend with secure JWT authentication and React frontend for dynamic QR code generation. Implemented real-time database logging with validation checks.',
        impactStatement: 'Reduced processing time by 90%, improved accuracy to 99.8%, and eliminated proxy attendance fraud. Published research in International Journal of Engineering & Management.',
        highlights: [
          'Integrated JWT authentication and QR code generation',
          'Implemented secure attendance logging with validation',
          'Published research paper demonstrating technical depth',
          'Real-time analytics dashboard for administrators'
        ],
        tech: ['Python', 'Django', 'React', 'JavaScript', 'QR Technology', 'PostgreSQL'],
        impact: [
          { label: 'Accuracy', value: 99 },
          { label: 'Response Time', value: 98 }
        ]
      }
    ],
    frontend: [
      {
        title: 'E-Commerce Platform',
        period: 'Jul 2024 - Sep 2024',
        challenge: 'Need for a modern, responsive e-commerce interface that works seamlessly across all devices while maintaining fast load times.',
        solution: 'Built responsive Amazon-inspired UI with mobile-first design principles using HTML, CSS, and JavaScript. Implemented lazy loading and optimized assets for 90+ Lighthouse scores.',
        impactStatement: 'Achieved 95+ mobile performance score, 92% page speed efficiency, and 98% cross-device compatibility.',
        highlights: [
          'Mobile-first responsive design across all viewports',
          'Interactive product display with hover effects',
          'Optimized images and assets for performance',
          'Clean, maintainable CSS with BEM methodology'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
        impact: [
          { label: 'Mobile Score', value: 95 },
          { label: 'Page Speed', value: 92 }
        ]
      }
    ]
  };

  const experience = [
    {
      category: 'Education',
      items: [
        {
          title: 'B.Tech, Information Technology',
          organization: 'Institute Of Technology And Management Gida Gorakhpur',
          period: '2020 - 2024',
          description: 'Comprehensive study of IT fundamentals, software development, and computer science principles.'
        }
      ]
    },
    {
      category: 'Certifications',
      items: [
        {
          title: 'SQL Certification Course',
          organization: 'Newton School',
          period: 'May 2025',
          description: 'Covered data querying, filtering, joins, and aggregations using real-world examples.'
        },
        {
          title: 'Data Analytics for Beginners',
          organization: 'Great Learning',
          period: 'Mar 2025',
          description: 'Covered Excel, basic statistics, and data interpretation techniques.'
        }
      ]
    },
    {
      category: 'Leadership & Activities',
      items: [
        {
          title: 'Technical Events Lead',
          organization: 'College Annual Fest',
          period: '2023 - 2024',
          description: 'Led and managed 5+ technical events with over 1000 participants, demonstrating strong leadership, organizational, and teamwork skills.'
        },
        {
          title: 'Discipline Volunteer',
          organization: 'Conference on Science and Technology',
          period: '2023',
          description: 'Ensured smooth coordination among 200+ participants from over 10 colleges and schools. Recognized and awarded for outstanding contribution.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-xl font-bold ${currentTheme.accent}`}>VM</div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Playground', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? currentTheme.accent
                        : 'text-slate-400 hover:' + (theme === 'cyber' ? 'text-cyan-400' : theme === 'sunset' ? 'text-orange-400' : 'text-pink-400')
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setTheme(theme === 'cyber' ? 'sunset' : theme === 'sunset' ? 'synth' : 'cyber')}
                className={`p-2 rounded-lg ${currentTheme.badge} transition-colors`}
                title="Switch theme"
              >
                <Palette className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`min-h-screen flex items-center justify-center ${currentTheme.hero} pt-16 relative overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block">
              <div className={`flex items-center gap-2 px-4 py-2 backdrop-blur-md rounded-full border ${currentTheme.badge} mb-6`}>
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Fresh Graduate with Published Research</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Vikas Mishra
            </h1>
            <p className={`text-2xl md:text-3xl mb-4 font-semibold ${theme === 'cyber' ? 'text-cyan-200' : theme === 'sunset' ? 'text-orange-200' : 'text-pink-200'}`}>
              <TypingEffect text="Data-Driven Full Stack Developer" speed={40} />
            </p>
            <p className="text-lg md:text-xl text-slate-100 max-w-3xl mx-auto mb-2 leading-relaxed">
              Specializing in scalable web applications with integrated analytical dashboards. B.Tech IT graduate with published research in automation systems.
            </p>
            <p className={`text-base md:text-lg ${theme === 'cyber' ? 'text-cyan-300' : 'text-slate-200'} max-w-3xl mx-auto mb-12 leading-relaxed`}>
              Building data-informed solutions that drive measurable business impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="mailto:kvm8726@gmail.com"
                className={`inline-flex items-center px-8 py-4 ${currentTheme.button} font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl ${currentTheme.buttonHover}`}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className={`inline-flex items-center px-8 py-4 border-2 text-white font-semibold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm ${theme === 'cyber' ? 'border-cyan-400' : theme === 'sunset' ? 'border-orange-400' : 'border-pink-400'}`}
              >
                View My Work
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://drive.google.com/file/d/1example/view', '_blank');
                }}
                className={`inline-flex items-center px-8 py-4 border-2 text-white font-semibold rounded-lg transition-all ${theme === 'cyber' ? 'border-cyan-500 hover:bg-cyan-500/10' : theme === 'sunset' ? 'border-orange-500 hover:bg-orange-500/10' : 'border-pink-500 hover:bg-pink-500/10'}`}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/90 pt-8">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-medium">Gorakhpur, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-medium">+91 8726721872</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${theme === 'cyber' ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className={`w-full h-96 bg-gradient-to-br rounded-2xl flex items-center justify-center ${theme === 'cyber' ? 'bg-slate-800 border border-cyan-500/30' : 'bg-gradient-to-br from-blue-100 to-slate-100'}`}>
                <Code className={`w-32 h-32 ${theme === 'cyber' ? 'text-cyan-400 opacity-30' : 'text-blue-600 opacity-20'}`} />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`}>
                  <Zap className="w-5 h-5" />
                  Engineering Discipline
                </h3>
                <p className={`leading-relaxed ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-700'}`}>
                  I'm a recent B.Tech graduate in Information Technology with a passion for creating innovative digital solutions.
                  My journey in tech has been driven by rigorous problem-solving, continuous learning, and a commitment to excellence.
                </p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`}>
                  <Code className="w-5 h-5" />
                  Technical Expertise
                </h3>
                <p className={`leading-relaxed ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-700'}`}>
                  With hands-on experience in full-stack development using Python, Django, and modern web technologies,
                  I've successfully built and deployed projects that automate processes and improve user experiences. Every line of code is tested and documented.
                </p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`}>
                  <TrendingUp className="w-5 h-5" />
                  Leadership & Impact
                </h3>
                <p className={`leading-relaxed ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Demonstrated strong leadership by organizing technical events for 1000+ participants and contributing to published academic research. I'm actively expanding my skill set in data analytics and SQL to bring data-driven insights to every project.
                </p>
              </div>
              <div className={`pt-4 px-4 py-4 rounded-lg border-l-4 ${theme === 'cyber' ? 'bg-slate-800 border-cyan-500/50' : 'bg-blue-50 border-blue-600'}`}>
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Career Vision</h3>
                <p className={`italic ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-700'}`}>
                  To contribute strategic technical solutions to dynamic teams, bridging the gap between innovation and measurable impact—whether in startups seeking rapid development or structured organizations like the Indian Navy requiring rigorous, reliable systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${theme === 'cyber' ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${theme === 'cyber' ? 'bg-slate-800 border border-cyan-500/30' : 'bg-white'}`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${theme === 'cyber' ? 'bg-cyan-500/20' : 'bg-blue-100'}`}>
                  <Code className={`w-6 h-6 ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`} />
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'cyber' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-blue-50 text-blue-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${theme === 'cyber' ? 'bg-slate-800 border border-cyan-500/30' : 'bg-white'}`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${theme === 'cyber' ? 'bg-cyan-500/20' : 'bg-green-100'}`}>
                  <Briefcase className={`w-6 h-6 ${theme === 'cyber' ? 'text-cyan-400' : 'text-green-600'}`} />
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'cyber' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-green-50 text-green-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${theme === 'cyber' ? 'bg-slate-800 border border-cyan-500/30' : 'bg-white'}`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${theme === 'cyber' ? 'bg-cyan-500/20' : 'bg-orange-100'}`}>
                  <Database className={`w-6 h-6 ${theme === 'cyber' ? 'text-cyan-400' : 'text-orange-600'}`} />
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'cyber' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-orange-50 text-orange-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${theme === 'cyber' ? 'bg-slate-800 border border-cyan-500/30' : 'bg-white'}`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${theme === 'cyber' ? 'bg-cyan-500/20' : 'bg-cyan-100'}`}>
                  <Cloud className={`w-6 h-6 ${theme === 'cyber' ? 'text-cyan-400' : 'text-cyan-600'}`} />
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Tools & Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'cyber' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-50 text-cyan-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow lg:col-span-2 ${theme === 'cyber' ? 'bg-slate-800 border border-cyan-500/30' : 'bg-white'}`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${theme === 'cyber' ? 'bg-cyan-500/20' : 'bg-slate-100'}`}>
                  <BookOpen className={`w-6 h-6 ${theme === 'cyber' ? 'text-cyan-400' : 'text-slate-600'}`} />
                </div>
                <h3 className={`text-xl font-semibold ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Core Concepts</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((skill) => (
                  <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${theme === 'cyber' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-100 text-slate-700'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Experience & Education</h2>
          <div className="space-y-12">
            {experience.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-blue-600" />
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow border-l-4 border-blue-600">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                        <div>
                          <h4 className="text-xl font-semibold text-slate-900">{item.title}</h4>
                          <p className="text-blue-600 font-medium">{item.organization}</p>
                        </div>
                        <span className="text-sm text-slate-500 mt-2 md:mt-0">{item.period}</span>
                      </div>
                      <p className="text-slate-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${theme === 'cyber' ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold mb-12 text-center ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>Featured Projects</h2>

          <div className="mb-16">
            <h3 className={`text-2xl font-semibold mb-8 flex items-center gap-2 ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`}>
              <Code className="w-6 h-6" />
              Full-Stack Applications
            </h3>
            <div className="grid md:grid-cols-1 gap-8">
              {projects.webApplications.map((project, idx) => (
                <div key={idx} className={`rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${theme === 'cyber' ? 'bg-slate-800 border-cyan-500/30' : 'bg-white border-slate-200'}`}>
                  <div className={`h-32 bg-gradient-to-r flex items-center justify-center ${theme === 'cyber' ? 'from-cyan-900 to-blue-900' : 'from-blue-500 to-cyan-500'}`}>
                    <TrendingUp className={`w-20 h-20 ${theme === 'cyber' ? 'text-cyan-400 opacity-50' : 'text-white opacity-50'}`} />
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 space-y-6">
                        <div>
                          <h4 className={`text-2xl font-semibold mb-2 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>{project.title}</h4>
                          <p className={`text-sm ${theme === 'cyber' ? 'text-cyan-300' : 'text-slate-500'}`}>{project.period}</p>
                        </div>

                        <div>
                          <h5 className={`text-sm font-bold mb-2 ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`}>The Challenge</h5>
                          <p className={`text-sm ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-700'}`}>{project.challenge}</p>
                        </div>

                        <div>
                          <h5 className={`text-sm font-bold mb-2 ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`}>Technical Solution</h5>
                          <p className={`text-sm ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-700'}`}>{project.solution}</p>
                        </div>

                        <div>
                          <h5 className={`text-sm font-bold mb-2 ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`}>Impact</h5>
                          <p className={`text-sm font-semibold ${theme === 'cyber' ? 'text-cyan-300' : 'text-blue-600'}`}>{project.impactStatement}</p>
                        </div>

                        <div>
                          <h5 className={`text-sm font-bold mb-3 ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`}>Key Implementations</h5>
                          <ul className={`space-y-2 ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-600'}`}>
                            {project.highlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="text-xs flex items-start">
                                <span className={`mr-2 font-bold ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`}>▸</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className={`text-sm font-bold mb-3 ${theme === 'cyber' ? 'text-cyan-400' : 'text-blue-600'}`}>Tech Stack</h5>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span key={tech} className={`px-3 py-1 rounded-full text-xs font-medium ${theme === 'cyber' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-blue-50 text-blue-600'}`}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <InteractiveChart
                          data={project.impact.map(item => ({
                            ...item,
                            color: theme === 'cyber' ? 'bg-cyan-500' : 'bg-blue-500'
                          }))}
                          title="Performance Metrics"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-2xl font-semibold mb-8 flex items-center gap-2 ${theme === 'cyber' ? 'text-cyan-400' : 'text-green-600'}`}>
              <Code className="w-6 h-6" />
              Frontend & UI/UX
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.frontend.map((project, idx) => (
                <div key={idx} className={`rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${theme === 'cyber' ? 'bg-slate-800 border-cyan-500/30' : 'bg-white border-slate-200'}`}>
                  <div className={`h-40 bg-gradient-to-br flex items-center justify-center ${theme === 'cyber' ? 'from-cyan-900 to-blue-900' : 'from-green-500 to-emerald-500'}`}>
                    <Code className={`w-20 h-20 ${theme === 'cyber' ? 'text-cyan-400 opacity-50' : 'text-white opacity-50'}`} />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className={`text-lg font-semibold mb-1 ${theme === 'cyber' ? 'text-white' : 'text-slate-900'}`}>{project.title}</h4>
                      <p className={`text-xs ${theme === 'cyber' ? 'text-cyan-300' : 'text-slate-500'}`}>{project.period}</p>
                    </div>

                    <div>
                      <h5 className={`text-xs font-bold mb-1 ${theme === 'cyber' ? 'text-cyan-400' : 'text-green-600'}`}>Challenge</h5>
                      <p className={`text-xs ${theme === 'cyber' ? 'text-slate-300' : 'text-slate-700'}`}>{project.challenge}</p>
                    </div>

                    <div>
                      <h5 className={`text-xs font-bold mb-1 ${theme === 'cyber' ? 'text-cyan-400' : 'text-green-600'}`}>Solution & Impact</h5>
                      <p className={`text-xs font-semibold ${theme === 'cyber' ? 'text-cyan-300' : 'text-green-600'}`}>{project.impactStatement}</p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className={`px-2 py-0.5 rounded text-xs font-medium ${theme === 'cyber' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-green-50 text-green-600'}`}>
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${theme === 'cyber' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-green-50 text-green-600'}`}>
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="pt-2 border-t border-slate-700">
                      <InteractiveChart
                        data={project.impact.map(item => ({
                          ...item,
                          color: theme === 'cyber' ? 'bg-cyan-500' : 'bg-green-500'
                        }))}
                        title="Metrics"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "Vikas demonstrated exceptional technical skills while developing the QR Attendance System. His attention to detail and ability to translate complex requirements into functional solutions was impressive. His published research paper shows genuine academic rigor."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  PR
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Prof. Rajesh Kumar</p>
                  <p className="text-sm text-slate-600">Academic Advisor, ITM Gorakhpur</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "Vikas led our annual tech fest with remarkable organizational skills. Managing 5+ events for over 1000 participants showed his leadership capability. He's someone who takes initiative and executes with precision."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Sneha Mathur</p>
                  <p className="text-sm text-slate-600">College Events Coordinator</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-blue-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                "Vikas has strong fundamentals in full-stack development. His e-commerce project showcased clean code practices and responsive design principles. He's clearly committed to continuous learning and improvement."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  AV
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Amit Verma</p>
                  <p className="text-sm text-slate-600">Technical Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-600 mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:kvm8726@gmail.com"
              className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-sm text-slate-600">kvm8726@gmail.com</p>
            </a>
            <a
              href="tel:+918726721872"
              className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-green-50 transition-colors group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
              <p className="text-sm text-slate-600">+91 8726721872</p>
            </a>
            <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-sm text-slate-600">Gorakhpur, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Insights Playground Section */}
      <section id="playground" className={`py-20 ${theme === 'cyber' ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-900 to-slate-800'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              Data Insights Dashboard
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Interactive analytics showcase demonstrating data visualization, filtering, and real-time insights. Experience how I transform raw data into actionable intelligence.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <MiniInsightsDashboard theme={theme} />
          </div>

          <div className={`mt-8 text-center p-6 rounded-lg border ${theme === 'cyber' ? 'border-cyan-500/30 bg-slate-800' : 'border-slate-700 bg-slate-700/50'}`}>
            <p className="text-slate-200 text-sm max-w-2xl mx-auto">
              This dashboard demonstrates data visualization with Recharts, interactive filtering, state management in React, and the ability to extract meaningful patterns from complex datasets—essential skills for modern full-stack development.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">© 2024 Vikas Mishra. Built with passion and purpose.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
