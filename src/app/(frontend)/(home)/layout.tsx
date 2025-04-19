import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SearchFilters } from '@/components/search-filters'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

interface LayoutProps {
  children: React.ReactNode
}
const Layout = async ({ children }: LayoutProps) => {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({
    collection: 'category',
    pagination: false,
    depth: 1,
    where: {
      parent: {
        exists: false,
      },
    },
  })

  console.log('DATA: ', data)

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <SearchFilters data={data.docs} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
