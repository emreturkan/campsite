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
import {
  AccessibilityIcon,
  AwardIcon,
  CalendarCheckIcon,
  CameraIcon,
  CarIcon,
  ChefHatIcon,
  ChevronRightIcon,
  HeartIcon,
  MapPinIcon,
  MedalIcon,
  MountainSnowIcon,
  ShareIcon,
  WavesIcon,
  WifiIcon,
} from "@/assets/icons";

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
