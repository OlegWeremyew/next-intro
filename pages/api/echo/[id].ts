import {NextApiRequest, NextApiResponse} from "next";

interface IdNextApiRequest extends NextApiRequest {
  query: {
    id: string
  }
}

export default function getById(req: IdNextApiRequest, res: NextApiResponse) {
  res.json({
    yourID: req.query.id,
  })
}
