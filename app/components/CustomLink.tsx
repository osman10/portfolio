import Link from 'next/link';
import type { ComponentType, SVGProps } from 'react';

type CustomLinkProps = {
  text?: string;
  href?: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export default function CustomLink({ text = "Hover Me", href = "/", icon: Icon }: CustomLinkProps) {
  return (
    <Link 
      href={href}
      className="relative inline-block px-4 py-3 font-semibold text-white bg-light-orange border-2 overflow-hidden z-10 transition-colors duration-300 hover:text-white group cursor-pointer"
    >
      {/* Sliding background layer */}
      <span className="absolute inset-0 bg-dark-orange -translate-x-full origin-left transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 -z-10" />
      
      {/* Link Content (Text + Icon) */}
      <span className="relative z-10 flex items-center gap-2">
        {text}
        {Icon && <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
      </span>
    </Link>
  );
}