// ---------------------------------------------------------------------------
// TRAVEL MAP — places I've been.
// To add a stop: append { city, region?, country, lat, lng } and redeploy.
// Look up coordinates by searching "<city> lat long" (lng is negative west of
// Greenwich — all of the Americas).
// ---------------------------------------------------------------------------

export type Place = {
  city: string;
  region?: string; // state / province abbreviation, optional
  country: string;
  lat: number;
  lng: number;
  home?: boolean; // renders as a star instead of a pin
};

export const placeLabel = (p: Place) =>
  p.region ? `${p.city}, ${p.region}` : `${p.city}, ${p.country}`;

export const travels: Place[] = [
  // West coast + California
  { city: "Seattle", region: "WA", country: "USA", lat: 47.61, lng: -122.33, home: true },
  { city: "Vancouver", region: "BC", country: "Canada", lat: 49.28, lng: -123.12 },
  { city: "Portland", region: "OR", country: "USA", lat: 45.52, lng: -122.68 },
  { city: "San Francisco", region: "CA", country: "USA", lat: 37.77, lng: -122.42 },
  { city: "San Diego", region: "CA", country: "USA", lat: 32.72, lng: -117.16 },
  { city: "Los Angeles", region: "CA", country: "USA", lat: 34.05, lng: -118.24 },
  { city: "Las Vegas", region: "NV", country: "USA", lat: 36.17, lng: -115.14 },

  // Mexico
  { city: "Mexicali", region: "BC", country: "Mexico", lat: 32.65, lng: -115.47 },
  { city: "Tijuana", region: "BC", country: "Mexico", lat: 32.51, lng: -117.04 },
  { city: "Mexico City", country: "Mexico", lat: 19.43, lng: -99.13 },
  { city: "Cabo San Lucas", region: "BCS", country: "Mexico", lat: 22.89, lng: -109.91 },

  // US Midwest / South / East
  { city: "Minneapolis", region: "MN", country: "USA", lat: 44.98, lng: -93.27 },
  { city: "Urbana", region: "IL", country: "USA", lat: 40.11, lng: -88.21 },
  { city: "Chicago", region: "IL", country: "USA", lat: 41.88, lng: -87.63 },
  { city: "Indianapolis", region: "IN", country: "USA", lat: 39.77, lng: -86.16 },
  { city: "New Orleans", region: "LA", country: "USA", lat: 29.95, lng: -90.07 },
  { city: "Orlando", region: "FL", country: "USA", lat: 28.54, lng: -81.38 },
  { city: "Charlotte", region: "NC", country: "USA", lat: 35.23, lng: -80.84 },
  { city: "Outer Banks", region: "NC", country: "USA", lat: 35.56, lng: -75.53 },
  { city: "Philadelphia", region: "PA", country: "USA", lat: 39.95, lng: -75.17 },
  { city: "New York", region: "NY", country: "USA", lat: 40.71, lng: -74.01 },

  // Central America
  { city: "San Salvador", country: "El Salvador", lat: 13.69, lng: -89.19 },

  // Japan
  { city: "Tokyo", country: "Japan", lat: 35.68, lng: 139.69 },
  { city: "Kyoto", country: "Japan", lat: 35.01, lng: 135.77 },

  // Europe
  { city: "Birmingham", country: "UK", lat: 52.48, lng: -1.9 },
  { city: "Amsterdam", country: "Netherlands", lat: 52.37, lng: 4.9 },
  { city: "The Hague", country: "Netherlands", lat: 52.08, lng: 4.31 },
  { city: "Utrecht", country: "Netherlands", lat: 52.09, lng: 5.12 },
  { city: "Rotterdam", country: "Netherlands", lat: 51.92, lng: 4.48 },
  { city: "Brussels", country: "Belgium", lat: 50.85, lng: 4.35 },
  { city: "Barcelona", country: "Spain", lat: 41.39, lng: 2.17 },
  { city: "Berlin", country: "Germany", lat: 52.52, lng: 13.4 },
  { city: "Munich", country: "Germany", lat: 48.14, lng: 11.58 },
  { city: "Prague", country: "Czechia", lat: 50.08, lng: 14.44 },
  { city: "Vienna", country: "Austria", lat: 48.21, lng: 16.37 },
  { city: "Salzburg", country: "Austria", lat: 47.81, lng: 13.04 },
  { city: "Warsaw", country: "Poland", lat: 52.23, lng: 21.01 },
  { city: "Kraków", country: "Poland", lat: 50.06, lng: 19.94 },
  { city: "Budapest", country: "Hungary", lat: 47.5, lng: 19.04 },
];
