import axios from 'axios'
const sitemap = [
  {
    path: '/sitemap.xml',
    hostname: 'https://seekastrology.com/',
    cacheTime: 1000 * 60 * 60 * 24,
    gzip: true,
    generate: false,
    exclude: [
      '/test/details',
      '/resources/details',
      '/zodiac/details',
      '/horroscope',
      '/tarot/details',
      '/tarot/type',
    ],
    defaults: {
      changefred: 'always',
      lastmod: new Date(),
    },
    routes: async () => {
      let routes = [
        {
          url: '/',
          changefreq: 'always',
          priority: 1,
          lastmod: new Date(),
        },
        {
          url: '/astrology/',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/support/',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/resources/',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/tarot/',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/test/',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/zodiac/',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
      ]
      let addArr = []
      let res2 = await axios.get(
        'https://astro.doitme.link/api/news/all?origin=seekastrology&page=1&size=10000'
      )
      res2.data.data.list.map((item) => {
        addArr.push(
          `/resources/details/${item.name
            .trim()
            .replace(/[^\w\d]/g, '-')
            .toLowerCase()}-${item.id}/`
        )
      })
      let res1 = await axios.get(
        'https://astro.doitme.link/api/quiz/all?origin=seekastrology&page=1&size=10000'
      )
      res1.data.data.list.map((item) => {
        addArr.push(
          `/test/details/${item.name
            .trim()
            .replace(/[^\w\d]/g, '-')
            .toLowerCase()}-${item.id}/`
        )
      })
      let res3 = await axios.get(
        'https://astro.doitme.link/api/astro/all?origin=seekastrology&page=1&size=10000'
      )
      res3.data.data.map((item) => {
        addArr.push(
          `/zodiac/details/${item.name
            .replace(/[^a-zA-Z0-9\\s]/g, '-')
            .toLowerCase()}-${item.id}/`
        )
      })
      let res4 = await axios.get(
        'https://astro.doitme.link/api/astro/basic?origin=seekastrology'
      )
      res4.data.data.map((item) => {
        addArr.push(
          `/horroscope/${item.name
            .replace(/[^a-zA-Z0-9\\s]/g, '-')
            .toLowerCase()}-${item.id}/`
        )
      })
      let res5 = await axios.get(
        'https://astro.doitme.link/api/tarot/all?origin=seekastrology'
      )
      res5.data.data.list.map((item) => {
        addArr.push(
          `/tarot/details/${item.name
            .replace(/[^a-zA-Z0-9\\s]/g, '-')
            .toLowerCase()}-${item.id}/`
        )
      })
      let res6 = [1, 2, 3, 4]
      res6.map((item) => {
        addArr.push(`/tarot/type/${item}/`)
      })
      routes = routes.concat(addArr)
      return routes
    },
  },
]
export default sitemap
