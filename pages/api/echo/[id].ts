import {NextApiRequest, NextApiResponse} from "next";

interface IdNextApiRequest extends NextApiRequest {
  query: {
    id: string
  }
}

export default function getById(req: IdNextApiRequest, res: NextApiResponse) {
  // res.statusCode = 200
  // res.setHeader('content-type', 'application/json')
  // res.end(req.query.id)
  res.json({
    yourID: req.query.id,
  })
}