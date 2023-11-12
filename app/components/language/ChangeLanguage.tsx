"use client";
import { language_data } from "@/public/data/language.data";
import { useDispatch } from "react-redux";
import { updateLanguage } from "@/app/redux/features/language-slice";
import { TLanguage } from "@/app/types/global";
import { useAppSelector } from "@/app/redux/store";

const ChangeLanguage = () => {
  const allLanguage: TLanguage[] = language_data;
  const dispatch = useDispatch();
  const langSelector = useAppSelector((state) => state.languageReducer);

  type GetLanguageByShortCodeProps = "en" | "fa" | "de";

  const GetLanguageByShortCode = (shortCode: GetLanguageByShortCodeProps) => {
    const selectLanguage = allLanguage.find((item: TLanguage) => {
      return item.shortCode === shortCode;
    });

    dispatch(updateLanguage(selectLanguage));
  };

  return (
    <div className="dropdown dropdown-bottom">
      <label tabIndex={0} className="btn btn-primary m-1">
        {langSelector.shortCode}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
      >
        <li>
          <a
            onClick={() => {
              GetLanguageByShortCode("en");
            }}
          >
            en
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              GetLanguageByShortCode("fa");
            }}
          >
            fa
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              GetLanguageByShortCode("de");
            }}
          >
            de
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ChangeLanguage;
