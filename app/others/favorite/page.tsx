import { MapPinIcon, ShareIcon, StarIcon, TentIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, Card } from "@/components/ui/card";

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
