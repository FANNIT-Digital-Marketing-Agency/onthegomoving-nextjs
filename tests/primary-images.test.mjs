import assert from "node:assert/strict";
import test from "node:test";
import primaryImages from "../lib/primaryImages.js";

const {
  absoluteImageUrl,
  getCityServicePrimaryImage,
  getLocationPrimaryImage,
  getServicePrimaryImage,
} = primaryImages;

test("priority city hubs use distinct declared primary image assets", () => {
  const primarySources = [
    getLocationPrimaryImage("seattle-movers").src,
    getLocationPrimaryImage("bellevue-movers").src,
    getLocationPrimaryImage("redmond-movers").src,
  ];

  assert.equal(new Set(primarySources).size, 3);
  assert.match(getLocationPrimaryImage("seattle-movers").alt, /Seattle/i);
  assert.match(getLocationPrimaryImage("bellevue-movers").alt, /Bellevue/i);
});

test("priority service hubs resolve their approved first-party assets", () => {
  assert.equal(getServicePrimaryImage("residential-moving"), "/assets/residential-moving.webp");
  assert.equal(getServicePrimaryImage("apartment-moving"), "/assets/three-crew-ramp-loading.webp");
  assert.equal(getServicePrimaryImage("commercial-moving"), "/assets/commercial-fleet.webp");
});

test("city-service pages reuse only their relevant existing service-family image", () => {
  assert.equal(
    getCityServicePrimaryImage("apartment").src,
    "/assets/three-crew-loading-truck.webp",
  );
  assert.equal(
    getCityServicePrimaryImage("commercial").src,
    "/assets/crew-wrapping-office.webp",
  );
  assert.equal(
    getCityServicePrimaryImage("storage").src,
    "/assets/storage-warehouse.webp",
  );
  assert.equal(getCityServicePrimaryImage("not-a-service"), undefined);
});

test("primary images resolve to absolute canonical site URLs", () => {
  assert.equal(
    absoluteImageUrl(getLocationPrimaryImage("seattle-movers").src),
    "https://onthegomoving.com/assets/truck-seattle-skyline.webp",
  );
  assert.equal(
    absoluteImageUrl("https://cdn.example.com/image.webp"),
    "https://cdn.example.com/image.webp",
  );
});
