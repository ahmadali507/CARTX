/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/AVxnCcfebSV
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Arimo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {Link} from "react-router-dom"

export function SuccessPayment() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
          <CheckIcon className="h-8 w-8 text-white" />
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Payment Successful</h1>
        <p className="mt-4 text-muted-foreground">
          Thank you for your payment. Your transaction was completed successfully.
        </p>
      </div>
      <div className="mt-8 w-full max-w-md rounded-lg border bg-card p-6 shadow-md">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 items-center">
            <p className="text-muted-foreground">Amount:</p>
            <p className="text-right font-medium">$49.99</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p className="text-muted-foreground">Payment Method:</p>
            <p className="text-right font-medium">Visa ending in 4242</p>
          </div>
          <div className="grid grid-cols-2 items-center">
            <p className="text-muted-foreground">Transaction ID:</p>
            <p className="text-right font-medium">12345678</p>
          </div>
        </div>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

function CheckIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function XIcon(props : React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
