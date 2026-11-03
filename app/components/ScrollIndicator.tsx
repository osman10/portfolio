import { FiChevronDown } from 'react-icons/fi';

export default function ScrollIndicator(): React.JSX.Element {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
      <div className="flex flex-col items-center text-white/80">
        {/* Tailwind's built-in animate-bounce class handles the floating animation */}
        <FiChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </div>
  );
}