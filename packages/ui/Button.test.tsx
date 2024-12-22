import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByText('Click me')).toBeInTheDocument()
    })

    it('has correct default styles', () => {
        render(<Button>Click me</Button>)
        const button = screen.getByText('Click me')
        expect(button).toHaveClass('bg-blue-500')
    })
})

