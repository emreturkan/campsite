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
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { Link } from "next-view-transitions";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Component() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div>
      <section className="w-full pt-6 md:pt-12 lg:py-24">
        <div className=" grid items-center gap-4 px-4 sm:px-6 md:gap-10 lg:grid-cols-2 lg:px-10">
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
        <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Öne çıkan yerler
            </h2>
            <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Campsite tarafından özenle seçilmiş ve küratörlüğü yapılmış,
              konaklamak için muhteşem yerler.
            </p>
          </div>
          <div className=" relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full "
            >
              <CarouselContent>
                <CarouselItem className="basis-1/2 lg:basis-1/4">
                  <div className="slide-item selection:none">
                    <Image
                      alt="Image"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="200"
                      src="/img1.webp"
                      width="400"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/4">
                  <div className="slide-item">
                    <Image
                      alt="Image"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="200"
                      src="/img2.webp"
                      width="400"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/4">
                  <div className="slide-item">
                    <Image
                      alt="Image"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="200"
                      src="/img3.webp"
                      width="400"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/4">
                  <div className="slide-item">
                    <Image
                      alt="Image"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="200"
                      src="/img4.webp"
                      width="400"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 lg:basis-1/4">
                  <div className="slide-item">
                    <Image
                      alt="Image"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="200"
                      src="/img2.webp"
                      width="400"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="w-full  py-12 md:py-24 lg:py-16 border-t">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Popüler kamp alanları
          </h2>
          <p className=" max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Türkiye'den gelen gezginler arasında en popüler seçenekler
          </p>
        </div>
        <Link href={"/campsite"} className="flex justify-end my-4">
          <Button className="rounded-full gap-1 p-3 border bg-primary text-background">
            <span>Tüm Kamp Alanları</span>
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </Link>
        <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          <Card className="overflow-visible">
            <Link href="/campsite/1">
              <div className="aspect-card overflow-hidden rounded-t-lg">
                <Image
                  alt="Image"
                  className="aspect-card object-cover"
                  width={500}
                  height={300}
                  src="/img1.webp"
                />
              </div>
              <CardHeader className="p-4 flex flex-col gap-2">
                <CardTitle className="text-xl font-semibold demo">
                  Campsites in Santa Cruz
                </CardTitle>
                <CardDescription className="text-sm">
                  Doğa severler için mükemmel. Ağaçlarla çevrili, yürüyüş
                  Yakınlardaki patikalar.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="w-4 h-4 text-primary " />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs ml-auto">5 inceleme</span>
                </div>
                <div className="text-2xl font-semibold tracking-tighter">
                  ₺120
                  <span className="text-sm font-normal">/ gece</span>
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
                  Muhteşem okyanus manzarasına uyanın. Bu güzel villa birkaç
                  adım sahilden uzakta.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="w-4 h-4 text-primary " />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs ml-auto">10 inceleme</span>
                </div>
                <div className="text-2xl font-semibold tracking-tighter">
                  ₺350
                  <span className="text-sm font-normal">/ gece</span>
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
                  Huzurlu ve dingin. Bu kiralama nefes kesici manzaralar
                  sunmaktadır dağlara.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="w-4 h-4 text-primary " />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs ml-auto">8 inceleme</span>
                </div>
                <div className="text-2xl font-semibold tracking-tighter">
                  ₺300
                  <span className="text-sm font-normal">/ gece</span>
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
                  Şehrin kalbinde yer almaktadır. Şık ve konforlu tüm olanaklar.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 p-4">
                <div className="flex items-center gap-2">
                  <StarFilledIcon className="w-4 h-4 text-primary " />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-primary" />
                  <StarFilledIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs ml-auto">12 inceleme</span>
                </div>
                <div className="text-2xl font-semibold tracking-tighter">
                  ₺250
                  <span className="text-sm font-normal">/ gece</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className=" flex flex-col items-center justify-center space-y-4 text-center md:space-y-10">
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
