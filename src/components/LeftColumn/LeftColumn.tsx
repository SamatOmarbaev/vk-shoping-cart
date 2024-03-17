import { useDispatch } from "react-redux";
import { ProductList } from "../ProductsList/ProductsList"
import { decrement, deleteProduct, increment } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";

export const LeftColumn = () => {
    // @ts-ignore
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const handleIncrement = (id: number) => {
        dispatch(increment(id));
    };

    const handleDecrement = (id: number) => {
        dispatch(decrement(id));
    };

    const handleDelete = (id: number) => {
        dispatch(deleteProduct(id));
    };

    return (
        <section>
            <ProductList
                products={products}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
            />
        </section>
    )
}
