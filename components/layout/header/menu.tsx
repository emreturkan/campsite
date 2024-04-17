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
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="text-sm font-medium">
              Ana Sayfa
            </NavigationMenuLink>
          </Link>
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
            <NavigationMenuLink className="text-sm font-medium">
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
            "block group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-primary-foreground">
            {title}
          </div>
          <p className="line-clamp-2 text-sm group-hover:text-muted leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
