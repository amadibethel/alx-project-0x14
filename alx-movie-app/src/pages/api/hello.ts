// src/pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  _req: NextApiRequest, // prefixed with _ to avoid unused variable error
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}
