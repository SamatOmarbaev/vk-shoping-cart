import { List } from "@vkontakte/vkui";
import { CartProduct } from "../../types/productsType";
import { ProductCard } from "../ProductCard/ProductCard";
import './styles.css'

interface ProductListProps {
    products: CartProduct[];
    onIncrement: (value: number) => void;
    onDecrement: (value: number) => void;
    onDelete: (value: number) => void;
}

export const ProductList = (props: ProductListProps) => {
    const { products, onIncrement, onDecrement, onDelete } = props;

    return (
        <List className='productsList'>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
                />
            ))}
        </List>
    );
};