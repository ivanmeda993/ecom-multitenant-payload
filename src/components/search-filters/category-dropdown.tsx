'use client'
import { Category } from '@/payload-types'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useQueryState } from 'nuqs'
import { useRef, useState } from 'react'
import { useDropdownPosition } from '@/components/search-filters/use-dropdown-position'
import { SubcategoryMenu } from '@/components/search-filters/subcategory-menu'
import { checkForSubcategories } from '@/lib/check-category'

interface CategoryDropdownProps {
  category: Category
  isNavigationHovered?: boolean
}
export const CategoryDropdown = ({ category, isNavigationHovered }: CategoryDropdownProps) => {
  const [categorySlug, setCategorySlug] = useQueryState('categorySlug')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const { getDropdownPosition } = useDropdownPosition(dropdownRef)

  const hasSubcategories = checkForSubcategories(category)

  const onMouseEnter = () => hasSubcategories && setIsOpen(true)
  const onMouseLeave = () => setIsOpen(false)

  const dropdownPosition = getDropdownPosition()

  console.log('IS OPEN')
  return (
    <div
      className="relative "
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <Button
          className={cn(
            'rounded-lg transition-all duration-100 ease-in-out px-2 py-1',
            categorySlug === category.slug && 'font-bold',
            isNavigationHovered && 'text-primary-foreground',
            categorySlug === category.slug && 'border-primary  scale-105 underline',
          )}
          variant="link"
          onClick={() => setCategorySlug(category.slug ?? '')}
        >
          {category.name}
        </Button>
        {hasSubcategories && isOpen && (
          <div
            className={cn(
              'opacity-0 absolute -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2',
              isNavigationHovered && 'border-b-primary-foreground',
              isOpen && 'opacity-100',
            )}
          />
        )}
      </div>

      <SubcategoryMenu category={category} isOpen={isOpen} position={dropdownPosition} />
    </div>
  )
}
