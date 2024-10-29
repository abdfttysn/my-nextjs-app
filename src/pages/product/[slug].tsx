import { useRouter } from "next/router";

const ProductDetailPage = () => {
  const {query} = useRouter();
  return (
    <div>
      <div>
        Product: {query.slug} 
      </div>
    </div>
  );
}

export default ProductDetailPage;