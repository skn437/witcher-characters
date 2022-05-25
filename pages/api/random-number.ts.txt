import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.json({ num: Math.floor(Math.random() * 10) });
};
