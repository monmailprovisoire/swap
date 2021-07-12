import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://beco-site.netlify.app/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://beco-site.netlify.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://beco-site.netlify.app/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: 'https://beco-site.netlify.app/referrals',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: "Overview",
        href: 'https://bsc.becoswap.info',
      },
      {
        label: "Tokens",
        href: 'https://bsc.becoswap.info/tokens',
      },
      {
        label: "Pairs",
        href: 'https://bsc.becoswap.info/pairs',
      },
      {
        label: "Accounts",
        href: 'https://bsc.becoswap.info/accounts',
      },
    ],
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://beco-site.netlify.app/lottery',
  },
  {
    label: 'Launchpad',
    icon: 'IfoIcon',
    href: 'https://beco-site.netlify.app/launchpad',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
  },

  {
    label: 'Bridge',
    icon: 'BridgeIcon',
    href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
  },

  {
    label: 'Becochain',
    icon: 'ChainIcon',
    href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
  },

  {
    label: 'Stocks',
    icon: 'StockIcon',
    href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
  },

  {
    label: 'Supply Chain',
    icon: 'SupplyChainIcon',
    href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
  },
  
  {
    label: 'Shops',
    icon: 'NftIcon',
    href: 'https://teespring.com/stores/momo-swap?page=1',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
      },
      {
        label: 'Voting',
        href: 'https://snapshot.org/#/becoswap.eth',
      },
      {
        label: 'Github',
        href: 'https://github.com/monmailprovisoire?tab=repositoriesp',
      },
      {
        label: 'Docs',
        href: 'https://monmailprovisoire.gitbook.io/momo-swap/',
      },
      {
        label: 'Blog',
        href: 'https://monmailprovisoire.medium.com/',
      }
    ],
  },

]

export default config
