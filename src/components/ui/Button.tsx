'use client'

export default function Button({ children, redirectTo, className = "" }: { children: React.ReactNode; redirectTo?: string; className?: string; }) {
   return (
      <button onClick={() => redirectTo && (window.location.href = redirectTo)} className={`text-[var(--secondary)] bg-[var(--primary)] hover:bg-[var(--primary-hover)] px-4 py-2 cursor-pointer ${className}`}>
         {children}
      </button>
   )
}
