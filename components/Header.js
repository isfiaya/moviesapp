import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  UserIcon,
  SearchIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import logo from '../assests/logo.png'
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  return (
    <header className="flex flex-col m-5 sm:flex-row justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="Home" Icon={HomeIcon} onClick={() => router.push(`/?genre=fetchTrending`)} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} onClick={() => router.push(`/?genre=fetchTrending`)} />
        {/* <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} /> */}
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        src={logo}
        alt='image logo'
        className="object-contain rounded-3xl cursor-pointer"
        width={200}
        height={100}

      />
    </header>
  );
}

export default Header;
