import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from './button';
import { Input } from './input';
import { Label } from '@radix-ui/react-label';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PZJNaDJuXMaBWwvaVH9rpEbJayHEH5fYIkT9PGep4kRvjRZYpfEG4BJPgCMlD3OyaE1ksAQlj5U5OcqppqcqnEg00NoCjlzdv'); // Add your Stripe publishable key

type CouponDialogT = {
  TotalPrice: number,
  TotalItems: number,
}

const CheckOutDialog: React.FC<CouponDialogT> = ({ TotalPrice, TotalItems } ) => {
  const [couponCode, setCouponCode] = useState('');
  const [message] = useState('');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const requestURL = 'https://cartx-api.vercel.app/create-checkout-session';
        const requestData = {
            totalItems: TotalItems,
            totalPrice: TotalPrice,
            couponCode: couponCode, // Convert dollars to cents
        };

        const response = await axios.post(requestURL, requestData);
        if (!response) {
            console.log('ERROR OCCURRED');
            return;
        }

        const { id } = response.data;
        const stripe = await stripePromise;

        if (!stripe) {
            console.error('Stripe has not loaded');
            return;
        }

        const result = await stripe.redirectToCheckout({
            sessionId: id,
        });

        if (result.error) {
            console.error('Stripe Checkout Error:', result.error.message);
        }
    } catch (error) {
        console.log('SOME ERROR OCCURRED', error);
    }
};

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="mt-4 bg-green-600 w-full text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            variant="outline"
          >
            Apply Coupon Code
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter Coupon Code</DialogTitle>
            <DialogDescription>
              Enter your coupon code to apply the discount.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCheckout} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="couponCode" className="text-right">
                Coupon Code
              </Label>
              <Input
                id="couponCode"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit">Apply Coupon</Button>
            </DialogFooter>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CheckOutDialog;
