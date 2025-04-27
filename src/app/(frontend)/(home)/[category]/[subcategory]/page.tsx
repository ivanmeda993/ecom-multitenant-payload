interface SubCategoryPageProps {
  params: {
    category: string;
    subcategory: string;
  };
}
const SubCategoryPage = ({ params }: SubCategoryPageProps) => {
  const { category, subcategory } = params;
  return (
    <div>
      SubCategoryPage {category}, sub {subcategory}
    </div>
  );
};

export default SubCategoryPage;
