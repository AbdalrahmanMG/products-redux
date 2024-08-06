import Card from "../components/Card";
import { ICart } from "../interfaces";
import { useEffect } from "react";
import { getProductList, productsSelector } from "../app/features/products/productsSlice";
import { useAppDispatch } from "../app/store";
import { useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const {data, loading} = useSelector(productsSelector)

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  if(loading) return <h3>Loading...</h3>

  return (
    <section className="max-w-4xl mx-auto flex flex-wrap">
      {data.map((product: ICart) => {
        return <Card key={product.id} product={product} />;
      })}
    </section>
  );
};

export default HomePage;
