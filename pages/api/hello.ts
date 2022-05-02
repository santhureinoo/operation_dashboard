// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import {Amplify, withSSRContext} from 'aws-amplify'
import type { NextApiRequest, NextApiResponse } from 'next'

// Amplify SSR configuration needs to be enabled within each API route
// Amplify.configure({ ssr: true })


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
