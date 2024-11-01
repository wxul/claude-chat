import { bedrock } from '@ai-sdk/amazon-bedrock';

export function getModel() {
  return bedrock('anthropic.claude-3-5-sonnet-20240620-v1:0');
}
