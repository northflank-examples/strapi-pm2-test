module.exports = {
  apps: [
    {
      name: 'strapi1',
      script: '/cnb/lifecycle/launcher',
      args: 'yarn start'
    },
    {
      name: 'strapi2',
      script: '/cnb/lifecycle/launcher',
      args: 'yarn start',
      env: {
        PORT: 1338
      }
    }
  ]
}
