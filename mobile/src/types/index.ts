export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
};

export type MarketsProps = PlaceProps & {
  latitude: number;
  longitude: number;
  address: string;
};
