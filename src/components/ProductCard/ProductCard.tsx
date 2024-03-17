import { Card, Div, Paragraph, Title, Button, ButtonGroup, Image } from "@vkontakte/vkui";
import { CartProduct } from "../../types/productsType"
import './styles.css'

interface ProductCardProps {
    product: CartProduct;
    onDecrement: (value: number) => void;
    onDelete: (value: number) => void;
    onIncrement: (value: number) => void;
}

export const ProductCard = (props: ProductCardProps) => {
    const { product, onDecrement, onDelete, onIncrement } = props;

    return (
        <Card mode="outline-tint">
            <Div className="cardDiv">
                <Div className='imgContainer'>
                    <Image 
                        src={product.image} 
                        alt={product.title} 
                        size={118}
                        noBorder
                    />
                </Div>
                <Title Component={'h3'} className='title'>{product.title}</Title>
                <Paragraph Component={'p'} className='desc'>{product.description}</Paragraph>
                <Paragraph Component={'p'}>
                    Цена: <strong>{product.price}</strong> руб.
                </Paragraph>
                <Paragraph Component={'p'}>Количество: {product.quantity}</Paragraph>
                <ButtonGroup mode="horizontal" gap="s" className="btns">
                    <Button mode="outline" onClick={() => onDecrement(product.id)}>-</Button>
                    <Button mode="outline" onClick={() => onIncrement(product.id)}>+</Button>
                    <Button mode="primary" onClick={() => onDelete(product.id)}>Удалить</Button>
                </ButtonGroup>
            </Div> 
        </Card>
    );
};