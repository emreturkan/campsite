"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { Link } from "next-view-transitions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Component() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,

    slidesToScroll: 4,
  };
  return (
    <div>
      <section className="w-full pt-6 md:pt-12 lg:py-24">
        <div className="container grid items-center gap-4 px-4 sm:px-6 md:gap-10 lg:grid-cols-2 lg:px-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tighter lg:tracking-tight sm:text-5xl md:text-6xl/none">
              Kamp Alanında Evinde Gibisin.
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Türünün tek örneği evlerden otellere kadar her şey için Campsite
              konforuyla rezervasyon yapın. Sahile yakın, dağlarda ve şehrin
              kalbinde konaklamalar bulun.
            </p>
          </div>
          <div className="mx-auto aspect-video rounded-xl overflow-hidden object-cover object-center">
            <Image
              alt="Hero"
              src="/img5.webp"
              style={{
                aspectRatio: "700/400",
                objectFit: "cover",
              }}
              width="700"
              height="500"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-24 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Öne çıkan yerler
            </h2>
            <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Campsite tarafından özenle seçilmiş ve küratörlüğü yapılmış,
              konaklamak için muhteşem yerler.
            </p>
          </div>
          <div className="w-[1300px] relative">
            <Slider {...settings} className="slider-container">
              <div className="slide-item selection:none">
                <Image
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="200"
                  src="/img1.webp"
                  width="400"
                />
              </div>
              <div className="slide-item">
                <Image
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="200"
                  src="/img2.webp"
                  width="400"
                />
              </div>
              <div className="slide-item">
                <Image
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="200"
                  src="/img3.webp"
                  width="400"
                />
              </div>
              <div className="slide-item">
                <Image
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="200"
                  src="/img4.webp"
                  width="400"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="w-full container py-12 md:py-24 lg:py-16 border-t">
        <Link href={"/campsite"} className="flex justify-end my-4">
          <Button className="rounded-full gap-1 p-3 border bg-gradient-to-r from-orange-500 to-orange-800 text-white">
            <ChevronRightIcon className="w-5 h-5" />
            <span>All Campsite</span>
          </Button>
        </Link>
        <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          <Card className="overflow-visible">
            <Link href="/campsite/1">
              <div className="aspect-card overflow-hidden rounded-t-lg">
                <img
                  alt="Image"
                  className="aspect-card object-cover"
                  height={300}
                  src="/img1.webp"
                  width={400}
                />
              </div>
              <CardHeader className="p-4 flex flex-col gap-2">
                <CardTitle className="text-xl font-semibold demo">
                  Campsites in Santa Cruz
                </CardTitle>
                <CardDescription className="text-sm">
                  Perfect for nature lovers. Surrounded by trees, with hiking
                  trails nearby.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 !fill-yellow-400" />
                  <StarIcon className="w-4 h-4 fill-yellow-400" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4" />
                  <span className="text-xs ml-auto">5 reviews</span>
                </div>
                <div className="text-2xl font-semibold tracking-tighter">
                  $120
                  <span className="text-sm font-normal">/ night</span>
                </div>
              </CardContent>
            </Link>
          </Card>
          <Card className="overflow-visible">
            <Link href="/campsite/2">
              <div className="aspect-card overflow-hidden rounded-t-lg">
                <img
                  alt="Image"
                  className="aspect-card object-cover"
                  height={300}
                  src="/img4.webp"
                  width={400}
                />
              </div>
              <CardHeader className="p-4 flex flex-col gap-2">
                <CardTitle className="text-xl font-semibold">
                  Beachfront Paradise
                </CardTitle>
                <CardDescription className="text-sm">
                  Wake up to stunning ocean views. This beautiful villa is steps
                  away from the beach.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <span className="text-xs ml-auto">10 reviews</span>
                </div>
                <div className="text-2xl font-semibold tracking-tighter">
                  $350
                  <span className="text-sm font-normal">/ night</span>
                </div>
              </CardContent>
            </Link>
          </Card>
          <Card className="overflow-visible">
            <Link href="/campsite/3">
              <div className="aspect-card overflow-hidden rounded-t-lg">
                <img
                  alt="Image"
                  className="aspect-card object-cover"
                  height={300}
                  src="/img3.webp"
                  width={400}
                />
              </div>
              <CardHeader className="p-4 flex flex-col gap-2">
                <CardTitle className="text-xl font-semibold">
                  Mountain View Retreat
                </CardTitle>
                <CardDescription className="text-sm">
                  Peaceful and serene. This rental offers breathtaking views of
                  the mountains.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <span className="text-xs ml-auto">8 reviews</span>
                </div>
                <div className="text-2xl font-semibold tracking-tighter">
                  $300
                  <span className="text-sm font-normal">/ night</span>
                </div>
              </CardContent>
            </Link>
          </Card>
          <Card className="overflow-visible">
            <Link href="/campsite/4">
              <div className="aspect-card overflow-hidden rounded-t-lg">
                <img
                  alt="Image"
                  className="aspect-card object-cover"
                  height={300}
                  src="/img2.webp"
                  width={400}
                />
              </div>
              <CardHeader className="p-4 flex flex-col gap-2">
                <CardTitle className="text-xl font-semibold">
                  Modern City Apartment
                </CardTitle>
                <CardDescription className="text-sm">
                  Located in the heart of the city. Stylish and comfortable with
                  all the amenities.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <StarIcon className="w-4 h-4 fill-primary" />
                  <span className="text-xs ml-auto">12 reviews</span>
                </div>
                <div className="text-2xl font-semibold tracking-tighter">
                  $250
                  <span className="text-sm font-normal">/ night</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container flex flex-col items-center justify-center space-y-4 text-center md:space-y-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Yolculuğunuz tek bir adımla başlar
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hadi evinizi bulalım. Almak için varış noktanızı ve tarihleri
              girin başladı.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="E-posta adresinizi girin"
                type="email"
              />
              <Button type="submit">Kayıt Ol</Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Başladığımızda haberdar olmak için kaydolun.
              <Link className="underline underline-offset-2" href="#">
                Şartlar & Koşullar
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LogOutIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TentIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 20 10 4" />
      <path d="m5 20 9-16" />
      <path d="M3 20h18" />
      <path d="m12 15-3 5" />
      <path d="m12 15 3 5" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function TreesIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  );
}
