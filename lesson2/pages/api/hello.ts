import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // Handle the request and response here
    res.status(200).json({ name: 'John Doe' });
}