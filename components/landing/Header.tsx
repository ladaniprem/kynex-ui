import Link from 'next/link'
import { Flame } from 'lucide-react'
import { Link as ViewTransitionsLink } from 'next-view-transitions'
import { Liquid } from '../liquid-gradient'
function Header() {
  return (
    <>
      {/* Header for mobile */}

      <div className='sticky top-0 left-0 right-0 z-50'>
        <div className='bg-white dark:bg-black/5 w-full'>

          {/* Rest of the header content */}
          <div className='flex items-center justify-center w-full flex-col'>
            <div
              className={`flex item-center justify-between bg-linear-to-b from-white/90 via-gray-50/90 to-white/90
            dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90
            shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)] backdrop-blur-md
            border-x border-b border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]
            w-full sm:min-w-[800px] sm:max-w-[1200px] rounded-b-[28px] px-4 py-2.5 relative transition-all
            duration-300 ease-in-out`}
            >
              <div className="relative z-10 flex items-center justify-center w-full gap-2">
                {/* Logo Section */}
                <div className='flex items-center '>
                  <Link href={"/"} className='flex items-center gap-2'>
                    <Flame className='w-6 h-6 text-green-500 dark:text-green-400' />
                    <span className='hidden sm:block font-semibold'>
                      Kynex UI
                    </span>
                  </Link>
                  <span className='text-zinc-300 dark:text-zinc-700 mx-2'>|</span>
                </div>
                {/* Desktop navigation*/}
                <div className='hidden sm:flex items-center gap-4'>
                  <ViewTransitionsLink
                    href={"/docs/components/background-paths"}
                    className='text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors'>
                    Components
                  </ViewTransitionsLink>
                  <ViewTransitionsLink
                    href={"/pricing"}
                    className='text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors'>
                    Pricings
                  </ViewTransitionsLink>
                  <Link
                    href={"#"}
                    target='_blank'
                    className='text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2'
                  >
                    Templates
                  </Link>
                  <a
                    href="https://github.com/ui-layouts/uilayouts"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2'
                  >
                    Templates
                    <span className='relative'>
                      <span className='text-xs px-2 py-0.5 rounded-full'>
                        <Liquid isHovered={false} colors={{ color1: '#10b981', color2: '#3b82f6', color3: '#8b5cf6', color4: '#ec4899', color5: '#f59e0b', color6: '#10b981', color7: '#3b82f6', color8: '#8b5cf6', color9: '#ec4899', color10: '#f59e0b', color11: '#10b981', color12: '#3b82f6', color13: '#8b5cf6', color14: '#ec4899', color15: '#f59e0b', color16: '#10b981', color17: '#3b82f6' }} />
                      </span>
                      <span className='absolute inset-0 flex items-center justify-center text-xs'>new</span>
                    </span>
                  </a>
                </div>
                {/*Right side items*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
