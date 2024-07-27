import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

// Define Zod schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

// Define TypeScript type for form data
type ContactFormData = z.infer<typeof contactSchema>;

export function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const token = localStorage.getItem('token'); 
      console.log(token)
      const response = await axios.post("http://localhost:8000/contactus", data, {
        headers : {
          Authorization: `Bearer ${token}`,
          'Content-Type' : 'application/json',
        }
      });
      console.log("Form submitted successfully:", response.data);
      // Handle success response
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error response
    }
  };

  return (
    <div>
      <Navbar />
      <section className="bg-primary py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl text-white">Get in Touch</h1>
            <p className="text-white text-lg md:text-xl ">
              Have a question or need help? We're here to assist you.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-black">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Contact Form</h2>
              <p className="text-muted-foreground text-white">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" >Name</Label>
                  <Input
                    id="name"
                    className="text-white"
                    type="text"
                    {...register("name")}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email" >Email</Label>
                  <Input
                    id="email"
                    className="text-white"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  className = "text-white"
                  {...register("subject")}
                  placeholder="Enter the subject"
                />
                {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Enter your message"
                  className="min-h-[150px] text-white"
                />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-slate-600 hover:text-white active:bg-green-400"
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">Get in touch with us using the following details.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <LocateIcon className="mt-1 h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="font-medium text-white">CARTX Headquarters</p>
                  <p className="text-muted-foreground">123 Main Street, Anytown USA 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="mt-1 h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 555-5555</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MailIcon className="mt-1 h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-muted-foreground">support@cartx.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FacebookIcon className="mt-1 h-6 w-6 text-muted-foreground" />
                <div>
                  <p className="font-medium text-white">Social</p>
                  <div className="flex gap-4">
                    <Link to="#" className="text-muted-foreground hover:text-primary">
                      <FacebookIcon className="h-10 w-10 mt-2  text-white" />
                    </Link>
                    <Link to="#" className="text-muted-foreground hover:text-primary">
                      <TwitterIcon className="h-10 w-10 mt-2  text-white" />
                    </Link>
                    <Link to="#" className="text-muted-foreground hover:text-primary">
                      <InstagramIcon className="h-10 w-10 mt-2  text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-muted py-6 text-muted-foreground">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <p className="text-sm">&copy; 2024 CARTX. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-sm hover:underline" >
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm hover:underline" >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LocateIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
