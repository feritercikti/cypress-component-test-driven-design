// src/components/HeaderBarBrand.test.tsx
import HeaderBarBrand from './HeaderBarBrand'
import {render, screen, within, act} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

describe('HeaderBarBrand', () => {
  const setup = () =>
    render(
      <BrowserRouter>
        <HeaderBarBrand />
      </BrowserRouter>,
    )

  it('should verify external link attributes', async () => {
    setup()
    const link = await screen.findByTestId('header-bar-brand-link')
    expect(link).toHaveAttribute('href', 'https://reactjs.org/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')

    // not easy to get a tag with RTL, needed to use a test id
    within(await screen.findByTestId('header-bar-brand')).getByTestId(
      'react-icon-svg',
    )
  })

  it('should verify internal link spans and navigation', async () => {
    setup()
    const navLink = await screen.findByTestId('navLink')
    const withinNavLink = within(navLink)
    ;['TOUR', 'OF', 'HEROES'].map(part => withinNavLink.getByText(part))

    await act(async () => {
      navLink
    })

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(window.location.pathname).toBe('/')
  })
})
