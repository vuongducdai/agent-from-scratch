import { z } from 'zod'

export const tools = [
  { name: 'weather', parameters: z.object({}).describe('get the weather') },
]
