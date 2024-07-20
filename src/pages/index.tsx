import Card from "../components/Card";
import { products } from "../data/products";
import { ICart } from "../interfaces";

const HomePage = () => {
  return (
    <section className="max-w-4xl mx-auto flex flex-wrap">
      {products.map((product: ICart) => {
        return <Card key={product.id} product={product} />;
      })}
    </section>
  );
};

export default HomePage;
