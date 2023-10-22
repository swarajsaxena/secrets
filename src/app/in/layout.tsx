import Sidebar from '@/components/Sidebar'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang='en'>
    <div className='flex h-full'>
      <Sidebar />
      {children}
    </div>
  )
}
