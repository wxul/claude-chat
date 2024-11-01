// import { getLayout } from "@/backend/Layout";
// import { logger } from "@/utils/logger";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: "Hello from Next.js!" });
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   //   const reqId = req.headers["x-request-id"] as string;
//   //   logger.info(`[${reqId || "null"}]:Request Begin`);

//   if (req.method === "POST") {
//     // Process a POST request
//     const params = req.body;
//     // logger.info(`[${reqId || "null"}]:Request`, { params });

//     if (!params) {
//       res.status(400).json({ message: "Parameters Error" });
//       return;
//     }
//     res.status(200).json({ test: "aa" });
//     // try {
//     //   const result = await getLayout(params);
//     //   if (result) {
//     //     logger.info(`[${reqId || "null"}]:Success`, { result });
//     //     res.status(200).json(result);
//     //   } else {
//     //     logger.error(`[${reqId || "null"}]:Failed`, { error: "" });
//     //     res.status(500).json({ message: "Internal Server Error" });
//     //   }
//     // } catch (error: any) {
//     //   logger.error(`[${reqId || "null"}]:Failed`, { error: error?.message });
//     //   res.status(500).json({ message: "Internal Server Error" });
//     // }
//   } else {
//     res.status(405).json({ message: "Method Get is not support" });
//   }
// }
