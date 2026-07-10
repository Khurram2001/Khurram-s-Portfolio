"use client"

import Script from "next/script"
import { Button } from "@/components/ui/button"
import { getCalLinkFromUrl } from "@/lib/booking"

interface CalBookingButtonProps {
  bookingUrl: string | null
  label: string
  fallbackHref: string
  className?: string
}

export function CalBookingButton({
  bookingUrl,
  label,
  fallbackHref,
  className,
}: CalBookingButtonProps) {
  const calLink = getCalLinkFromUrl(bookingUrl)

  if (!calLink) {
    return (
      <Button asChild className={className}>
        <a href={fallbackHref}>{label}</a>
      </Button>
    )
  }

  return (
    <>
      <Script id="cal-embed" strategy="lazyOnload">
        {`(function (C,A,L){let p=function(a,ar){a.q.push(ar);};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true;}if(ar[0]===L){const api=function(){p(api,arguments);};const namespace=ar[1];api.q=api.q||[];if(typeof namespace==="string"){cal.ns[namespace]=api;p(api,ar);}else{p(cal,ar);}return;}p(cal,ar);};})(window,"https://app.cal.com/embed/embed.js","init");
Cal("init",{origin:"https://cal.com"});`}
      </Script>
      <Button
        type="button"
        className={className}
        data-cal-link={calLink}
        data-cal-config={JSON.stringify({
          layout: "month_view",
          theme: "dark",
        })}
      >
        {label}
      </Button>
    </>
  )
}
