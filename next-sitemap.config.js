/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.tripstravels.co.uk',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/'] }
    ],
    additionalSitemaps: ['https://www.tripstravels.co.uk/sitemap.xml']
  }
}
