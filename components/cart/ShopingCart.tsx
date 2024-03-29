
"use client"

import { useAppDispatch, useAppSelector } from "@/store";
import { incrementCount, initialCounter, sustractCount } from "@/store/reducers";
import { useEffect } from "react";

type CounterResponse = {
    count: number
}

const getCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then(res => res.json());
    return data;
}


export const ShopingCart = () => {
    const count = useAppSelector((state) => state.counterState.count);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getCounter().then(({ count }) => dispatch(initialCounter(count)))
    }, [dispatch,])



    return (
        <>
            <span className="text-2xl m-2">{count}</span>
            <div className="flex">
                <button
                    onClick={() => dispatch(sustractCount())}
                    className="text-2xl px-4 py-2 m-2 text-white hover:bg-gray-900 bg-gray-700 transition-all ease-in rounded">-1</button>
                <button
                    onClick={() => dispatch(incrementCount())}
                    className="text-2xl px-4 py-2 m-2 text-white hover:bg-gray-900 bg-gray-700 transition-all ease-in rounded">+1</button>
            </div>
        </>
    )
}
