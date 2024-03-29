

import { ShopingCart } from "@/components/cart/ShopingCart";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Shoping Cart',
    description: 'Quaerat beatae perferendis aut fugiat ipsa magnam quia.'
}

export default function CounterPage() {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-3xl">Productos en el Carrito</h2>
            <ShopingCart />
        </div>
    );
}