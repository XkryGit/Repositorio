import * as apiModel from './api/charapters-collection.api-model';
import * as viewModel from './charapters-collection.vm';

export const mapFromApiToVm = (
  charapter: apiModel.charapterEntityApi
): viewModel.charapterEntityVm => ({
  id: charapter.id,
  picture: charapter.image,
  name: charapter.name,
  description: charapter.species,
  status: charapter.status,
  bestSentences: charapter.bestSentences,
});
