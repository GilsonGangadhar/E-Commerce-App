import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import {addToBasket, removeFromBasket} from "../slices/basketSlice"

function CheckoutProduct({product}) {

    const dispatch = useDispatch()

    const addItemToBasket = (product) => {
        const item = product 
        console.log(item, "againAddItem")
        dispatch(addToBasket(item))
    }

    const removeItemFromBasket = (id) => {
        console.log(id, "removeItems")
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={product.image} height={200} width={200} objectFit="contain" />

            {/* middle section */}
            <div className="col-span-3 mx-5">
                    <p>{product.title}</p>
                    <div className="flex">
                        {Array(product.rating).fill().map((_,i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))
                        }
                    </div>

                    <p className="text-xs my-2 line-clamp-3">{product.description}</p>
                    <Currency quantity={product.price} Currency="USD" />

                    {product.hasPrime && (
                        <div className="flex items-center space-x-2">
                            <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt=""/>
                            <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
                        </div>
                    )}
            </div>
            
            {/* add and remove button */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={() => addItemToBasket(product)} className="button">Add to Basket</button>
                <button onClick={()=> removeItemFromBasket(product.id)} className="button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
