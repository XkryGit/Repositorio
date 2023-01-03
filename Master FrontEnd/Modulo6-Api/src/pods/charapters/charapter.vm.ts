export interface charapter {
  id: any;
  picture: string;
  name: string;
  description: string;
  status: string;
  bestSentences: [];
}

export const createEmptyCharapter = (): charapter => ({
  id: '',
  picture: '',
  name: '',
  description: '',
  status: '',
  bestSentences: [],
});
