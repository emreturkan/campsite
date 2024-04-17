import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link2Icon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Component() {
  return (
    <div className="max-w-3xl relative grid gap-8 mx-auto p-4 sm:py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tighter">
          Kamp Ekipmanları Kontrol Listesi
        </h1>

        <p className="text-gray-500 dark:text-gray-400">
          Bu kapsamlı ekipman kontrol listesi ile bir sonraki kamp maceranıza
          hazırlıklı olun. Sahip olduğunuz eşyaları işaretleyin ve ihtiyacınız
          olacak ek malzemeleri ekleyin.
        </p>
      </div>
      <Card className="grid gap-4 rounded-xl border">
        <CardContent className="p-4 grid gap-4">
          <div className="flex items-center gap-4">
            <TentIcon className="w-10 h-10" />
            <div className="grid gap-0.5">
              <h3 className="font-semibold">Barınak</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Evinizden uzaktaki eviniz.
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4 " id="tent" />
              <Label className="form-checkbox ml-2" htmlFor="tent">
                Çadır
              </Label>
              <Dialog>
                <DialogTrigger>
                  <Link2Icon />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Husky Bird 3 Plus</DialogTitle>
                    <DialogDescription>
                      <div className="flex gap-4">
                        <Image
                          src="/husky.webp"
                          className="rounded-lg"
                          height={100}
                          width={100}
                          alt="Husky Bird 3 Plus"
                        />
                        <div className="grid gap-2">
                          <h3 className="font-semibold">
                            Fiyat: <span className="text-primary">$ 1.500</span>
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Bird çadırlarının basit yapısı denenmiş ve test
                            edilmiş ve klasik olma yolunda yavaşça
                            ilerlemektedir.
                          </p>
                          <Button size="sm">Satın Al</Button>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="sleeping-bag" />
              <Label className="form-checkbox ml-2" htmlFor="sleeping-bag">
                Uyku tulumu
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="pillow" />
              <Label className="form-checkbox ml-2" htmlFor="pillow">
                Yastık
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="air-mattress" />
              <Label className="form-checkbox ml-2" htmlFor="air-mattress">
                Şişme yatak
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="tarp" />
              <Label className="form-checkbox ml-2" htmlFor="tarp">
                Branda
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="grid gap-4 rounded-xl border">
        <CardContent className="p-4 grid gap-4">
          <div className="flex items-center gap-4">
            <FlameIcon className="w-10 h-10" />
            <div className="grid gap-0.5">
              <h3 className="font-semibold">Ateş ve Yemek Pişirme</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Yemekler ve kamp ateşi ziyafetleri için.
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="stove" />
              <Label className="form-checkbox ml-2" htmlFor="stove">
                Kamp ocağı
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="lantern" />
              <Label className="form-checkbox ml-2" htmlFor="lantern">
                Fener
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="cooler" />
              <Label className="form-checkbox ml-2" htmlFor="cooler">
                Soğutucu
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="matches" />
              <Label className="form-checkbox ml-2" htmlFor="matches">
                Kibritler
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="camp-chair" />
              <Label className="form-checkbox ml-2" htmlFor="camp-chair">
                Kamp sandalyesi
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="grid gap-4 rounded-xl border">
        <CardContent className="p-4 grid gap-4">
          <div className="flex items-center gap-4">
            <PocketKnifeIcon className="w-10 h-10" />
            <div className="grid gap-0.5">
              <h3 className="font-semibold">Sağlık ve Güvenlik</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Acil durumlar için hazırlıklı olun.
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="first-aid-kit" />
              <Label className="form-checkbox ml-2" htmlFor="first-aid-kit">
                İlk yardım çantası
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="insect-repellent" />
              <Label className="form-checkbox ml-2" htmlFor="insect-repellent">
                Böcek savar
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="sunscreen" />
              <Label className="form-checkbox ml-2" htmlFor="sunscreen">
                Güneş Kremi
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="map-compass" />
              <Label className="form-checkbox ml-2" htmlFor="map-compass">
                Harita ve pusula
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="whistle" />
              <Label className="form-checkbox ml-2" htmlFor="whistle">
                Düdük
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function FlameIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function PocketKnifeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" />
      <path d="M18 6h.01" />
      <path d="M6 18h.01" />
      <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
      <path d="M18 11.66V22a4 4 0 0 0 4-4V6" />
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

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
