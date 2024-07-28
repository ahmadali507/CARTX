import { useContext, useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartContext, TotalPriceContext } from "@/context/context";
import { CardProps } from "../ui/CustomCard";
import { ShoppingCart, Trash2, X } from "lucide-react";
import "../../index.css";
import CouponDialog from "../ui/MyDialog";
import CheckOutDialog from "../ui/CheckOutDialog";


export function CartComponent() {
  const { cartItems, setCartItems, totalItems, settotalItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const { total, setTotal, quantitytotal, setQuantitytotal } = useContext(TotalPriceContext);

  console.log(cartItems);

  const handleClick = () => {
    setShowCart(!showCart);
  };

  const removeFromCart = (item: CardProps) => {
    const findItem = cartItems.find((cartItem) => cartItem.item.name === item.name);

    if (findItem) {
      setTotal(total - findItem.totalPrice);
      setQuantitytotal(quantitytotal - findItem.quantity);
      settotalItems(totalItems - findItem.quantity); 
      setCartItems(cartItems.filter((cartItem) => cartItem.item.name !== item.name));
    }
  };

  const incrementQuantity = (item: CardProps) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.item.name === item.name
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              totalPrice: cartItem.totalPrice + item.price,
            }
          : cartItem
      )
    );
    settotalItems(totalItems + 1);
    setQuantitytotal(quantitytotal + 1);
    setTotal(total + item.price);
  };

  const decrementQuantity = (item: CardProps) => {
    setCartItems(
      cartItems
        .map((cartItem) =>
          cartItem.item.name === item.name && cartItem.quantity > 1
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
                totalPrice: cartItem.totalPrice - item.price,
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
    settotalItems(totalItems - 1);
    setQuantitytotal(quantitytotal - 1);
    setTotal(total - item.price);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          onClick={handleClick}
          className="fixed right-12 bottom-12 bg-green-700 text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <ShoppingCart />
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className={`transition-all duration-300 ${
          showCart ? "visible opacity-100" : "invisible opacity-0"
        } bg-black p-6 rounded-lg shadow-lg`}
      >
        <SheetHeader>
          <SheetTitle className="flex justify-between items-center text-2xl font-bold text-white">
            <div>Cart</div>
            <SheetClose asChild>
              <button className="focus:outline-none">
                <X className="h-6 w-6" />
              </button>
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Review and manage the items in your cart.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-muted-foreground">
              Your cart is empty.
            </div>
          ) : (
            <div className="grid gap-4 max-h-[37vh] overflow-y-auto hide-scrollbar">
              {cartItems.map((cartItem, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-4 bg-slate-900 rounded-md p-4"
                >
                  <div className="col-span-4 font-medium text-white w-[305px]">
                    <div className="flex flex-col min-w-full border-y-2 h-36 justify-around border-slate-600">
                      <div className="pb-2">
                        <div className="font-extralight">
                          {cartItem.item.category} :{" "}
                          <span className="pl-12 font-medium text-muted-foreground">
                            {cartItem.item.name}
                          </span>
                        </div>
                        <div className=" w-full h-16 mt-1">
                          {cartItem.item.description}
                        </div>
                      </div>
                      <div className="flex flex-row justify-start  items-center pb-2">
                        <span className="text-muted-foreground min-w-32">
                          {" "}
                          BRAND: {cartItem.item.brand}
                        </span>
                        <div className="text-start py-2 min-w-44 ">
                          {" "}
                          {cartItem.quantity} X ${cartItem.totalPrice} ={" "}
                          {cartItem.quantity * cartItem.item.price}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 flex flex-row justify-between mt-2">
                    <div>
                      <Button
                        variant="outline"
                        className="bg-black text-white"
                        onClick={() => decrementQuantity(cartItem.item)}
                      >
                        <span className="font-extrabold text-xl">-</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-black text-white"
                        onClick={() => incrementQuantity(cartItem.item)}
                      >
                        <span className="font-extrabold text-xl">+</span>
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      className="bg-black text-white"
                      onClick={() => removeFromCart(cartItem.item)}
                    >
                      <Trash2 className="text-white" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <SheetDescription className="w-[90%] absolute bottom-12 right-4 border-t-2 border-slate-600 pt-2">
          <div className="text-2xl text-center text-white">
            Payment Checkout
          </div>

          <SheetFooter className="flex flex-col">
            <div className="w-full text-white">
              <div className="border-t-2 border-slate-600 mt-4 pt-4">
                <div className="flex flex-row justify-between items-center mb-2">
                  <h5 className="font-medium">SubTotal</h5>
                  <div>${total.toFixed(2)}</div>
                </div>
                <div className="flex flex-row justify-between items-center mb-2">
                  <h5 className="font-medium">Tax 5%</h5>
                  <div>${(total * 0.05).toFixed(2)}</div>
                </div>
                <div className="flex flex-row justify-between items-center mb-2">
                  <h5 className="font-medium">Charges 0%</h5>
                  <div>$0.00</div>
                </div>
                <div className="flex flex-row justify-between items-center mt-2 pt-2 border-t-2 border-slate-600">
                  <h5 className="font-medium text-xl">Total</h5>
                  <div className="font-bold text-xl">${(total * 1.05).toFixed(2)}</div>
                </div>
              </div>
              {/* <Button
                class              <CheckOutDialog
                TotalPrice = {total}
                TotalItems = {totalItems}
              />eckout}
              >
                  
                </Button> */}
              <CouponDialog/>
              <CheckOutDialog
                TotalPrice = {total}
                TotalItems = {totalItems}
             />

            </div>
          </SheetFooter>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

