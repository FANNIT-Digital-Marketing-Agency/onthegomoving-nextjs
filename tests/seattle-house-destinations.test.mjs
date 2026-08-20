import assert from "node:assert/strict";
import test from "node:test";
import {
  applySeattleHouseDestination,
  isSeattleHouseDestinationRequest,
} from "../lib/seattleHouseDestinations.mjs";

test("maps the North Tower key to the verified address and tags", () => {
  const lead = applySeattleHouseDestination({
    fullName: "Taylor Resident",
    partnerDestination: "seattle-house-north-tower",
    toZip: "00000",
    sourceLabel: "browser-supplied-value",
  });

  assert.equal(lead.toAddress, "2300 6th Avenue, Seattle, WA 98121");
  assert.equal(lead.toZip, "98121");
  assert.equal(lead.sourceLabel, "partner-seattle-house-north-tower");
  assert.deepEqual(lead.supermoveTags, ["SEATTLE_HOUSE_LEAD", "SEATTLE_HOUSE_NORTH_TOWER"]);
});

test("maps the South Tower key to the verified address and tags", () => {
  const lead = applySeattleHouseDestination({
    fullName: "Jordan Resident",
    partnerDestination: "seattle-house-south-tower",
  });

  assert.equal(lead.toAddress, "2350 6th Avenue, Seattle, WA 98121");
  assert.equal(lead.toZip, "98121");
  assert.equal(lead.sourceLabel, "partner-seattle-house-south-tower");
  assert.deepEqual(lead.supermoveTags, ["SEATTLE_HOUSE_LEAD", "SEATTLE_HOUSE_SOUTH_TOWER"]);
});

test("rejects an unknown Seattle House destination key", () => {
  assert.equal(
    applySeattleHouseDestination({ partnerDestination: "seattle-house-unknown-tower" }),
    null
  );
  assert.equal(isSeattleHouseDestinationRequest("seattle-house-unknown-tower"), true);
  assert.equal(isSeattleHouseDestinationRequest("generic-landing-page"), false);
});
