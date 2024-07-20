import { addProductToCard } from "../app/features/cart/cartSlice";
import { useAppDispatch } from "../app/store";
import { ICart } from "../interfaces";
import Button from "./ui/Button";

interface IProps {
  product: ICart;
}

const Card = ({ product }: IProps) => {
  const dispatch = useAppDispatch()
  return (
    <div className="w-1/4">
      <div className="m-1 shadow-lg rounded-md">
        <div className="p-2 h-80 flex flex-col space-y-2">
          <div className="h-2/3 overflow-hidden shadow-md rounded-md flex justify-center items-center">
            <img className="h-full object-cover" src={product.img} alt={product.name} />
          </div>
          <p>{product.name}</p>
          <p className="text-lg font-bold">
            {product.price} <span className="text-sm font-normal">10% off</span>
          </p>
          <Button onClick={()=> dispatch(addProductToCard(product))}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
