import { Document, Schema, Model, model} from "mongoose";
import { IChampion } from '@lol/api-interface';

// export interface IChampionModel extends IChampion, Document{}

const championModel = new Schema({
  _id: { type: String, required: true },
  key: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: Object, required: true },
  tags: { type: Array, required: true },
  partype: { type: String, required: true },
  stats: { type: Object, required: true },
  spells: { type: Array, required: true },
  passive: { type: Object, required: true }
});

// championModel.pre
// export const Champion:  = model('champion', championModel);
