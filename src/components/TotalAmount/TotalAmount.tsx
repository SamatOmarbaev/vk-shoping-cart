import { Paragraph } from '@vkontakte/vkui';
interface TotalAmountProps {
    total: number;
}

export const TotalAmount = ({ total }: TotalAmountProps) => {
    return (
        <Paragraph weight="1" Component={'p'}>
            Итого: сумма <strong>{total < 1 ? total = 0 : total.toFixed(2)}</strong> руб.
        </Paragraph>
    );
};