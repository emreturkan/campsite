import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { Calendar } from "@/components/ui/calendar";
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

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto p-4 lg:px-6">
      <section className="grid gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border">
            <AvatarImage alt="@username" src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="grid gap-1.5">
            <h1 className="text-2xl font-semibold tracking-tight">
              Cozy Campsite in the Redwoods
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <MapPinIcon className="w-4 h-4" />
              Santa Cruz, California, United States
            </div>
          </div>
          <Button className="ml-auto lg:hidden sm:hidden" variant="outline">
            Contact host
          </Button>
        </div>
        <div className="grid gap-4">
          <div className="border h-[1px] hidden lg:block" />
          <div className="flex items-center gap-4">
            <StarIcon className="w-6 h-6 fill-primary" />
            <div className="text-2xl font-semibold tracking-tighter">4.93</div>
            <Separator className="h-9" orientation="vertical" />
            <div className="flex flex-col gap-1.5">
              <div className="text-2xl font-semibold tracking-tighter">745</div>
              <div className="text-xs underline underline-offset-2 font-semibold">
                Reviews
              </div>
            </div>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Contact host</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-4 flex flex-col gap-4">
              <h2 className="text-lg font-semibold">Contact the host</h2>
              <div className="grid gap-2">
                <Label className="hidden" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="How can we help you?"
                />
              </div>
              <Button size="sm">Send message</Button>
            </PopoverContent>
          </Popover>
        </div>
        <Separator />
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-[1fr_400px] gap-4 items-start">
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <AwardIcon className="w-10 h-10" />
              <CardTitle className="hidden md:flex lg:hidden xl:flex">
                One of the most loved homes on Airbnb, according to guests.
              </CardTitle>
              <CardTitle className="sm:hidden md:hidden lg:flex xl:hidden">
                One of the most loved homes on Airbnb, according to guests.
              </CardTitle>
              <CardTitle className="hidden lg:flex">
                One of the most loved homes on Airbnb.
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 flex items-center gap-6 relative">
              <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
                One of the most loved homes on Airbnb, according to guests.
              </div>
              <div className="flex items-center gap-6 ml-auto">
                <div className="flex flex-col gap-1">
                  <div className="text-2xl font-semibold tracking-tighter">
                    4.93
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
                    745
                  </div>
                  <div className="text-xs underline underline-offset-2 font-semibold">
                    Reviews
                  </div>
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
              Welcome to our serene mountain retreat! Nestled amidst the
              tranquil beauty of the mountains, this cozy home is your perfect
              getaway for relaxation and adventure.
            </p>
            <p>
              Wake up to breathtaking vistas from every window. Enjoy your
              morning coffee on the balcony, taking in the serene landscape.
              This mountain haven is perfect for families, friends, and couples
              seeking a blend of adventure and relaxation. Book your stay and
              experience the magic of the mountains!
            </p>
            <Collapsible>
              <CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90">
                Show more
                <ChevronRightIcon className="w-4 h-4 translate-y-px transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p>
                  Our home comfortably sleeps up to 6 guests in 3 beautifully
                  appointed bedrooms, each designed for relaxation and comfort.
                  Cook up a storm in our modern kitchen, complete with all the
                  appliances and utensils you need for a home-cooked meal.
                </p>
                <p>
                  Stay connected with high-speed internet and a dedicated
                  workspace, ideal for those who mix travel with work.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <Separator />
          <div className="grid gap-8">
            <h3 className="text-xl font-semibold">What this place offers</h3>
            <ul className="grid lg:grid-cols-2 gap-6">
              <li className="flex gap-4">
                <MountainSnowIcon className="w-6 h-6" />
                Mountain view
              </li>
              <li className="flex gap-4">
                <WavesIcon className="w-6 h-6" />
                Beach access
              </li>
              <li className="flex gap-4">
                <ChefHatIcon className="w-6 h-6" />
                Private chef
              </li>
              <li className="flex gap-4">
                <WifiIcon className="w-6 h-6" />
                Wifi
              </li>
              <li className="flex gap-4">
                <CarIcon className="w-6 h-6" />
                Parking
              </li>
              <li className="flex gap-4">
                <CameraIcon className="w-6 h-6" />
                Security cameras
              </li>
              <li className="flex gap-4">
                <AccessibilityIcon className="w-6 h-6" />
                Wheelchair accessible
              </li>
              <li className="flex gap-4">
                <WindIcon className="w-6 h-6" />
                Patio
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
        <div className="flex flex-col gap-4 sm:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>
                $400
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
                    $400 x 3 nights
                  </div>
                  <div>$1,200</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 dark:text-gray-400">
                    Cleaning fee
                    <span className="text-xs">(one-time)</span>
                  </div>
                  <div>$130</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 dark:text-gray-400">
                    Service fee
                  </div>
                  <div>$188</div>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <div className="font-semibold">Total before taxes</div>
                <div>$1,518</div>
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

function WindIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}