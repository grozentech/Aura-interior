import { useEffect } from 'react';
import { X, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';
import { createProjectEnquiryUrl } from '../utils/whatsapp';
import { SafeImage } from './SafeImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const waUrl = createProjectEnquiryUrl(project.title, project.category);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#F8F5F0] border border-[#E9E0D4] rounded-xs shadow-2xl overflow-y-auto z-10 flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E9E0D4] bg-[#FFFFFF] sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#B69A70]">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#242321]/60">{project.conceptType}</span>
            </div>
            <h3
              id="modal-project-title"
              className="font-serif text-xl sm:text-2xl text-[#242321] font-normal mt-0.5"
            >
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#242321]/70 hover:text-[#242321] hover:bg-[#E9E0D4]/50 rounded-full transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Image */}
        <div className="relative aspect-[16/9] w-full bg-[#E9E0D4] overflow-hidden">
          <SafeImage
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
            fallbackTitle={project.title}
          />
          {/* Illustrative Sample Notice Overlay */}
          <div className="absolute bottom-3 right-3 bg-[#242321]/80 backdrop-blur-xs text-[#E9E0D4] text-[11px] px-3 py-1 tracking-wider uppercase border border-[#B69A70]/40">
            Illustrative Design Concept
          </div>
        </div>

        {/* Modal Details */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B69A70] mb-2">
              Concept Overview
            </h4>
            <p className="text-base text-[#242321]/85 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E9E0D4]">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B69A70] mb-3">
                Design Scope
              </h4>
              <ul className="space-y-2">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="text-sm text-[#242321]/80 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B69A70] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B69A70] mb-2">
                Key Elements & Textures
              </h4>
              <p className="text-sm text-[#242321]/75 leading-relaxed bg-[#FFFFFF] p-4 border border-[#E9E0D4] rounded-xs">
                {project.keyElements}
              </p>
              <p className="text-[11px] text-[#242321]/50 mt-2 italic">
                Note: This is an illustrative portfolio design concept demonstrating spatial styling possibilities for spaces in Dindigul.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#E9E0D4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#242321]/70">
              Inspired by this concept? Discuss a customized version for your floor plan.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-5 py-3 border border-[#E9E0D4] text-[#242321] text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-[#E9E0D4]/40 transition-colors w-1/2 sm:w-auto"
              >
                Close
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#B69A70] hover:bg-[#A0855B] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 w-1/2 sm:w-auto shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
