interface SubCategoryPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}
const SubCategoryPage = async ({ params }: SubCategoryPageProps) => {
  const { category, subcategory } = await params;
  return (
    <div>
      SubCategoryPage {category}, sub {subcategory}
    </div>
  );
};

export default SubCategoryPage;
