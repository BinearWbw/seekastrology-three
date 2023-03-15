import axios from 'axios'
const sitemap = [
  {
    path: '/sitemap.xml',
    hostname: 'https://taptogame.com/',
    cacheTime: 1000 * 60 * 60 * 24,
    gzip: true,
    generate: false,
    exclude: ['/game', '/search','/download'],
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
          url: '/best',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/category',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/hot',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/new',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/top',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
      ]
      let addArr = []
      let res1 = await axios.get(
        'https://api.taptogame.com/api/sitemap/games?origin=taptogame'
      )
      res1.data.data.map((item) => {
        const encodedName = item.name
          .replace(/[^a-zA-Z0-9\\s]/g, '-')
          .toLowerCase()
        addArr.push({
          url: `/game/${encodedName}`,
          changefreq: 'always',
          priority: 0.8,
          lastmod: new Date(),
        })
        addArr.push({
          url: `/download/${encodedName}`,
          changefreq: 'always',
          priority: 0.8,
          lastmod: new Date(),
        })
      })
      let res2 = await axios.get(
        'https://api.taptogame.com/api/category?origin=taptogame&page=1&size=10000'
      )
      res2.data.data.map((item) => {
        addArr.push({
          url: `/category/${item.name.toLowerCase()}`,
          changefreq: 'always',
          priority: 0.8,
          lastmod: new Date(),
        })
      })
      routes = routes.concat(addArr)
      return routes
    },
  },
  {
    path: '/wwwsitemap.xml',
    hostname: 'https://www.taptogame.com/',
    cacheTime: 1000 * 60 * 60 * 24,
    gzip: true,
    generate: false,
    exclude: ['/game', '/search'],
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
          url: '/best',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/category',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/hot',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/new',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
        {
          url: '/top',
          changefreq: 'always',
          priority: 0.7,
          lastmod: new Date(),
        },
      ]
      let addArr = []
      let res1 = await axios.get(
        'https://api.taptogame.com/api/sitemap/games?origin=taptogame'
      )
      res1.data.data.map((item) => {
        addArr.push({
          url: `/game/${item.name
            .replace(/[^a-zA-Z0-9\\s]/g, '-')
            .toLowerCase()}-${item.id}`,
          changefreq: 'always',
          priority: 0.8,
          lastmod: new Date(),
        })
      })
      let res2 = await axios.get(
        'https://api.taptogame.com/api/category?origin=taptogame&page=1&size=10000'
      )
      res2.data.data.map((item) => {
        addArr.push({
          url: `/category/${item.name.toLowerCase()}`,
          changefreq: 'always',
          priority: 0.8,
          lastmod: new Date(),
        })
      })
      routes = routes.concat(addArr)
      return routes
    },
  },
]
export default sitemap
