import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">My Account</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your profile, bookings, and settings
        </p>
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Your profile information is used to personalize your experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input defaultValue="John Doe" id="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input defaultValue="johndoe" id="username" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell the community about yourself."
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Bookings</CardTitle>
            <CardDescription>
              Your booking history is displayed here.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4 border-b last:border-0">
              <div className="flex items-center gap-4">
                <img
                  alt="Campsite"
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <div className="grid gap-2">
                  <h3 className="font-semibold">Riverside Campsite</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2 nights from July 5, 2024
                  </p>
                </div>
              </div>
              <Link className="underline" href="#">
                View invoice
              </Link>
            </div>
            <div className="flex items-center justify-between p-4 border-b last:border-0">
              <div className="flex items-center gap-4">
                <img
                  alt="Campsite"
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <div className="grid gap-2">
                  <h3 className="font-semibold">Lakeside Serenity</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    3 nights from August 12, 2024
                  </p>
                </div>
              </div>
              <Link className="underline" href="#">
                View invoice
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Saved Campsites</CardTitle>
            <CardDescription>
              Your saved campsites are displayed here.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4 border-b last:border-0">
              <div className="flex items-center gap-4">
                <img
                  alt="Campsite"
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <div className="grid gap-2">
                  <h3 className="font-semibold">Riverside Campsite</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Serene views, near the river
                  </p>
                </div>
              </div>
              <Link className="underline" href="#">
                Book now
              </Link>
            </div>
            <div className="flex items-center justify-between p-4 border-b last:border-0">
              <div className="flex items-center gap-4">
                <img
                  alt="Campsite"
                  className="aspect-square rounded-lg object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <div className="grid gap-2">
                  <h3 className="font-semibold">Lakeside Serenity</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tranquil location, perfect for stargazing
                  </p>
                </div>
              </div>
              <Link className="underline" href="#">
                Book now
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Update your account settings here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input defaultValue="m@example.com" id="email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div className="flex items-center justify-between">
                <Button size="sm">Save</Button>
                <Button size="sm" variant="destructive">
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
