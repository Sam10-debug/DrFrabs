"use client";

import { copyToClipboard } from '@/lib/utils';
import DownloadApp from "@/widgets/app/mobile-app-buttons";
import HomeServicesSection from '@/widgets/pages/home/services-section';
import { QRCodeSVG } from 'qrcode.react';
import { MouseEvent, Suspense } from 'react';

const Referral = () => {

  function openStore(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    copyToClipboard(window.location.href)
    window.open(e.currentTarget.href, '_blank');
  }

  return (
    <main id='referral' className="relative bg-white">
      <section className="py-7 md:py-28 flex flex-col items-center gap-5 md:gap-8 relative z-20">
        <h1 className="uppercase text-center text-4xl md:text-5xl lg:text-[84px] lg:leading-[88px] font-bold">
          You were invited to <br /> Platnova{" "}
        </h1>
        <p className="text-md px-10 text-center opacity-80">Get the most out of your money, open multi-currency wallets, send and receive money seamlessly across the globe!</p>

        <div className='grid justify-items-center'>
          <QRCodeSVG
            value='https://linktr.ee/getplatnova'
            className="w-72 h-72 mx-auto mt-14 rounded-[10px]"
            imageSettings={{
              excavate: false,
              height: 20,
              width: 20,
              src: '/qrlogo.svg'
            }}
          />

          <div className="text-center mt-5 md:mt-10 space-y-2">
            <p>Scan to download</p>
            <p className="opacity-70 text-sm px-10">Scan QR code to download the app or click the button below</p>
          </div>
        </div>

        <Suspense>
          <DownloadApp onAppStoreClick={openStore} onPlayStoreClick={openStore} />
        </Suspense>
      </section>

      <HomeServicesSection />

    </main>
  );
};

export default Referral;
