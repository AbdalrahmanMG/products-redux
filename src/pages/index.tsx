import { Fragment } from "react/jsx-runtime";
import Card from "../components/Card";
import { products } from "../data/products";

const HomePage = () => {
  return (
    <section className="max-w-4xl mx-auto flex flex-wrap">
      {products.map((product) => {
        return (
          <Fragment key={product.id}>
            <Card product={product} />
          </Fragment>
        );
      })}
    </section>
  );
};

export default HomePage;
