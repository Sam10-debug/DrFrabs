import { useEffect } from 'react';
import Script from 'next/script';

const ZohoDesk: React.FC = () => {
    useEffect(() => {
        window.ZohoDeskAsapReady = function (callback?: () => void): void {
            const asyncCalls = window.ZohoDeskAsap__asyncalls = window.ZohoDeskAsap__asyncalls || [];

            if (window.ZohoDeskAsapReadyStatus) {
                if (callback) asyncCalls.push(callback);
                asyncCalls.forEach((call: any) => call && call());
                window.ZohoDeskAsap__asyncalls = null;
            } else if (callback) {
                asyncCalls.push(callback);
            }
        };
    }, []);

    return (
        <Script
            id="zohodeskasap"
            strategy="afterInteractive"
            src="https://desk.zoho.com/portal/api/web/asapApp/921442000016616001?orgId=835204648"
            defer
        />
    );
};

export default ZohoDesk;