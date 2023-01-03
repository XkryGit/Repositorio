export interface charapterEntityApi {
  id: any;
  image: string;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: string[];
  url: string;
  created: string;
  bestSentences: [];
}
