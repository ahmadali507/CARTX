import { SVGProps } from "react"
import { Link } from "react-router-dom"
import { Typewriter } from 'react-simple-typewriter'
import Footer from "./Footer"
import Navbar from "./Navbar"

export function About() {
  return (
    <div className="flex flex-col min-h-[100dvh] dark:bg-black bg-gray-100">
      <Navbar />
      <section className="w-full py-12 md:py-24 lg:py-32 border-b-4  border-gray-500 bg-black">
        <div className="container px-4 md:px-6 text-primary-foreground dark:text-gray-200">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-white">
                  <Typewriter
                    words={['Exceptional Shopping Experiences']}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <p className="max-w-[600px] text-primary-foreground/80 dark:text-gray-400 md:text-xl">
                  At CartX, our mission is to provide our customers with an unparalleled shopping experience, offering a
                  wide selection of high-quality products, fast and reliable shipping, and unwavering commitment to
                  customer satisfaction.
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-slate-900 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-gray-700 bg-gray-300">
                Our Goals
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
                <Typewriter
                  words={['Delivering Excellence']}
                  loop={false}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-slate-300">
                At CartX, we are committed to providing our customers with an exceptional shopping experience. We offer
                a wide selection of high-quality products, fast and reliable shipping, and prioritize customer
                satisfaction above all else.
              </p>
              <ul className="grid gap-2 text-muted-foreground dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary dark:text-white" />
                  Vast selection of top-quality products
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary dark:text-white" />
                  Speedy and dependable delivery
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary dark:text-white" />
                  Unparalleled customer satisfaction
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-gray-700 bg-gray-300">
                Customer Care
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground dark:text-white">
                <Typewriter
                  words={['Dedicated to You']}
                  loop={false}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-slate-300">
                At CartX, we believe that exceptional customer care is the foundation of a truly remarkable shopping
                experience. Our responsive support team, easy returns policy, and personalized shopping assistance
                ensure that our customers feel valued and cared for every step of the way.
              </p>
              <ul className="grid gap-2 text-muted-foreground dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary dark:text-white" />
                  Responsive and knowledgeable support team
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary dark:text-white" />
                  Hassle-free returns and exchanges
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-primary dark:text-white" />
                  Personalized shopping assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-y-4 border-slate-400 bg-black ">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary-foreground dark:text-white">
              <Typewriter
                words={['Why Choose CartX?']}
                loop={false}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
              At CartX, we are dedicated to providing our customers with an unparalleled shopping experience. From our
              wide selection of high-quality products to our commitment to exceptional customer care, we strive to
              exceed your expectations at every turn.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-700 dark:text-white dark:hover:bg-primary/90"
            >
              Shop Now
            </Link>
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-700 dark:text-white dark:hover:bg-accent dark:hover:text-accent-foreground"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
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
      className="dark:stroke-white"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
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
  );
}
