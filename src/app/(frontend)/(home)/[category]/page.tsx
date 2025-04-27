type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};
const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = await params;
  return <div>CategoryPage {category}</div>;
};

export default CategoryPage;
