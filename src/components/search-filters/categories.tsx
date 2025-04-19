import { Category } from '@/payload-types'
import { CategoryDropdown } from '@/components/search-filters/category-dropdown'

interface CategoriesProps {
  data: Category[]
}
export const Categories = ({ data }: CategoriesProps) => {
  return (
    <div className="relative w-full">
      <div className="flex flex-nowrap items-center  ">
        {data.map((category) => (
          <div key={category.id}>
            <CategoryDropdown category={category} isNavigationHovered={false} />
          </div>
        ))}
      </div>
    </div>
  )
}
