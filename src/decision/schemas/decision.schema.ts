import * as mongoose from 'mongoose';

export const decisionSchema = new mongoose.Schema({
  title: String,
  reasons: String,
  author: String,
  type: String,
  date: String,
});
