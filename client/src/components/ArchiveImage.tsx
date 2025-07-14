export function ArchiveImage({ children, src }: { children: React.ReactNode; src: string }) {
  return (
    <div className='w-full h-dvh flex items-center justify-center relative '>
      {children}
      <img src={src} alt={src} className='w-full h-full object-cover' />
    </div>
  )
}
