const SEATTLE_HOUSE_DESTINATIONS = Object.freeze({
  "seattle-house-north-tower": Object.freeze({
    key: "seattle-house-north-tower",
    label: "North Tower",
    address: "2300 6th Avenue, Seattle, WA 98121",
    zip: "98121",
    sourceLabel: "partner-seattle-house-north-tower",
    tags: ["SEATTLE_HOUSE_LEAD", "SEATTLE_HOUSE_NORTH_TOWER"],
  }),
  "seattle-house-south-tower": Object.freeze({
    key: "seattle-house-south-tower",
    label: "South Tower",
    address: "2350 6th Avenue, Seattle, WA 98121",
    zip: "98121",
    sourceLabel: "partner-seattle-house-south-tower",
    tags: ["SEATTLE_HOUSE_LEAD", "SEATTLE_HOUSE_SOUTH_TOWER"],
  }),
});

function isSeattleHouseDestinationRequest(destinationKey) {
  return typeof destinationKey === "string" && destinationKey.startsWith("seattle-house-");
}

function applySeattleHouseDestination(lead) {
  const destination = SEATTLE_HOUSE_DESTINATIONS[lead.partnerDestination];
  if (!destination) return null;

  return {
    ...lead,
    toZip: destination.zip,
    toAddress: destination.address,
    partnerTowerName: destination.label,
    sourceLabel: destination.sourceLabel,
    supermoveTags: destination.tags,
  };
}

module.exports = {
  SEATTLE_HOUSE_DESTINATIONS,
  applySeattleHouseDestination,
  isSeattleHouseDestinationRequest,
};
