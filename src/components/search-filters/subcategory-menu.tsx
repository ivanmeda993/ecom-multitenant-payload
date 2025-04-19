import { Category } from '@/payload-types'
import { checkCollection, checkForSubcategories } from '@/lib/check-category'
import Link from 'next/link'

interface SubcategoryMenuProps {
  category: Category
  isOpen: boolean
  position: { top: number; left: number }
}
export const SubcategoryMenu = ({ category, isOpen, position }: SubcategoryMenuProps) => {
  const hasSubcategories = checkForSubcategories(category)

  if (!isOpen || !hasSubcategories) {
    return null
  }

  const bgColor = category.color || '#F5F5F5'
  return (
    <div className="fixed z-[100] drop-shadow-2xl shadow-xl border-primary" style={{ ...position }}>
      <div className="h-3 w-52" />
      <div
        className="w-52 text-black rounded-md overflow-hidden drop-shadow-xl shadow-xl -translate-x-[2px] -translate-y-[2px] "
        style={{ backgroundColor: bgColor }}
      >
        <div>
          {category.subcategories?.docs?.map((subcategory) => {
            const isCategory = checkCollection(subcategory)
            if (!isCategory) return null

            return (
              <Link
                key={subcategory.id}
                href="/"
                className="w-full text-left px-3 py-2 hover:bg-black hover:text-white flex justify-between items-center hover:underline font-medium"
              >
                {subcategory.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
