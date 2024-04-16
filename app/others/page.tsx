import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  return (
    <div className="container my-24 px-4 md:px-6 lg:px-8 py-6 lg:py-12 space-y-6 lg:space-y-10">
      <div className="flex flex-col space-y-2">
        <div>
          <Link href="#">Home</Link>
          <Link href="#">Campsites</Link>
          <Link className="font-semibold" href="#">
            Search
          </Link>
        </div>
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold tracking-tight">
            Find your perfect campsite
          </h1>
          <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            <MapPinIcon className="w-4 h-4" />
            Located near Yosemite National Park, California
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-12 items-start gap-4 xl:gap-8">
        <div className="grid col-span-3 gap-4 items-start">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="search">
              Search
            </Label>
            <Input
              className="w-full max-w-[300px]"
              id="search"
              placeholder="Search campsites"
            />
          </div>
          <Accordion className="w-full" collapsible type="single">
            <AccordionItem value="type">
              <AccordionTrigger className="text-base">Type</AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="type-tents" />
                    Tents{"\n                                  "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="type-rvs" />
                    RVs{"\n                                  "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="type-cabins" />
                    Cabins{"\n                                  "}
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="amenities">
              <AccordionTrigger className="text-base">
                Amenities
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="amenities-showers" />
                    Showers{"\n                                  "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="amenities-wifi" />
                    Wifi{"\n                                  "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="amenities-pet-friendly" />
                    Pet-friendly{"\n                                  "}
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="location">
              <AccordionTrigger className="text-base">
                Location
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-2">
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="location-forest" />
                    In the forest{"\n                                  "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="location-beach" />
                    Near the beach{"\n                                  "}
                  </Label>
                  <Label className="flex items-center gap-2 font-normal">
                    <Checkbox id="location-mountain" />
                    Mountain views{"\n                                  "}
                  </Label>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="grid col-span-9 gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="shrink-0" variant="outline">
                <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value="featured">
                <DropdownMenuRadioItem value="featured">
                  Featured
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Newest">
                  Newest
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="low">
                  Price: Low to High
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="high">
                  Price: High to Low
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="grid gap-4">
            <div className="flex items-start gap-4">
              <Link
                className="aspect-square w-[200px] overflow-hidden"
                href="#"
              >
                <img
                  alt="Campsite 1"
                  className="object-cover rounded-lg aspect-square"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
              </Link>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <TentIcon className="w-4 h-4" />
                  <h3 className="font-semibold text-xl">
                    Riverside Campground
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  Yosemite National Park, California
                </div>
                <div className="text-sm grid gap-1.5">
                  <p>
                    Nestled by the river, this scenic campsite offers
                    tranquility and relaxation. Perfect for nature lovers and
                    hikers.
                  </p>
                  <p className="flex items-center gap-2">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4" />
                    <span className="text-gray-500 dark:text-gray-400">
                       4.2 (238 reviews)
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-2xl font-semibold">
                  $25
                  <span className="text-base font-normal">/ night</span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Link
                className="aspect-square w-[200px] overflow-hidden"
                href="#"
              >
                <img
                  alt="Campsite 2"
                  className="object-cover rounded-lg aspect-square"
                  height={200}
                  src="/placeholder.svg"
                  width={200}
                />
              </Link>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <TentIcon className="w-4 h-4" />
                  <h3 className="font-semibold text-xl">
                    Sunset View Campsite
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  Yellowstone National Park, Wyoming
                </div>
                <div className="text-sm grid gap-1.5">
                  <p>
                    Experience the stunning beauty of the Grand Canyon from this
                    picturesque campsite. Watch the sunrise over the river, hike
                    the nearby trails, and enjoy the peace and quiet of nature.
                  </p>
                  <p className="flex items-center gap-2">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4 fill-primary" />
                    <StarIcon className="w-4 h-4" />
                    <span className="text-gray-500 dark:text-gray-400">
                       4.5 (121 reviews)
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2 text-2xl font-semibold">
                  $35
                  <span className="text-base font-normal">/ night</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowUpDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
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
