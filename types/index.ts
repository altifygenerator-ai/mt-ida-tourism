export type NavItem = {
  label: string
  href: string
}

export type Category = {
  title: string
  description: string
  href: string
  image: string
}

export type Attraction = {
  title: string
  category: string
  description: string
  image: string
  href?: string
}

export type Business = {
  name: string
  category: string
  description: string
  image: string
  href?: string
  featured?: boolean
}