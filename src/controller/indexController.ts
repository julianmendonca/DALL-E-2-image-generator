import { FastifyInstance, FastifyRequest } from "fastify";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey:
    process.env.OPENAI_API_KEY ||
    "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",
});
const openai = new OpenAIApi(configuration);

export default async function indexController(fastify: FastifyInstance) {
  // GET /
  fastify.get("/", async function (_request: FastifyRequest) {
    const response = await openai.createImage({
      prompt: "a white siamese cat",
      n: 1,
      size: "256x256",
    });
    return response.data.data[0].url;
  });
}
