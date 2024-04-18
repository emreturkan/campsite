import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { StarFilledIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronRightIcon,
  LocateIcon,
  MapIcon,
  MapPinIcon,
  TentIcon,
} from "@/assets/icons";

export default function Campsite() {
  return (
    <div className=" grid gap-8 py-12 px-10 ">
      <div className="flex items-center gap-8 ">
        <div className="flex items-center space-x-2 text-sm">
          <Link className="underline" href="#">
            Kamp Alanları
          </Link>
          <ChevronRightIcon className="h-3 w-3 fill-current translate-y-0.5" />
          <Link className="underline" href="#">
            California
          </Link>
          <ChevronRightIcon className="h-3 w-3 fill-current translate-y-0.5" />
          <Link className="underline" href="#">
            Santa Cruz
          </Link>
        </div>
      </div>
      <div className="flex items-start md:items-center  flex-col md:flex-row gap-4 md:gap-8">
        <div className="grid gap-2 flex-1  ">
          <div className="text-2xl font-semibold demo">
            Santa Cruz'deki Kamp alanları
          </div>
          <p className="text-gray-500 text-xs dark:text-gray-400">
            Altın Eyalet çevresindeki güzel kamp noktaları
          </p>
          <div className="flex items-center gap-1 text-sm">
            <StarFilledIcon className="w-4 h-4 text-primary" />
            <StarFilledIcon className="w-4 h-4 text-primary" />
            <StarFilledIcon className="w-4 h-4 text-primary" />
            <StarFilledIcon className="w-4 h-4 text-primary" />
            <StarFilledIcon className="w-4 h-4" />

            <span className="text-sm text-gray-500 dark:text-gray-400">{`(>1000 inceleme)`}</span>
          </div>
        </div>
        <div className="grid justify-end gap-2 flex-1 justify-self-end">
          <div className="flex items-center gap-2 text-sm">
            <LocateIcon className="w-5 h-5" />
            Santa Cruz, California, United States
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TentIcon className="w-5 h-5" />
            45 kamp alanı mevcut
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 overflow-auto w-full rounded-xl   ">
        <Button className="h-auto rounded-full border" variant="secondary">
          Tüm ev
        </Button>
        <Button className="h-auto rounded-full border" variant="secondary">
          Havuz
        </Button>
        <Button className="h-auto rounded-full border" variant="secondary">
          Ücretsiz otopark
        </Button>
        <Button className="h-auto rounded-full border" variant="secondary">
          Evcil hayvanlara izin veriliyor
        </Button>
        <Button className="h-auto rounded-full border" variant="secondary">
          Klima
        </Button>
      </div>
      <section className="grid md:grid-cols-12 gap-6 items-start">
        <div className="lg:grid gap-6 md:col-span-3 hidden">
          <div className="grid gap-4">
            <Card>
              <Accordion type="single" defaultValue="location" collapsible>
                <AccordionItem value="location">
                  <AccordionTrigger>
                    <CardHeader>
                      <CardTitle>Konum</CardTitle>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent>
                      <form>
                        <Input
                          className="border-gray-200 focus:!ring-0"
                          placeholder="Ara"
                          type="search"
                        />
                      </form>
                      <div className="grid gap-1.5 mt-2">
                        <Label
                          className="cursor-pointer flex items-center gap-2"
                          htmlFor="san-francisco"
                        >
                          <Checkbox id="san-francisco" />
                          San Francisco, California
                        </Label>
                        <Label
                          className="cursor-pointer flex items-center gap-2"
                          htmlFor="new-york"
                        >
                          <Checkbox id="new-york" />
                          New York, New York
                        </Label>
                        <Label
                          className="cursor-pointer flex items-center gap-2"
                          htmlFor="los-angeles"
                        >
                          <Checkbox id="los-angeles" />
                          Los Angeles, California
                        </Label>
                        <Label
                          className="cursor-pointer flex items-center gap-2"
                          htmlFor="miami"
                        >
                          <Checkbox id="miami" />
                          Miami, Florida
                        </Label>
                        <Label
                          className="cursor-pointer flex items-center gap-2"
                          htmlFor="las-vegas"
                        >
                          <Checkbox id="las-vegas" />
                          Las Vegas, Nevada
                        </Label>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" className="w-full" variant="outline">
                        Temizle
                      </Button>
                    </CardFooter>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
            <Card>
              <Accordion type="single" defaultValue="price" collapsible>
                <AccordionItem value="price">
                  <AccordionTrigger>
                    <CardHeader>
                      <CardTitle>Fiyat aralığı</CardTitle>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent>
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="price-low" />
                          Düşük ($0 - $50){"\n                          "}
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="price-med" />
                          Orta ($50 - $150){"\n                          "}
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="price-high" />
                          Yüksek ($150+){"\n                          "}
                        </Label>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" className="w-full" variant="outline">
                        Temizle
                      </Button>
                    </CardFooter>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
            <Card>
              <Accordion type="single" defaultValue="amenities" collapsible>
                <AccordionItem value="amenities">
                  <AccordionTrigger>
                    <CardHeader>
                      <CardTitle>Olanaklar</CardTitle>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent>
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="wifi" />
                          Wifi{"\n                          "}
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="breakfast" />
                          Kahvaltı
                          {"\n                          "}
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="pool" />
                          Havuz{"\n                          "}
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="beach" />
                          Sahil Kenarı
                          {"\n                          "}
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="gym" />
                          Spor Salonu
                          {"\n                          "}
                        </Label>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" className="w-full" variant="outline">
                        Temizle
                      </Button>
                    </CardFooter>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
            <Card>
              <Accordion type="single" collapsible>
                <AccordionItem value="availability">
                  <AccordionTrigger>
                    <CardHeader>
                      <CardTitle>Kullanılabilirlik</CardTitle>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent>
                    <CardContent>
                      <div className="grid gap-2">
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="availability-today" />
                          Bugün
                          {"\n                          "}
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="availability-this-week" />
                          Bu hafta
                          {"\n                          "}
                        </Label>
                        <Label className="flex items-center gap-2 font-normal">
                          <Checkbox id="availability-this-month" />
                          Bu ay
                          {"\n                          "}
                        </Label>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" className="w-full" variant="outline">
                        Temizle
                      </Button>
                    </CardFooter>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-3 border p-4 rounded-lg gap-4">
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="camping" />
                Kampçılık
                {"\n                  "}
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="glamping" />
                Glamping{"\n                  "}
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="rv" />
                RV{"\n                  "}
              </Label>
              <Label className="flex items-center gap-2 font-normal">
                <Checkbox id="treehouse" />
                Ağaç Ev
                {"\n                  "}
              </Label>
            </div>
            <Button className="w-full" size="lg">
              Filtreleri uygula
            </Button>
          </div>
        </div>
        <div className="grid gap-6 col-span-9">
          <div className="flex items-center gap-4 px-6">
            <div className="flex items-center gap-0.5">
              <MapIcon className="w-4 h-4" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Santa Cruz, California, United States
              </span>
            </div>
            <div className="flex items-center gap-0.5">
              <TentIcon className="w-4 h-4" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                45 kamp alanı mevcut
              </span>
            </div>
            <div className="ml-auto shrink-0">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Şuna göre sırala" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="azalan-fiyat">Azalan Fiyat</SelectItem>
                    <SelectItem value="artan-fiyat">Artan Fiyat</SelectItem>
                    <SelectItem value="favoriler">Favoriler</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <section className="py-10 lg:py-16 xl:py-20 2xl:py-6">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:gap-10">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  <Card>
                    <Link
                      className=" inset-0 z-10 rounded-lg overflow-hidden"
                      href="#"
                    >
                      <span className="sr-only">Görünüm</span>
                    </Link>
                    <Image
                      alt="Cover image"
                      className="aspect-video object-cover rounded-lg"
                      height={300}
                      src="/placeholder.svg"
                      width={500}
                    />
                    <CardContent className="p-4 lg:p-6 flex flex-col gap-2">
                      <h3 className="font-semibold tracking-tight">
                        Big Sur Kamp Alanı
                      </h3>
                      <div className="flex-1 flex items-center gap-2 text-sm">
                        <MapPinIcon className="w-4 h-4 text-primary " />
                        Big Sur, California
                      </div>
                      <div className="flex items-center gap-4 lg:gap-2 xl:gap-4">
                        <div className="flex flex-col gap-0.5 text-sm">
                          <div className="text-2xl font-semibold tracking-tighter">
                            $50
                          </div>
                          <div className="text-xs underline underline-offset-0">
                            Gece başına
                          </div>
                        </div>
                        <Separator
                          className="h-auto max-h-10 border-color"
                          orientation="vertical"
                        />
                        <div className="flex flex-col gap-0.5 text-sm">
                          <div className="text-2xl font-semibold tracking-tighter">
                            4.5
                          </div>
                          <div className="flex items-center gap-1.5">
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <Link
                      className=" inset-0 z-10 rounded-lg overflow-hidden"
                      href="#"
                    >
                      <span className="sr-only">View</span>
                    </Link>
                    <Image
                      alt="Cover image"
                      className="aspect-video object-cover rounded-lg"
                      height={300}
                      src="/placeholder.svg"
                      width={500}
                    />
                    <CardContent className="p-4 lg:p-6 flex flex-col gap-2">
                      <h3 className="font-semibold tracking-tight">
                        Yosemite Valley Campground
                      </h3>
                      <div className="flex-1 flex items-center gap-2 text-sm">
                        <MapPinIcon className="w-4 h-4 text-primary" />
                        Yosemite Valley, California
                      </div>
                      <div className="flex items-center gap-4 lg:gap-2 xl:gap-4">
                        <div className="flex flex-col gap-0.5 text-sm">
                          <div className="text-2xl font-semibold tracking-tighter">
                            $75
                          </div>
                          <div className="text-xs underline underline-offset-0">
                            Gece başına
                          </div>
                        </div>
                        <Separator
                          className="h-auto max-h-10 border-color"
                          orientation="vertical"
                        />
                        <div className="flex flex-col gap-0.5 text-sm">
                          <div className="text-2xl font-semibold tracking-tighter">
                            4.8
                          </div>
                          <div className="flex items-center gap-1.5">
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <Link
                      className=" inset-0 z-10 rounded-lg overflow-hidden"
                      href="#"
                    >
                      <span className="sr-only">View</span>
                    </Link>
                    <Image
                      alt="Cover image"
                      className="aspect-video object-cover rounded-lg"
                      height={300}
                      src="/placeholder.svg"
                      width={500}
                    />
                    <CardContent className="p-4 lg:p-6 flex flex-col gap-2">
                      <h3 className="font-semibold tracking-tight">
                        Joshua Tree Campground
                      </h3>
                      <div className="flex-1 flex items-center gap-2 text-sm">
                        <MapPinIcon className="w-4 h-4 text-primary" />
                        Joshua Tree, California
                      </div>
                      <div className="flex items-center gap-4 lg:gap-2 xl:gap-4">
                        <div className="flex flex-col gap-0.5 text-sm">
                          <div className="text-2xl font-semibold tracking-tighter">
                            $60
                          </div>
                          <div className="text-xs underline underline-offset-0">
                            Gece başına
                          </div>
                        </div>
                        <Separator
                          className="h-auto max-h-10 border-color"
                          orientation="vertical"
                        />
                        <div className="flex flex-col gap-0.5 text-sm">
                          <div className="text-2xl font-semibold tracking-tighter">
                            4.7
                          </div>
                          <div className="flex items-center gap-1.5">
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <Link
                      className=" inset-0 z-10 rounded-lg overflow-hidden"
                      href="#"
                    >
                      <span className="sr-only">Görünüm</span>
                    </Link>
                    <Image
                      alt="Cover image"
                      className="aspect-video object-cover rounded-lg"
                      height={300}
                      src="/placeholder.svg"
                      width={500}
                    />
                    <CardContent className="p-4 lg:p-6 flex flex-col gap-2">
                      <h3 className="font-semibold tracking-tight">
                        Lake Tahoe Campground
                      </h3>
                      <div className="flex-1 flex items-center gap-2 text-sm">
                        <MapPinIcon className="w-4 h-4 text-primary" />
                        Lake Tahoe, California
                      </div>
                      <div className="flex items-center gap-4 lg:gap-2 xl:gap-4">
                        <div className="flex flex-col gap-0.5 text-sm">
                          <div className="text-2xl font-semibold tracking-tighter">
                            $90
                          </div>
                          <div className="text-xs underline underline-offset-0">
                            Gece başına
                          </div>
                        </div>
                        <Separator
                          className="h-auto max-h-10 border-color"
                          orientation="vertical"
                        />
                        <div className="flex flex-col gap-0.5 text-sm">
                          <div className="text-2xl font-semibold tracking-tighter">
                            4.9
                          </div>
                          <div className="flex items-center gap-1.5">
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3 text-primary" />
                            <StarFilledIcon className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
