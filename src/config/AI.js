

import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = "AIzaSyAdotw_v6VU8xB3BmPsbjuuKE-ECbH56Kw";
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function run(prompt) {


  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return response.text();
}

export default run;