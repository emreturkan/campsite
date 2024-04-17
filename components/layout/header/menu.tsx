"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type Props = {};

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tüm Kamp Alanları",
    href: "/campsite",
    description:
      "Doğayla iç içe olabileceğiniz ve eğlenceli aktivitelerle dolu kamp alanları keşfedin.",
  },
  {
    title: "Gizli Koylar",
    href: "/docs/primitives/hover-card",
    description:
      "Sessiz ve sakin doğal koyları keşfedin, doğanın güzelliklerini tamamen kendinizde yaşayın.",
  },
  {
    title: "Popüler Alanlar",
    href: "/docs/primitives/progress",
    description:
      "En çok tercih edilen ve ziyaretçi yoğunluğu olan doğa alanlarını keşfedin.",
  },
  {
    title: "Keşfedilmeyi Bekleyen Alanlar",
    href: "/docs/primitives/scroll-area",
    description:
      "Daha önce keşfedilmemiş ve merak uyandıran doğa alanlarını keşfetmek için hazır olun.",
  },
  {
    title: "İstanbul'a 1 saat",
    href: "/docs/primitives/tabs",
    description:
      "Şehir yaşamından uzaklaşmak için sadece bir saat mesafede olan doğal ve dinlendirici alanları keşfedin.",
  },
  {
    title: "Yürümeye Uygun",
    href: "/docs/primitives/tooltip",
    description:
      "Doğa yürüyüşleri için ideal alanları keşfedin, manzaralı yolları ve doğal güzellikleri keşfetmek için hazır olun.",
  },
];

const Menu = (props: Props) => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ana Sayfa</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500 to-background p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <StarIcon className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kamp Alanları</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/camp-equipment" legacyBehavior passHref>
            <NavigationMenuLink className="text-sm">
              Kamp Ekipmanları
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-500/40 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
