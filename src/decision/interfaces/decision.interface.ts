import { Document } from 'mongoose';

export interface Decision extends Document {
  readonly title: string;
  readonly reasons: string;
  readonly author: string;
  readonly type: string;
  readonly date: string;
}
