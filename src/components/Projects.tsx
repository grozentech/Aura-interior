import { useState } from 'react';
import { Eye, MessageCircle, ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { createProjectEnquiryUrl } from '../utils/whatsapp';
import { SafeImage } from './SafeImage';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Residential',
    'Living Room',
    'Modular Kitchen',
    'Bedroom',
    'Commercial',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-[#B69A70] mb-3">
              <span>Curated Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Design Concepts</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242321] leading-tight tracking-tight text-balance">
              Spaces That Inspire.
            </h2>
            <p className="text-sm sm:text-base text-[#242321]/70 font-light mt-3 leading-relaxed">
              Explore our architectural concepts and layout inspirations. Every project is uniquely customized to match your site dimensions and personal aesthetic.
            </p>
          </div>

          {/* Illustrative Notice Tag */}
          <div className="inline-block text-xs text-[#242321]/60 bg-[#E9E0D4]/60 border border-[#B69A70]/30 px-3 py-2 rounded-xs">
            <span className="font-medium text-[#242321]">Sample Gallery:</span> Illustrative portfolio concepts demonstrating spatial styles.
          </div>
        </div>

        {/* Category Filter Tabs (Functional segmented buttons per design constitution) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#E9E0D4] scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-xs whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#242321] text-white shadow-xs'
                    : 'bg-[#FFFFFF] text-[#242321]/80 hover:text-[#242321] hover:bg-[#E9E0D4]/50 border border-[#E9E0D4]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const waUrl = createProjectEnquiryUrl(project.title, project.category);

            return (
              <div
                key={project.id}
                className="group flex flex-col bg-[#FFFFFF] border border-[#E9E0D4] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_36px_rgba(36,35,33,0.08)] hover:-translate-y-1 hover:border-[#B69A70]/60 rounded-xs"
              >
                {/* Project Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E0D4]">
                  <SafeImage
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    fallbackTitle={project.title}
                  />

                  {/* Category Pill Tag Replacement (Clean unboxed text chip) */}
                  <div className="absolute top-3 left-3 bg-[#242321]/85 backdrop-blur-xs text-[#E9E0D4] text-[10px] tracking-widest uppercase px-2.5 py-1 font-medium border border-[#B69A70]/40">
                    {project.category}
                  </div>

                  {/* Hover Overlay Button to Open Lightbox */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs tracking-wider uppercase cursor-pointer"
                    aria-label={`View details for ${project.title}`}
                  >
                    <span className="px-4 py-2 bg-[#242321]/90 backdrop-blur-xs border border-white/30 rounded-xs flex items-center gap-2 hover:bg-[#B69A70] transition-colors">
                      <Eye className="w-4 h-4" />
                      <span>View Project Details</span>
                    </span>
                  </button>
                </div>

                {/* Project Card Info */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[11px] tracking-wider uppercase text-[#B69A70] font-medium block mb-1">
                      {project.conceptType}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-[#242321] group-hover:text-[#B69A70] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#242321]/70 font-light leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#E9E0D4] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold tracking-wider uppercase text-[#242321] hover:text-[#B69A70] transition-colors py-1 inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B69A70]" />
                    </button>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#242321]/80 hover:text-[#B69A70] transition-colors py-1"
                      title="Enquire on WhatsApp about this design"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#B69A70]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
