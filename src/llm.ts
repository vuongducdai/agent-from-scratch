import { zodFunction } from 'openai/helpers/zod.mjs'
import type { AIMessage } from '../types'
import { openai } from './ai'


export const runLLM = async ({
  model = 'gpt-4o-mini',
  messages,
  tools,
  // How creative you want the model to
  temperature = 0.1,
}: {
  messages: AIMessage[]
  temperature?: number
  model?: string
  tools: any[]
}) => {
  const formattedTools = tools.map(zodFunction)

  const response = await openai.chat.completions.create({
    model,
    messages,
    temperature,
    tools: formattedTools,
    tool_choice: 'auto'
  })

  return response.choices[0].message
}
