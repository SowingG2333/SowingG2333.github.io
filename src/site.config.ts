// SPDX-FileCopyrightText: 2026 Yaoyao(Freax) Qian <limyoonaxi@gmail.com>
// SPDX-License-Identifier: GPL-3.0-only

/**
 * Site configuration — imports from content/site.json
 *
 * Users edit content/site.json (pure JSON, no code needed).
 * This file computes derived values used by components.
 */

import siteJson from '@content/site.json'
import { DEFAULT_SECTIONS } from './templates/slots'

export type SiteSkill = string | {
  name: string
  icon?: string
  category?: string
}

export interface SiteConfig {
  template: string
  components: Record<string, string>
  sections: string[]
  name: {
    full: string
    first: string
    nickname?: string
    last: string
    display: string
    authorVariants: string[]
  }
  title: string
  tagline?: string
  avatar: string
  terminal: {
    username: string
    rotatingSubtitles: string[]
    skills: SiteSkill[]
    timezone: string
  }
  contact: {
    email: string
    academicEmail: string
    hiringEmail: string
    location: string
  }
  social: Record<string, string>
  pets?: {
    name: string
    emoji: string
    image: string
    title: string
    description: string
  }[]
  features: Record<string, boolean>
  heroSocialIcons?: {
    platform: string
    icon: string
    label: string
    color: string
  }[]
  selectedPublicationIds: string[]
}

function normalizeTimezone(timezone: unknown): string {
  if (typeof timezone !== 'string' || timezone.trim() === '') {
    return 'UTC'
  }

  try {
    Intl.DateTimeFormat('en-US', { timeZone: timezone })
    return timezone
  } catch {
    return 'UTC'
  }
}

function normalizeSkills(skills: unknown): SiteSkill[] {
  if (!Array.isArray(skills)) return []

  const normalized: SiteSkill[] = []

  for (const skill of skills) {
    if (typeof skill === 'string') {
      normalized.push(skill)
      continue
    }

    if (skill && typeof skill === 'object' && typeof (skill as { name?: unknown }).name === 'string') {
      normalized.push({
        name: (skill as { name: string }).name,
        icon: typeof (skill as { icon?: unknown }).icon === 'string' ? (skill as { icon?: string }).icon : undefined,
        category: typeof (skill as { category?: unknown }).category === 'string' ? (skill as { category?: string }).category : undefined,
      })
    }
  }

  return normalized
}

function normalizeSiteConfig(raw: Record<string, any>): SiteConfig {
  const social = (raw.social ?? {}) as Record<string, string>
  const contact = raw.contact ?? {}
  const terminal = raw.terminal ?? {}

  return {
    template: raw.template ?? 'terminal',
    components: raw.components ?? {},
    sections: Array.isArray(raw.sections) ? raw.sections : DEFAULT_SECTIONS,
    name: {
      full: raw.name?.full ?? '',
      first: raw.name?.first ?? '',
      nickname: raw.name?.nickname ?? raw.name?.first ?? '',
      last: raw.name?.last ?? '',
      display: raw.name?.display ?? raw.name?.full ?? '',
      authorVariants: Array.isArray(raw.name?.authorVariants) ? raw.name.authorVariants : [],
    },
    title: raw.title ?? '',
    tagline: raw.tagline ?? '',
    avatar: raw.avatar ?? '',
    terminal: {
      username: terminal.username ?? '',
      rotatingSubtitles: Array.isArray(terminal.rotatingSubtitles) ? terminal.rotatingSubtitles : [],
      skills: normalizeSkills(terminal.skills),
      timezone: normalizeTimezone(terminal.timezone),
    },
    contact: {
      email: contact.email ?? '',
      academicEmail: contact.academicEmail ?? contact.email ?? '',
      hiringEmail: contact.hiringEmail ?? contact.email ?? '',
      location: contact.location ?? '',
    },
    social,
    pets: Array.isArray(raw.pets) ? raw.pets : [],
    features: raw.features ?? {},
    heroSocialIcons: Array.isArray(raw.heroSocialIcons) ? raw.heroSocialIcons : [],
    selectedPublicationIds: Array.isArray(raw.selectedPublicationIds) ? raw.selectedPublicationIds : [],
  }
}

// ═══════════════════════════════════════════════════════════════
// The config object — mirrors content/site.json
// ═══════════════════════════════════════════════════════════════

export const siteConfig = normalizeSiteConfig(siteJson)
// ═══════════════════════════════════════════════════════════════
// Derived values — computed automatically, do NOT edit
// ═══════════════════════════════════════════════════════════════

/** GitHub username extracted from URL */
export const githubUsername = siteConfig.social.github.split('/').pop() ?? ''

/** Selected publication IDs as a Set for fast lookup */
export const selectedPublicationIds = new Set<string>(siteConfig.selectedPublicationIds)

/** Auto-generated navigation from enabled features */
export const navItems = [
  { path: '/', labelKey: 'nav.home' },
  ...(siteConfig.features.publications ? [{ path: '/publications', labelKey: 'nav.publications' }] : []),
  ...(siteConfig.features.experience ? [{ path: '/experience', labelKey: 'nav.experience' }] : []),
  ...(siteConfig.features.projects ? [{ path: '/projects', labelKey: 'nav.projects' }] : []),
  ...(siteConfig.features.articles ? [{ path: '/articles', labelKey: 'nav.articles' }] : []),
  ...(siteConfig.features.guide !== false ? [{ path: '/guide', labelKey: 'nav.guide' }] : []),
] as const

/** Hero social icons with resolved URLs from social config */
export const heroSocialIcons = (siteConfig.heroSocialIcons ?? []).map(item => ({
  icon: item.icon,
  label: item.label,
  color: item.color,
  href: (siteConfig.social as Record<string, string>)[item.platform] ?? '',
}))

/**
 * Backward-compatible `siteOwner` — components import this shape.
 */
export const siteOwner = {
  name: siteConfig.name,
  terminalUsername: siteConfig.terminal.username,
  rotatingSubtitles: siteConfig.terminal.rotatingSubtitles,
  contact: {
    email: siteConfig.contact.email,
    academicEmail: siteConfig.contact.academicEmail,
    hiringEmail: siteConfig.contact.hiringEmail,
    location: siteConfig.contact.location,
    linkedin: siteConfig.social.linkedin,
  },
  social: siteConfig.social,
  timezone: siteConfig.terminal.timezone,
  skills: siteConfig.terminal.skills,
  pets: (siteConfig.pets ?? []) as { name: string; emoji: string; image: string; title: string; description: string }[],
} as const
