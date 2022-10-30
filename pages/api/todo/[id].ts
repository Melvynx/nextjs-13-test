// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Todo } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../src/lib/prisma';

type Data = {
  todo?: Todo;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // only patch method

  if (req.method === 'PATCH') {
    const body = JSON.parse(req.body);

    const todo = await prisma.todo.update({
      where: {
        id: parseInt(req.query.id as string),
      },
      data: body,
    });
    res.status(200).json({ todo });
  }

  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    const todo = await prisma.todo.create({
      data: body,
    });
    res.status(200).json({ todo });
  }
}
