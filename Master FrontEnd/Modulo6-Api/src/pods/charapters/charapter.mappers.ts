import * as apiModel from './api/charapter.api-model';
import * as viewModel from './charapter.vm';

export const mapCharapterFromApiToVm = (
  charapter: apiModel.Charapter
): viewModel.charapter => ({
  id: charapter.id,
  picture: charapter.image,
  name: charapter.name,
  description: charapter.species,
  status: charapter.status,
  bestSentences: charapter.bestSentences,
});

export const mapCharapterFromVmToApi = (
  charapter: viewModel.charapter
): apiModel.Charapter =>
  ({
    id: charapter.id,
    image: charapter.picture,
    name: charapter.name,
    species: charapter.description,
    status: charapter.status,
    bestSentences: [charapter.bestSentences],
  } as unknown as apiModel.Charapter);
