import OpenAI from 'openai';
import { OPEN_AI } from './constants';

const openai = new OpenAI({
  apiKey: OPEN_AI,
  dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
});
export default openai

