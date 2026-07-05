export type BusinessPlacementType = "paid" | "editorial";

export type BusinessClickTrackingInput = {
  action: string;
  business: string;
  city?: string;
  page?: string;
  placement: string;
  placementType?: BusinessPlacementType;
};

const paidFeaturedBusinesses = new Set<string>([]);

export function getPlacementType(
  business: string,
  fallback: BusinessPlacementType = "editorial",
): BusinessPlacementType {
  return paidFeaturedBusinesses.has(business) ? "paid" : fallback;
}

export function getFeaturedLabel(
  business: string,
  fallback: BusinessPlacementType = "editorial",
) {
  return getPlacementType(business, fallback) === "paid"
    ? "Featured Local Partner"
    : "Our Pick";
}

export function businessClickTracking({
  action,
  business,
  city = "Mount Ida",
  page,
  placement,
  placementType,
}: BusinessClickTrackingInput) {
  return {
    "data-track-action": action,
    "data-track-business": business,
    "data-track-city": city,
    "data-track-event": "business_click",
    ...(page ? { "data-track-page": page } : {}),
    "data-track-placement": placement,
    "data-track-placement-type": placementType ?? getPlacementType(business),
  };
}
