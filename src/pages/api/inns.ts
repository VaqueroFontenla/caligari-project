import { Inn } from '@/models/Inn.model'
import type { NextApiRequest, NextApiResponse } from 'next'
import inss from '@/mocks/inns.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<Inn[]>) {
  res.status(200).json(inss)
}
