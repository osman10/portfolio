import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-[#999999] text-sm pt-16 pb-8 border-t border-[#2a2a2a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: Interesting Links */}
          <div className="flex flex-col justify-center h-full">
              <Logo/>
              <h1 className='text-white px-4 text-xl'>MERN stact developer</h1>
          </div>

          {/* Column 2: Latest News */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-semibold tracking-wider uppercase">
              Latest News
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="relative w-12 h-12 flex-shrink-0 bg-gray-800 rounded overflow-hidden">
                  {/* Replace with your image paths */}
                  <div className="w-full h-full bg-neutral-700 flex items-center justify-center text-[10px] text-gray-400">Img</div>
                </div>
                <div>
                  <Link href="#" className="text-gray-300 group-hover:text-white text-xs font-medium leading-snug block transition">
                    Postformat Gallery: Multiple images
                  </Link>
                  <span className="text-[11px] text-gray-500 block mt-1">October 21, 2013 - 3:31 pm</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="relative w-12 h-12 flex-shrink-0 bg-gray-800 rounded overflow-hidden">
                  <div className="w-full h-full bg-neutral-700 flex items-center justify-center text-[10px] text-gray-400">Img</div>
                </div>
                <div>
                  <Link href="#" className="text-gray-300 group-hover:text-white text-xs font-medium leading-snug block transition">
                    Snowboarding is fun!
                  </Link>
                  <span className="text-[11px] text-gray-500 block mt-1">December 12, 2012 - 9:11 pm</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 group">
                <div className="relative w-12 h-12 flex-shrink-0 bg-gray-800 rounded overflow-hidden">
                  <div className="w-full h-full bg-neutral-700 flex items-center justify-center text-[10px] text-gray-400">Img</div>
                </div>
                <div>
                  <Link href="#" className="text-gray-300 group-hover:text-white text-xs font-medium leading-snug block transition">
                    This is a standard post format with preview Picture
                  </Link>
                  <span className="text-[11px] text-gray-500 block mt-1">January 14, 2012 - 1:13 pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Tags & Categories */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-xs font-semibold tracking-wider uppercase mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {['are', 'econ', 'landscape', 'lifestyle', 'nice', 'portrait', 'some', 'tags', 'these'].map((tag) => (
                  <Link 
                    key={tag} 
                    href={`/tag/${tag}`}
                    className="bg-[#242424] hover:bg-[#333333] text-gray-300 text-[11px] px-2 py-1 rounded transition"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-xs font-semibold tracking-wider uppercase mb-2">
                Categories
              </h3>
              <ul className="space-y-1 text-xs">
                {['Breaking News', 'Economy', 'Frontpage Article', 'Health', 'Lifestyle', 'Music', 'News', 'Science'].map((cat) => (
                  <li key={cat}>
                    <Link href="#" className="hover:text-white transition">
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Business Hours */}
          <div className="space-y-4">
            <h3 className="text-white text-xs font-semibold tracking-wider uppercase">
              Business Hours
            </h3>
            <p className="text-xs leading-relaxed">
              Our support Hotline is available 24 Hours a day: <span className="text-white font-medium">(555) 343 456 7891</span>
            </p>
            <div className="text-xs space-y-1 pt-1">
              <p><strong className="text-gray-300 font-normal">Monday-Friday:</strong> 9am to 5pm</p>
              <p><strong className="text-gray-300 font-normal">Saturday:</strong> 10am to 2pm</p>
              <p><strong className="text-gray-300 font-normal">Sunday:</strong> Closed</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© Copyright - Enfold Theme Demo - Enfold Theme by Kriesi</p>
          <ul className="flex flex-wrap gap-6">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/help" className="hover:text-white transition">Help</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
            <li><Link href="/pages" className="hover:text-white transition">Pages</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
