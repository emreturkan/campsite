import { Link } from "next-view-transitions";
import { Button } from "../../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Avatar, AvatarImage } from "../../ui/avatar";
import Menu from "./menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  HeartIcon,
  LogoutIcon,
  SearchIcon,
  SettingsIcon,
  TentIcon,
  UserIcon,
} from "@/assets/icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full mt-6">
      <div className="flex-1 flex items-center justify-between px-4 md:px-6">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href="/"
        >
          <TentIcon className="w-6 h-6" />
          <span className="font-semibold text-lg">Campsite</span>
        </Link>
        <Menu />
        <div className="flex items-center lg:gap-4 md:gap-8">
          <div className="flex items-center gap-1 lg:gap-3">
            <div className="input-wrapper">
              <Button
                className="shadow-none icon"
                size="icon"
                variant="outline"
              >
                <SearchIcon className="w-4 h-4" />
                <span className="sr-only">Search</span>
              </Button>
              <input
                type="text"
                name="text"
                className="input"
                placeholder="Ara.."
              />
            </div>
            <Button
              className="shadow-none flex lg:hidden"
              size="icon"
              variant="outline"
            >
              <HamburgerMenuIcon className="w-4 h-4" />
              <span className="sr-only">Menu</span>
            </Button>
            <Button
              className="shadow-none hidden lg:flex group"
              size="icon"
              variant="outline"
            >
              <Link href={"/others/favorite"}>
                <HeartIcon className="w-4 h-4 group-hover:fill-primary group-hover:text-primary" />
                <span className="sr-only">Favorites</span>
              </Link>
            </Button>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="rounded-full shadow-none "
                size="icon"
                variant="outline"
              >
                <Avatar className="w-6 h-6">
                  <AvatarImage alt="Avatar" src="/avatar.png" />
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="mt-1 w-48">
              <div className="flex flex-col gap-2 p-2">
                <Link
                  className="flex items-center gap-2 text-sm font-medium"
                  href="/others/account"
                >
                  <UserIcon className="w-4 h-4" />
                  Profile
                </Link>
                <Link
                  className="flex items-center gap-2 text-sm font-medium"
                  href="#"
                >
                  <SettingsIcon className="w-4 h-4" />
                  Settings
                </Link>
                <Link
                  className="flex items-center gap-2 text-sm font-medium"
                  href="#"
                >
                  <LogoutIcon className="w-4 h-4" />
                  Log out
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
