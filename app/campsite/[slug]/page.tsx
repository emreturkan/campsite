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
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Component() {
  return (
    <div className="container mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
      <section className="hidden sm:flex flex-col gap-4 sm:flex-row sm:items-center pb-4 sm:pb-8">
        <h1 className="text-xl lg:text-3xl font-semibold tracking-tight">
          Riverside Glamping: Secluded Luxury Tents by the River
        </h1>
        <nav className="flex items-center justify-center gap-1 sm:ml-auto">
          <Button
            asChild
            className="rounded-md gap-1 underline underline-offset-2"
            size="sm"
            variant="ghost"
          >
            <a href="#">
              <ShareIcon className="w-4 h-4" />
              Share
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
              Save
            </a>
          </Button>
        </nav>
      </section>
      <section className="py-8 grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-8 sm:gap-12 md:gap-16 items-start">
        <div className="grid gap-8 row-start-2 md:row-start-auto">
          <div className="hidden md:flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">
              Riverside Campsite, California, United States
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              4 guests · 1 tent · 2 beds · 1 bath · Parking · Riverside view
            </p>
          </div>
          <Image
            alt="Hero"
            src="/placeholder.svg"
            style={{
              aspectRatio: "700/400",
              objectFit: "cover",
            }}
            className="rounded-lg"
            width="700"
            height="500"
          />
          <Card>
            <CardContent className="p-4 sm:p-6 flex items-center gap-6 relative">
              <AwardIcon className="w-10 h-10" />
              <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
                One of the most loved campsites on Airbnb, according to campers.
              </div>
              <div className="flex items-center gap-6 ml-auto">
                <div className="flex flex-col gap-1 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">
                    4.95
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5 fill-primary" />
                    <StarIcon className="w-2.5 h-2.5" />
                  </div>
                </div>
                <Separator className="h-9" orientation="vertical" />
                <div className="flex flex-col gap-0.5 text-center">
                  <div className="text-2xl font-semibold tracking-tighter">
                    302
                  </div>
                  <div className="text-xs underline font-semibold">Reviews</div>
                </div>
              </div>
              <Link className="absolute inset-0" href="#">
                <span className="sr-only">View reviews</span>
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
              <div className="font-semibold">Hosted by Catherine</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                Joined in 2010 · Superhost
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <CalendarCheckIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">
                Free cancellation for 48 hours
              </div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                Get a full refund if you change your mind.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <MedalIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Catherine is a Superhost</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                Superhosts are experienced, highly rated hosts.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <MapPinIcon className="w-7 h-7" />
            </div>
            <div className="grid gap-0.5">
              <div className="font-semibold">Great location</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                100% of recent guests gave the location a 5-star rating.
              </div>
            </div>
          </div>
          <Separator />
          <div className="prose">
            <p>
              Welcome to our riverside glamping site, where you can experience
              the beauty of nature without sacrificing comfort. Our luxury tents
              are nestled by the river, offering a tranquil and picturesque
              setting for your camping adventure.
            </p>
            <Collapsible>
              <CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90">
                Show more
                <ChevronRightIcon className="w-4 h-4 translate-y-px transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p>
                  Our glamping site is equipped with everything you need for a
                  relaxing and enjoyable stay. Each tent features comfortable
                  beds, cozy seating, and elegant decor to create a welcoming
                  atmosphere. You'll also have access to shared amenities such
                  as clean and modern bathrooms, a communal dining area, and an
                  outdoor fire pit where you can gather with fellow campers to
                  share stories and make s'mores.
                </p>
                <p>
                  Whether you're an avid camper or trying glamping for the first
                  time, our riverside site offers the perfect blend of luxury
                  and nature. You can spend your days exploring the surrounding
                  wilderness, fishing in the river, or simply relaxing in the
                  peaceful ambiance of our campsite. At night, you'll be treated
                  to stunning views of the starry sky, making for a magical and
                  memorable experience.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <Separator />
          <div className="grid gap-8">
            <h3 className="text-xl font-semibold">What this place offers</h3>
            <ul className="grid lg:grid-cols-2 gap-6">
              <li className="flex gap-4">
                <FlameIcon className="w-6 h-6" />
                Campfire
              </li>
              <li className="flex gap-4">
                <BackpackIcon className="w-6 h-6" />
                Guided hikes
              </li>
              <li className="flex gap-4">
                <FishIcon className="w-6 h-6" />
                Fishing
              </li>
              <li className="flex gap-4">
                <WifiIcon className="w-6 h-6" />
                Wifi
              </li>
              <li className="flex gap-4">
                <EggIcon className="w-6 h-6" />
                Breakfast included
              </li>
              <li className="flex gap-4">
                <AccessibilityIcon className="w-6 h-6" />
                Wheelchair accessible
              </li>
              <li className="flex gap-4">
                <DogIcon className="w-6 h-6" />
                Pet-friendly
              </li>
              <li className="flex gap-4">
                <BathIcon className="w-6 h-6" />
                Spa services
              </li>
            </ul>
            <Button className="justify-self-start" variant="outline">
              Show all amenities
            </Button>
          </div>
          <Separator />
          <div className="grid gap-8">
            <div className="grid gap-0.5">
              <h3 className="text-xl font-semibold">Find a date</h3>
              <div className="text-gray-500 dark:text-gray-400">
                Pick your travel dates for availability.
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
              Riverside Campsite, California, United States
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              4 guests · 1 tent · 2 beds · 1 bath · Parking · Riverside view
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>
                $200
                <span className="text-sm text-gray-500 font-normal dark:text-gray-400">
                  / night
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
                            Check in
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
                            Check out
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
                              Guests
                            </span>
                            <span className="font-normal">2 adults</span>
                          </div>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 adult</SelectItem>
                      <SelectItem value="2">2 adults</SelectItem>
                      <SelectItem value="3">2 adults + 1 child</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <div>
                    <Button className="w-full h-12" size="lg">
                      Reserve
                    </Button>
                  </div>
                  <div className="text-sm text-gray-500 text-center dark:text-gray-400">
                    You won't be charged yet
                  </div>
                </div>
              </form>
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 dark:text-gray-400">
                    $200 x 3 nights
                  </div>
                  <div>$600</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 dark:text-gray-400">
                    Service fee
                    <span className="text-xs">
                      (included in the total price)
                    </span>
                  </div>
                  <div>$100</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="gap-2 underline text-gray-500 hover:text-inherit dark:text-gray-400"
                variant="link"
              >
                <FlagIcon className="w-4 h-4" />
                Report this listing
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Report this listing</DialogTitle>
                <DialogDescription>
                  This won’t be shared with the Host.
                </DialogDescription>
                <div className="py-6">
                  <form>
                    <RadioGroup>
                      <Label
                        className="text-base font-normal flex items-center w-full cursor-pointer"
                        htmlFor="inaccurate"
                      >
                        It’s inaccurate or incorrect
                        <RadioGroupItem
                          className="ml-auto"
                          id="inaccurate"
                          value="inaccurate"
                        />
                      </Label>
                      <Separator className="my-4" />
                      <Label
                        className="text-base font-normal flex items-center w-full cursor-pointer"
                        htmlFor="not_a_place"
                      >
                        It’s not a place to stay
                        <RadioGroupItem
                          className="ml-auto"
                          id="not_a_place"
                          value="not_a_place"
                        />
                      </Label>
                      <Separator className="my-4" />
                      <Label
                        className="text-base font-normal flex items-center w-full cursor-pointer"
                        htmlFor="scam"
                      >
                        It’s a scam
                        <RadioGroupItem
                          className="ml-auto"
                          id="scam"
                          value="scam"
                        />
                      </Label>
                      <Separator className="my-4" />
                      <Label
                        className="text-base font-normal flex items-center w-full cursor-pointer"
                        htmlFor="offensive"
                      >
                        It’s offensive
                        <RadioGroupItem
                          className="ml-auto"
                          id="offensive"
                          value="offensive"
                        />
                      </Label>
                      <Separator className="my-4" />
                      <Label
                        className="text-base font-normal flex items-center w-full cursor-pointer"
                        htmlFor="something_else"
                      >
                        It’s something else
                        <RadioGroupItem
                          className="ml-auto"
                          id="something_else"
                          value="something_else"
                        />
                      </Label>
                    </RadioGroup>
                  </form>
                </div>
              </DialogHeader>
              <DialogFooter>
                <div>
                  <Button variant="ghost">Cancel</Button>
                </div>
                <Button>Report</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5" />
              </div>
              ·<span>1 week ago</span>
            </div>
            <div>
              Catherine’s place was amazing! The views were incredible and the
              house was very clean. We had a great time.
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
              <div className="flex items-center gap-px" />
            </div>
          </article>
        </div>
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

function BackpackIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M8 10h8" />
      <path d="M8 18h8" />
    </svg>
  );
}

function BathIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
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

function DogIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  );
}

function EggIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" />
    </svg>
  );
}

function FishIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  );
}

function FlagIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
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
