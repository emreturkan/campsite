import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardHeader,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Component() {
  return (
    <div className="mx-auto max-w-5xl grid gap-4 p-4 sm:p-6">
      <div className="flex items-center gap-4">
        <TentIcon className="w-10 h-10" />
        <h1 className="text-3xl font-semibold tracking-tight">
          My Favorite Campsites
        </h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="grid ">
          <CardHeader className="">
            <div className="grid grid-cols-2 gap-4">
              <Image
                alt="Campsite"
                className="aspect-video rounded-lg overflow-hidden object-cover  "
                height={300}
                src="/placeholder.svg"
                width={600}
              />
              <div className="grid items-center gap-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  Redwood Campground
                </h2>
                <div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPinIcon className="w-4 h-4" />
                    California, United States
                  </div>
                  <div className="flex items-center gap-2 text-sm underline underline-offset-2">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    4.5
                    <span className="text-sm not-italic underline-offset-0">
                      <ChevronRightIcon />
                    </span>
                    <span className="text-xs">based on 245 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="grid gap-4 ">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Description
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The serene Redwood Campground offers a peaceful retreat within
                the majestic redwood forest. Campers can enjoy the natural
                beauty of the surroundings while...
              </p>
            </div>
            <Button size="sm" variant="outline">
              <ShareIcon className="w-4 h-4 mr-2" />
              Share
            </Button>
          </CardContent>
        </Card>
        <Card className="grid ">
          <CardHeader className="">
            <div className="grid grid-cols-2 gap-4">
              <Image
                alt="Campsite"
                className="aspect-video rounded-lg overflow-hidden object-cover  "
                height={300}
                src="/placeholder.svg"
                width={600}
              />
              <div className="grid items-center gap-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  Redwood Campground
                </h2>
                <div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPinIcon className="w-4 h-4" />
                    California, United States
                  </div>
                  <div className="flex items-center gap-2 text-sm underline underline-offset-2">
                    <StarIcon className="w-4 h-4 fill-primary" />
                    4.5
                    <span className="text-sm not-italic underline-offset-0">
                      <ChevronRightIcon />
                    </span>
                    <span className="text-xs">based on 245 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="grid gap-4 ">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">
                Description
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The serene Redwood Campground offers a peaceful retreat within
                the majestic redwood forest. Campers can enjoy the natural
                beauty of the surroundings while...
              </p>
            </div>
            <Button size="sm" variant="outline">
              <ShareIcon className="w-4 h-4 mr-2" />
              Share
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
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
