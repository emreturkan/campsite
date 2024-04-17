import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { Calendar } from "@/components/ui/calendar";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import Image from "next/image";
import { StarFilledIcon } from "@radix-ui/react-icons";

export default function Component() {
  return (
    <div className=" mx-auto p-4 lg:px-10 sm:py-8 md:py-10">
      <section className="hidden sm:flex flex-col gap-4 sm:flex-row sm:items-center pb-4 sm:pb-8">
        <h1 className="text-xl lg:text-3xl font-semibold tracking-tight">
          Tranquil Lakeside Campsite in the Heart of the Forest
        </h1>
        <nav className="flex items-center gap-1 sm:ml-auto">
          <Button
            asChild
            className="rounded-md gap-1 underline underline-offset-2"
            size="sm"
            variant="ghost"
          >
            <a href="#">
              <ShareIcon className="w-4 h-4" />
              Paylaş
            </a>
          </Button>
          <Button
            asChild
            className="rounded-md gap-1 underline underline-offset-2"
            size="sm"
            variant="ghost"
          >
            <a href="#">
              <HeartIcon className="w-4 h-4" />
              Favorilere Ekle
            </a>
          </Button>
        </nav>
      </section>
      <section className="grid grid-cols-2 gap-4">
        <Image
          alt="Hero"
          src="/img1.webp"
          style={{
            aspectRatio: "700/410",
            objectFit: "cover",
          }}
          className="rounded-lg"
          width="700"
          height="500"
        />
        <div className="grid grid-cols-2 gap-4">
          <Image
            alt="Hero"
            src="/img2.webp"
            style={{
              aspectRatio: "700/400",
              objectFit: "cover",
            }}
            className="rounded-lg"
            width="300"
            height="400"
          />
          <Image
            alt="Hero"
            src="/img3.webp"
            style={{
              aspectRatio: "700/400",
              objectFit: "cover",
            }}
            className="rounded-lg"
            width="700"
            height="400"
          />
          <Image
            alt="Hero"
            src="/img4.webp"
            style={{
              aspectRatio: "700/400",
              objectFit: "cover",
            }}
            className="rounded-lg"
            width="700"
            height="400"
          />
          <Image
            alt="Hero"
            src="/img5.webp"
            style={{
              aspectRatio: "700/400",
              objectFit: "cover",
            }}
            className="rounded-lg"
            width="700"
            height="400"
          />
        </div>
      </section>
      <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start">
        <div className="grid gap-8 row-start-2 md:row-start-auto">
          <div className="hidden md:flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">
              Ormanın Kalbindeki Kamp Alanı, Birleşik Devletler
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              4 misafirler · 1 çadır · Kamp Ateşi · Muhteşem manzaralar
            </p>
          </div>
          <Card>
            <CardContent className="p-4 sm:p-6 flex items-center gap-6 relative">
              <AwardIcon className="w-10 h-10" />
              <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
                Kampçılara göre Campsite'da en çok sevilen kamp alanlarından
                biri.
              </div>
              <div className="flex items-center gap-6 ml-auto">
                <div className="flex flex-col gap-1 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">
                    4.95
                  </div>
                  <div className="flex items-center gap-1">
                    <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                    <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                    <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                    <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                    <StarFilledIcon className="w-2.5 h-2.5" />
                  </div>
                </div>
                <Separator className="h-9" orientation="vertical" />
                <div className="flex flex-col gap-0.5 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">
                    302
                  </div>
                  <div className="text-xs underline font-semibold">
                    İncelemeler
                  </div>
                </div>
              </div>
              <Link className="absolute inset-0" href="#">
                <span className="sr-only">İncelemeleri görüntüle</span>
              </Link>
            </CardContent>
          </Card>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">
                Adventure Co tarafından düzenlendi.
              </div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                2021'de katıldı - Süper Ev Sahibi
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <CalendarCheckIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">48 saat için ücretsiz iptal</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                Fikrinizi değiştirirseniz paranızın tamamını geri alın.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <MedalIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Melek bir Süper Ev Sahibi</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                Süper ev sahipleri deneyimli, yüksek puanlı ev sahipleridir.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <MapPinIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Harika konum</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                Son konukların %100'ü konumu 5 yıldızlı olarak
                değerlendirmiştir.
              </div>
            </div>
          </div>
          <Separator />
          <div className="prose">
            <p>
              Göl kenarındaki sakin kamp alanımıza hoş geldiniz. Orman. İster
              hevesli bir kampçı olun, isterseniz de Eşsiz bir doğa deneyimi
              için kamp alanımız mükemmel bir inziva alanı sunuyor. Ormanın
              huzurlu sesleri ve muhteşem manzaraları göl sakin ve pitoresk bir
              ortam yaratır.
            </p>
            <Collapsible>
              <CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90">
                Daha fazla göster
                <ChevronRightIcon className="w-4 h-4 translate-y-px transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p>
                  Kamp alanımız bir kamp için ihtiyacınız olan her şeyle
                  donatılmıştır. konforlu ve keyifli bir konaklama. Erişiminiz
                  olacak arkadaşlarınızla bir araya gelebileceğiniz özel kamp
                  ateşi alanı altında marshmallow kızartmak ve hikayeler
                  paylaşmak için Yıldızlar. Bölge yıldızları izlemek için
                  mükemmeldir ve açık havalarda Geceleri Samanyolu'nun
                  gökyüzünde uzandığını görebilirsiniz.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <Separator />
          <div className="grid gap-8">
            <h3 className="text-xl font-semibold">Burası neler sunuyor</h3>
            <ul className="grid lg:grid-cols-2 gap-6">
              <li className="flex gap-4">
                <MountainSnowIcon className="w-6 h-6" />
                Göl Kıyısı
              </li>
              <li className="flex gap-4">
                <WavesIcon className="w-6 h-6" />
                Kamp Ateşi
              </li>
              <li className="flex gap-4">
                <ChefHatIcon className="w-6 h-6" />
                Huzur ve sessizlik
              </li>
              <li className="flex gap-4">
                <WifiIcon className="w-6 h-6" />
                Yaban hayatı gözlemciliği
              </li>
              <li className="flex gap-4">
                <CarIcon className="w-6 h-6" />
                Yürüyüş parkurları
              </li>
              <li className="flex gap-4">
                <CameraIcon className="w-6 h-6" />
                Kuş Gözlemciliği
              </li>
              <li className="flex gap-4">
                <AccessibilityIcon className="w-6 h-6" />
                Yıldız Gözlemciliği
              </li>
            </ul>
            <Button className="justify-self-start" variant="outline">
              Tüm olanakları göster
            </Button>
          </div>
          <Separator />
          <div className="grid gap-8">
            <div className="grid gap-0.5">
              <h3 className="text-xl font-semibold">Bir tarih bulun</h3>
              <div className="text-gray-500 dark:text-gray-400">
                Müsaitlik durumu için seyahat tarihlerinizi seçin.
              </div>
            </div>
            <div className="sm:border p-0 sm:p-4 rounded-lg justify-self-start">
              <Calendar
                className="p-0 hidden xl:flex [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
                mode="range"
                numberOfMonths={2}
              />
              <Calendar className="flex xl:hidden p-0" />
            </div>
          </div>
        </div>
        <div className="grid gap-4 row-start-1 md:row-start-auto">
          <div className="flex sm:hidden flex-col gap-1">
            <h2 className="sm:text-2xl font-semibold">
              Ormanın Kalbindeki Kamp Alanı, Birleşik Devletler
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              4 misafirler · 1 çadır · Kamp Ateşi · Muhteşem manzaralar
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>
                ₺200
                <span className="text-sm text-gray-500 font-normal dark:text-gray-400">
                  / gece
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <form>
                <div className="grid gap-2">
                  <div className="flex gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className="w-full flex-col h-auto items-start"
                          variant="outline"
                        >
                          <span className="font-semibold uppercase text-[0.65rem]">
                            Giriş
                          </span>
                          <span className="font-normal">4/2/2024</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 max-w-[276px]">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className="w-full flex-col h-auto items-start"
                          variant="outline"
                        >
                          <span className="font-semibold uppercase text-[0.65rem]">
                            Çıkış
                          </span>
                          <span className="font-normal">10/2/2024</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="p-0 max-w-[276px]">
                        <Calendar />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Select>
                    <SelectTrigger className="h-auto">
                      <SelectValue
                        placeholder={
                          <div className="flex flex-col items-start">
                            <span className="font-semibold uppercase text-[0.65rem]">
                              Misafirler
                            </span>
                            <span className="font-normal">2 yetişkin</span>
                          </div>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 yetişkin</SelectItem>
                      <SelectItem value="2">2 yetişkin</SelectItem>
                      <SelectItem value="3">2 yetişkin + 1 çocuk</SelectItem>
                      <SelectItem value="other">Diğer</SelectItem>
                    </SelectContent>
                  </Select>
                  <div>
                    <Button className="w-full h-12" size="lg">
                      Rezerve edin
                    </Button>
                  </div>
                  <div className="text-sm text-gray-500 text-center dark:text-gray-400">
                    Henüz ücretlendirilmeyeceksiniz
                  </div>
                </div>
              </form>
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 dark:text-gray-400">
                    ₺200 x 3 gece
                  </div>
                  <div>₺600</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 dark:text-gray-400">
                    Hizmet bedeli
                    <span className="text-xs">( toplam fiyata dahildir )</span>
                  </div>
                  <div>₺100</div>
                </div>
              </div>
              <Separator />
              <div className="flex items-center gap-4">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5">
                  <div className="font-semibold">Para iadesi politikası</div>
                  <div className="text-gray-500 text-sm dark:text-gray-400">
                    48 saat için ücretsiz iptal
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Separator />
      <section className="py-10 grid gap-8">
        <div className="grid lg:grid-cols-2 gap-x-32 gap-y-12">
          <article className="grid gap-3">
            <div className="flex items-center gap-4">
              <Avatar className="w-11 h-11 border">
                <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid">
                <div className="font-semibold">Scott</div>
                <div className="text-gray-500 text-sm dark:text-gray-400">
                  Bernard Hill, California
                </div>
              </div>
            </div>
            <div className="font-semibold flex items-center text-xs gap-2">
              <div className="flex items-center gap-px">
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5" />
              </div>
              ·<span>1 hafta önce</span>
            </div>
            <div>
              Melek'in yeri muhteşemdi! Manzara inanılmazdı ve ev çok temizdi.
              Harika vakit geçirdik.
            </div>
          </article>
          <article className="grid gap-3">
            <div className="flex items-center gap-4">
              <Avatar className="w-11 h-11 border">
                <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid">
                <div className="font-semibold">Julie</div>
                <div className="text-gray-500 text-sm dark:text-gray-400">
                  Miami, California
                </div>
              </div>
            </div>
            <div className="font-semibold flex items-center text-xs gap-2">
              <div className="flex items-center gap-px">
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5" />
              </div>
              ·<span>1 hafta önce</span>
            </div>
            <div>
              Biz harika bir zaman geçirdim ve kesinlikle tekrar kalacaktı!
              Muhteşem manzaralar ve güzel bir ev.
            </div>
          </article>
          <article className="grid gap-3">
            <div className="flex items-center gap-4">
              <Avatar className="w-11 h-11 border">
                <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid">
                <div className="font-semibold">Nicole</div>
                <div className="text-gray-500 text-sm dark:text-gray-400">
                  Nevada, California
                </div>
              </div>
            </div>
            <div className="font-semibold flex items-center text-xs gap-2">
              <div className="flex items-center gap-px">
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5" />
              </div>
              ·<span>1 hafta önce</span>
            </div>
            <div>
              Bu benim ikinci kez Catherine'in evinde kalışım ve ilk seferki
              kadar muhteşemdi. Kesinlikle tekrar kalırım!
            </div>
          </article>
          <article className="grid gap-3">
            <div className="flex items-center gap-4">
              <Avatar className="w-11 h-11 border">
                <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid">
                <div className="font-semibold">Miranda</div>
                <div className="text-gray-500 text-sm dark:text-gray-400">
                  Citrus Height, California
                </div>
              </div>
            </div>
            <div className="font-semibold flex items-center text-xs gap-2">
              <div className="flex items-center gap-px">
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5 text-primary" />
                <StarFilledIcon className="w-2.5 h-2.5" />
                <StarFilledIcon className="w-2.5 h-2.5" />
              </div>
              ·<span>1 hafta önce</span>
            </div>
            <div className="">
              Süper temiz, harika bir konum ve muhteşem manzaralar. Harika bir
              gün geçirdik. zaman ve keşke daha uzun kalabilseydik!
            </div>
          </article>
        </div>
        <Button className="justify-self-start" variant="outline">
          Tüm incelemeleri göster
        </Button>
      </section>
    </div>
  );
}

function AccessibilityIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function CalendarCheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function CarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function ChefHatIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
      <line x1="6" x2="18" y1="17" y2="17" />
    </svg>
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

function MountainSnowIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
    </svg>
  );
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function WavesIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}

function WifiIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 13a10 10 0 0 1 14 0" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <line x1="12" x2="12.01" y1="20" y2="20" />
    </svg>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MedalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}
