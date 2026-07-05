"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

export default function AnalyticsClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const trackedElement = target.closest<HTMLElement>("[data-track-event]");

      if (!trackedElement) return;

      const {
        trackAction,
        trackBusiness,
        trackCity,
        trackEvent,
        trackPage,
        trackPlacement,
        trackPlacementType,
      } = trackedElement.dataset;

      track(trackEvent || "business_click", {
        action: trackAction || "click",
        business: trackBusiness || "Unknown business",
        city: trackCity || "Mount Ida",
        page: trackPage || window.location.pathname,
        placement: trackPlacement || "unknown-placement",
        placementType: trackPlacementType || "editorial",
      });
    }

    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
}
