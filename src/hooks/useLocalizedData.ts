// SPDX-FileCopyrightText: 2026 Yaoyao(Freax) Qian <limyoonaxi@gmail.com>
// SPDX-License-Identifier: GPL-3.0-only

import { data } from '../data'
import { siteConfig, siteOwner } from '../site.config'

export function useLocalizedData() {
  return { ...data, siteConfig, siteOwner }
}
