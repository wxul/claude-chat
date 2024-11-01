import { generateText, streamText } from 'ai';
import { getModel } from './bedrock';

export async function chat(
  input: string,
  options?: {
    system?: string;
  }
) {
  const stream = await streamText({
    model: getModel(),
    messages: [
      {
        role: 'system',
        content: options?.system || 'Hello, how can I help you today?',
      },
      {
        role: 'user',
        content: input,
      },
    ],
  });
  return stream;
}

export async function chatAsync(
  input: string,
  options?: {
    system?: string;
  }
) {
  const stream = await generateText({
    model: getModel(),
    messages: [
      {
        role: 'system',
        content: options?.system || 'Hello, how can I help you today?',
      },
      {
        role: 'user',
        content: input,
      },
    ],
  });
  return stream;
}
