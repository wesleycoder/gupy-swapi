module.exports = {
  apps: [
    {
      name: 'gupy-swapi',
      script: './index.js',
      node_args: [
        '--inspect'
      ],
      watch: [
        './schema/**/*.js',
        './server/**/*.js',
        './*.js'
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
