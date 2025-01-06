/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://platnova.com",
  generateRobotsTxt: true, // (optional)
  exclude: ["/cookies-policy", "/terms", "/privacy-policy", '/business/transactions'],
  // ...other options
};
