import { span } from 'motion/react-client';
import React from 'react'

const MagicButton = ({ title, icon, position, handleClick, otherClasses }: { title: string; icon?: React.ReactNode; position?: string; handleClick?: () => void; otherClasses?: string }) => {
  return (
    <button className={`relative inline-flex h-12 w-42 md:w-60 overflow-hidden rounded-lg p-[1px]  ${otherClasses || ''}`} onClick={handleClick}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer gap-2 items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {position == 'left' && <span className="mr-2">{icon}</span>}
        { <span className='text-base tracking-wider '>{title}</span> }
        {position == 'right' && <span className="ml-2">{icon}</span>}
      </span>
    </button>
  )
}

export default MagicButton