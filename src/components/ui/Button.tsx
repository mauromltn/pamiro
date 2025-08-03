export default function Button({ children, className = "" }: { children: React.ReactNode; className?: string; }) {
   return (
      <button className={`bg-[var(--primary)] hover:bg-[var(--primary-hover)] px-4 py-2 cursor-pointer ${className}`}>
         {children}
      </button>
   )
}
