import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps{
    product: IProduct
}
export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false);
    const btnBgClaccName = details? "bg-yellow-400": "bg-blue-400";
    const btnClasses = ["py-2 px-4 border ", btnBgClaccName]
    return (
        <div className="border py-2 px-4 rounded flex flex-col mb-2 items-center">
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button onClick={() => { setDetails (prev=>!prev) }}
            className={btnClasses.join(" ")}
            >{details? "Hide": "Show Details"}</button>
            {details && <div className="">
                <p>{product.description}</p>
            </div>}
            </div>
    )
}