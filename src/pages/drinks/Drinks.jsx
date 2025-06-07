import ProductsPageLayout from "../../components/ProductsPageLayout/ProductsPageLayout";

const DrinksPage = ({onAddToCart, onMoreClick}) => {
  return (
    <ProductsPageLayout category={'milk'} onAddToCart={onAddToCart} onMoreClick={onMoreClick} />  
  );
};
 
export default DrinksPage;