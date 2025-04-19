import { Button } from '@/components/ui/button'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function Home() {
  const payload = await getPayload({ config: configPromise })
  const data = await payload.find({
    collection: 'category',
  })
  return (
    <div className="flex items-center justify-center h-screen">
      <Button>Test</Button>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}
