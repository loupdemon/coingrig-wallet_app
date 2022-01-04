const apps = [
  {
    title: 'market.market',
    screen: 'MarketScreen',
    backgroundImage: require('../../assets/hub/market.png'),
    keywords: 'market, piata, marche',
    enable: true,
    module: true,
  },
  {
    title: 'title.news',
    screen: 'NewsScreen',
    backgroundImage: require('../../assets/hub/news.png'),
    keywords: 'stiri, news, nouvelles',
    enable: true,
    module: true,
  },
  {
    title: 'settings.walletconnect',
    screen: 'WalletconnectScreen',
    backgroundImage: require('../../assets/hub/wc.png'),
    keywords: 'walletconnect',
    enable: true,
    module: true,
  },
  {
    title: 'hub.swap',
    screen: 'SwapScreen',
    backgroundImage: require('../../assets/hub/swap.png'),
    keywords: 'swap, schimb, exchange',
    enable: false,
    module: true,
  },
  {
    title: 'hub.index',
    screen: 'IndexScreen',
    backgroundImage: require('../../assets/hub/invest.png'),
    keywords: 'index, etf, invest',
    enable: false,
    module: true,
  },
  {
    title: 'hub.earn',
    screen: 'IndexScreen',
    backgroundImage: require('../../assets/hub/savings.png'),
    keywords: 'index, etf, invest, dobanda',
    enable: false,
    module: true,
  },
  {
    title: 'hub.portfolio_tracker',
    screen: '',
    backgroundImage: require('../../assets/hub/track.png'),
    keywords: 'portfolio, portofoliu, tracker',
    enable: false,
    module: true,
  },
  {
    title: 'hub.create_token',
    screen: 'NewsScreen',
    backgroundImage: require('../../assets/hub/token.png'),
    keywords: 'token, create, erc20',
    enable: false,
    module: true,
  },
  {
    title: 'hub.create_nft',
    screen: 'NewsScreen',
    backgroundImage: require('../../assets/hub/nft.png'),
    keywords: 'create, nft',
    enable: false,
    module: true,
  },
  // {
  //   title: 'Coingecko',
  //   screen: 'https://coingecko.com',
  //   backgroundImage: require('../../assets/hub/nft.png'),
  //   keywords: '-, -',
  //   enable: true,
  //   module: false,
  // },
];

export default apps;