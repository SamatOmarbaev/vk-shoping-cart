import { useSelector } from "react-redux";
import { TotalAmount } from "../TotalAmount/TotalAmount"

export const RightColumn = () => {
    // @ts-ignore
    const total = useSelector(state => state.cart.total);

    return (
        <section>
            <TotalAmount total={total} />
        </section>
    )
}
