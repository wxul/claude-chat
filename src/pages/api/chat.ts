// import { getLayout } from "@/backend/Layout";
// import { logger } from "@/utils/logger";
import { chat } from '@/server/chat';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createEdgeRuntimeAPI } from '@assistant-ui/react/edge';
import { getModel } from '@/server/bedrock';

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'POST') {
    const chatId = req.headers['x-chat-id'] as string;
    const params = req.body;
    if (!params || !params.message) {
      return res.status(400).json({ message: 'Parameters Error' });
    }
    const result = await chat(params.message);
    res.setHeader('x-chat-id', chatId);
    result.pipeDataStreamToResponse(res);
  } else {
    res.status(405).json({ message: 'Method Get is not support' });
  }
}
