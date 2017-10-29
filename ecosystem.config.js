module.exports = {
  apps: [
    {
      name: 'gupy-swapi',
      script: './index.js',
      node_args: [
        '--inspect'
      ],
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 80
      }
    }
  ]
}
