import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import {heroes} from '../db.json'

import {rest} from 'msw'
import {setupServer} from 'msw/node'

const handlers = [
  rest.get('http://localhost:4000/api/heroes', async (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(heroes))
  }),
]
const server = setupServer(...handlers)

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'warn',
  })
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

test('renders tour of heroes', async () => {
  render(<App />)

  await userEvent.click(screen.getByText('About'))
  expect(screen.getByTestId('about')).toBeVisible()

  await userEvent.click(screen.getByText('Heroes'))
  expect(screen.getByTestId('heroes')).toBeVisible()
})
