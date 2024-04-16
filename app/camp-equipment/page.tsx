import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CardContent, Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="max-w-3xl grid gap-8 mx-auto p-4 sm:py-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <ArrowLeftIcon className="w-6 h-6" />
          <h1 className="text-3xl font-bold tracking-tighter">
            Camping Equipment Checklist
          </h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Be prepared for your next camping adventure with this comprehensive
          equipment checklist. Simply check off the items you have and add any
          additional gear you'll need.
        </p>
      </div>
      <Card className="grid gap-4 rounded-xl border">
        <CardContent className="p-4 grid gap-4">
          <div className="flex items-center gap-4">
            <TentIcon className="w-10 h-10" />
            <div className="grid gap-0.5">
              <h3 className="font-semibold">Shelter</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your home away from home.
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="tent" />
              <Label className="form-checkbox ml-2" htmlFor="tent">
                Tent
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="sleeping-bag" />
              <Label className="form-checkbox ml-2" htmlFor="sleeping-bag">
                Sleeping bag
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="pillow" />
              <Label className="form-checkbox ml-2" htmlFor="pillow">
                Pillow
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="air-mattress" />
              <Label className="form-checkbox ml-2" htmlFor="air-mattress">
                Air mattress
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="tarp" />
              <Label className="form-checkbox ml-2" htmlFor="tarp">
                Tarp
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
              <h3 className="font-semibold">Fire and Cooking</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                For s'mores and campfire feasts.
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="stove" />
              <Label className="form-checkbox ml-2" htmlFor="stove">
                Camp stove
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="lantern" />
              <Label className="form-checkbox ml-2" htmlFor="lantern">
                Lantern
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="cooler" />
              <Label className="form-checkbox ml-2" htmlFor="cooler">
                Cooler
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="matches" />
              <Label className="form-checkbox ml-2" htmlFor="matches">
                Matches
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="camp-chair" />
              <Label className="form-checkbox ml-2" htmlFor="camp-chair">
                Camp chair
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
              <h3 className="font-semibold">Health and Safety</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Be prepared for emergencies.
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="first-aid-kit" />
              <Label className="form-checkbox ml-2" htmlFor="first-aid-kit">
                First aid kit
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="insect-repellent" />
              <Label className="form-checkbox ml-2" htmlFor="insect-repellent">
                Insect repellent
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="sunscreen" />
              <Label className="form-checkbox ml-2" htmlFor="sunscreen">
                Sunscreen
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="map-compass" />
              <Label className="form-checkbox ml-2" htmlFor="map-compass">
                Map and compass
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox className="h-4 w-4" id="whistle" />
              <Label className="form-checkbox ml-2" htmlFor="whistle">
                Whistle
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
