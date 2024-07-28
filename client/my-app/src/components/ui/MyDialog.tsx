import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from './button';
import { Input } from './input';
import { Label } from '@radix-ui/react-label';

const CouponDialog = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/generate-coupon', { name, email });
      console.log(response)
      if (response.data) {
        setMessage(`Coupon code has been sent to your email!`);
      } else {
        setMessage('Failed to generate coupon code. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred while generating the coupon code. Please try again.');
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
            Generate Coupon Code
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter Details</DialogTitle>
            <DialogDescription>
              Enter your details and hit the generate button to receive a coupon code via email.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit">Request Email</Button>
            </DialogFooter>
          </form>
          {message && <p className="mt-4 text-center">{message}</p>}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CouponDialog;
