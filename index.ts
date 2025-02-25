import 'dotenv/config'
import { addMessages, getMessages } from './src/memory'
import { runAgent } from './src/agent'
import { z } from 'zod'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

await addMessages([{ role: 'user', content: userMessage }])


const weatherTool = {
  name: 'getWeather',
  description: 'Get the weather for a given city',
  parameters: z.object({ city: z.string() }),
}

const response = await runAgent({
  userMessage,
  tools: [weatherTool],
})

console.log(response)
