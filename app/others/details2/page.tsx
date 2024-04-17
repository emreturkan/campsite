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

export default function Component() {
  return (
    <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
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
              Campsite in the Heart of the Forest, United States
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              4 guests · 1 tent · Campfire · Stunning views
            </p>
          </div>
          <Card>
            <CardContent className="p-4 sm:p-6 flex items-center gap-6 relative">
              <AwardIcon className="w-10 h-10" />
              <div className="flex-1 font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex">
                This campsite offers the perfect combination of adventure and
                relaxation.
              </div>
              <div className="flex items-center gap-6 ml-auto">
                <div className="flex flex-col gap-1 text-center">
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
              <div className="font-semibold">Hosted by Adventure Co.</div>
              <div className="text-gray-500 text-sm dark:text-gray-400">
                Joined in 2021 · Superhost
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
          <Separator />
          <div className="prose">
            <p>
              Welcome to our tranquil lakeside campsite nestled in the heart of
              the forest. Whether you're an avid camper or someone looking for a
              unique nature experience, our campsite offers the perfect retreat.
              The peaceful sounds of the forest and the stunning views of the
              lake create a serene and picturesque setting.
            </p>
            <Collapsible>
              <CollapsibleTrigger className="font-semibold flex items-center gap-1 [&[data-state=open]>svg]:-rotate-90">
                Show more
                <ChevronRightIcon className="w-4 h-4 translate-y-px transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <p>
                  Our campsite is equipped with everything you need for a
                  comfortable and enjoyable stay. You'll have access to a
                  private campfire area where you can gather with your friends
                  or family to roast marshmallows and share stories under the
                  stars. The site is perfect for stargazing, and on clear
                  nights, you can see the Milky Way stretching across the sky.
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
                Lakefront
              </li>
              <li className="flex gap-4">
                <WavesIcon className="w-6 h-6" />
                Campfire
              </li>
              <li className="flex gap-4">
                <ChefHatIcon className="w-6 h-6" />
                Peace and quiet
              </li>
              <li className="flex gap-4">
                <WifiIcon className="w-6 h-6" />
                Wildlife spotting
              </li>
              <li className="flex gap-4">
                <CarIcon className="w-6 h-6" />
                Hiking trails
              </li>
              <li className="flex gap-4">
                <CameraIcon className="w-6 h-6" />
                Birdwatching
              </li>
              <li className="flex gap-4">
                <AccessibilityIcon className="w-6 h-6" />
                Star-gazing
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
              Campsite in the Heart of the Forest, United States
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              4 guests · 1 tent · Campfire · Stunning views
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>
                $50
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
              <Separator />
              <div className="grid gap-8">
                <h3 className="text-xl font-semibold">Price summary</h3>
                <div className="grid gap-8">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-500 dark:text-gray-400">
                      $50 x 3 nights
                    </div>
                    <div>$150</div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-4">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage alt="@username" src="/placeholder-user.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-0.5">
                    <div className="font-semibold">Refund policy</div>
                    <div className="text-gray-500 text-sm dark:text-gray-400">
                      Free cancellation for 48 hours
                    </div>
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
              We had a great time and would definitely stay again! Gorgeous
              views and a beautiful home.
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
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5" />
              </div>
              ·<span>1 week ago</span>
            </div>
            <div>
              This is my second time staying at Catherine’s place and it was
              just as amazing as the first time. I would definitely stay again!
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
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5 fill-primary" />
                <StarIcon className="w-2.5 h-2.5" />
                <StarIcon className="w-2.5 h-2.5" />
              </div>
              ·<span>1 week ago</span>
            </div>
            <div className="">
              Super clean, great location, and amazing views. We had a great
              time and wish we could have stayed longer!
            </div>
          </article>
        </div>
        <Button className="justify-self-start" variant="outline">
          Show all reviews
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
