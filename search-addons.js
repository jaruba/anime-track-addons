module.exports = [
  {
    name: 'AnimeKisa Sub',
    url: 'https://animekisa.tv%%akSubUrl%%',
    useIds: ['akSubUrl']
  },
  {
    name: 'AnimeKisa Dub',
    url: 'https://animekisa.tv%%akDubUrl%%',
    useIds: ['akDubUrl']
  },
  {
    name: '9anime',
    url: 'https://www12.9anime.to/search?keyword=%%query%%',
    space: '+'
  },
  {
    name: 'Nyaa.si',
    url: 'https://nyaa.si/?f=0&c=0_0&q=%%query%%',
    space: '+'
  },
  {
    name: '1337x',
    url: 'https://1337x.to/category-search/%%query%%/%%type%%/1/',
    space: '%20',
    types: {
      movie: 'Movies',
      series: 'TV',
    }
  },
  {
    name: 'RARBG',
    url: 'https://rarbgp2p.org/torrents.php?category=%%type%%&search=%%query%%&order=seeders&by=DESC',
    space: '+',
    types: {
      movie: '14;48;17;44;45;47;50;51;52;42;46;54',
      series: '18;41;49',
    }
  },
  {
    name: 'ThePirateBay',
    url: 'https://thepiratebay.org/search.php?q=%%query%%&video=on&search=Pirate+Search&page=0&orderby=',
    space: '+'       
  },
  {
    name: 'FilePursuit',
    url: 'https://filepursuit.com/pursuit?q=%%query%%&type=video',
    alphanumeric: true,
    space: '+'
  },
  {
    name: 'Open Directories',
    url: 'https://www.google.com/search?q=intext%3A%22%%query%%%22+intitle%3A%22index.of%22+%2B%28wmv%7Cmpg%7Cavi%7Cmp4%7Cmkv%7Cmov%29+-inurl%3A%28jsp%7Cpl%7Cphp%7Chtml%7Caspx%7Chtm%7Ccf%7Cshtml%29',
    alphanumeric: true,
    space: '+'       
  },
  {
    name: 'Funimation',
    url: '%%www.funimation.com%%',
    useIds: ['www.funimation.com']
  },
  {
    name: 'Crunchyroll',
    url: '%%www.crunchyroll.com%%',
    useIds: ['www.crunchyroll.com']
  },
  {
    name: 'AnimeLab',
    url: '%%www.animelab.com%%',
    useIds: ['www.animelab.com']
  },
  {
    name: 'VRV',
    url: '%%vrv.co%%',
    useIds: ['vrv.co']
  },
  {
    name: 'Tubi',
    url: '%%tubitv.com%%',
    useIds: ['tubitv.com']
  },
  {
    name: 'VIZ',
    url: '%%www.viz.com%%',
    useIds: ['www.viz.com']
  },
  {
    name: 'Adult Swim',
    url: '%%www.adultswim.com%%',
    useIds: ['www.adultswim.com']
  },
  {
    name: 'MyAnimeList',
    url: '%%malUrl%%',
    useIds: ['malUrl']
  },
  {
    name: 'AniList',
    url: '%%anilistUrl%%',
    useIds: ['anilistUrl']
  },
  {
    name: 'Kitsu',
    url: '%%kitsuUrl%%',
    useIds: ['kitsuUrl']
  },
  {
    name: 'Wikipedia',
    url: '%%wikiUrl%%',
    useIds: ['wikiUrl']
  },
  {
    name: 'Google',
    url: 'http://www.google.com/search?q=%%query%%',
    space: '+'
  }
]
