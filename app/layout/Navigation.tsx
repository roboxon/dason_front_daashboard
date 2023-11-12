"use client";
import Link from "next/link";
import ChangeLanguage from "../components/language/ChangeLanguage";
import { resource } from "@/public/data/resource";
import { useAppSelector } from "../redux/store";

const Navigation = () => {
  const languageShortCode = useAppSelector((state) => state.languageReducer);

  const data = resource[languageShortCode.shortCode as keyof typeof resource];

  return (
    <div className="navbar bg-base-100">
        <ul className="menu menu-horizontal px-1">
          {data.navigation.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Navigation;
