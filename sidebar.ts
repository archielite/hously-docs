import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/hously/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/hously/release-notes' },
      { text: 'Upgrade Guide', link: '/hously/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/hously/installation' },
      { text: 'SSL', link: '/hously/ssl' },
      { text: 'License', link: '/hously/license' },
      { text: 'API', link: '/hously/api' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Theme options', link: '/hously/theme-options' },
      { text: 'Menus', link: '/hously/menus' },
      { text: 'Widgets', link: '/hously/widgets' },
      { text: 'Custom CSS/JS', link: '/hously/usage-custom-css-js.md' },
      { text: 'Translation', link: '/hously/usage-translation' },
      { text: 'Real Estate', link: '/hously/real-estate' },
      { text: 'Email', link: '/hously/usage-email' },
      { text: 'Multi-language', link: '/hously/usage-multi-language' },
      { text: 'Media - Setup Amazon S3', link: '/agon/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/agon/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/agon/usage-media-wasabi' },
      { text: 'Analytics', link: '/hously/usage-analytics' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[]
