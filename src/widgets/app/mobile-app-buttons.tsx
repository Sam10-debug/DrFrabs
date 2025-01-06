"use client";

import { Button } from "@/components/ui/button";
import PlaystoreSvg from "../svg/playstore";
import AppstoreSvg from "../svg/appstore";
import { MouseEventHandler } from 'react';
import {
  AppStoreBlackLogo,
  GooglePlayBlackLogo,
} from "@/components/icons/socials";
import { GlobeIcon } from '@radix-ui/react-icons';
import { useSearchParams } from 'next/navigation';

interface Props {
  onPlayStoreClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
  onAppStoreClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
  isLightBg?: boolean;
}

const DownloadApp: React.FC<Props> = ({
  isLightBg,
  onPlayStoreClick,
  onAppStoreClick,
}) => {
  const searchParams = useSearchParams()

  const code = searchParams.get('code')
  return (
    <div className="md:flex items-center justify-center space-y-4 md:space-y-0 gap-4">
      <div>
        <a
          href="https://play.google.com/store/apps/details?id=com.platnova.app"
          target="_blank"
          onClick={onPlayStoreClick}
          rel="noreferrer noopener"
        >
          <Button
            className={`${isLightBg ? "bg-white hover:bg-white/80 " : "bg-[#1E1E1E]/90 hover:bg-[#1E1E1E]"
              }  h-12 px-5 rounded-xl`}
          >
            {isLightBg ? (
              <GooglePlayBlackLogo />
            ) : (
              <div className="w-[120px]">
                <PlaystoreSvg />
              </div>
            )}
          </Button>
        </a>
      </div>
      <div className="appstore">
        <a
          href="https://apps.apple.com/us/app/platnova/id1619003446"
          target="_blank"
          onClick={onAppStoreClick}
          rel="noreferrer noopener"
        >
          <Button
            className={`${isLightBg ? "bg-white hover:bg-white/80" : "bg-[#1E1E1E]/90 hover:bg-[#1E1E1E]"
              }   h-12 pl-5 pr-7 rounded-xl`}
          >
            {isLightBg ? (
              <AppStoreBlackLogo />
            ) : (
              <div className="w-[120px]">
                <AppstoreSvg />
              </div>
            )}
          </Button>
        </a>
      </div>
      <div className="appstore">
        <a
          href={code && code.length ? `https://app.platnova.com/auth/register?code=${code}` : "https://app.platnova.com/auth/register"}
          target="_blank"
          rel="noreferrer noopener"
        >
          <button
            className={`${isLightBg ? "bg-white hover:bg-white/80" : "bg-[#1E1E1E]/90 hover:bg-[#1E1E1E]"
              }  h-12 rounded-xl px-0 py-1 flex items-start pr-7 pl-2`}
          >
            {isLightBg ? (
              <GlobeIcon className='text-black my-auto' />
            ) : (
              <GlobeIcon className='text-white my-auto' width={48} height={24} />
            )}
            <div>
              <p className='text-white text-[10px] pt-1 font-light tracking-wide'>Continue on the</p>
              <p className='text-start text-white -mt-1 font-normal tracking-wide'>Web</p>
            </div>

          </button>
        </a>
      </div>
    </div>
  );
};

export default DownloadApp;
