module.exports = {
  apps: [
    {
      name: 'gupy-swapi',
      script: './index.js',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 80
      }
    },
    {
      name: 'swapi-front',
      script: 'front/scripts/start.js',
      cwd: 'front',
      env: {
        HTTPS: true,
        PORT: 3002,
        REACT_APP_DEV_SW: true
      }
    },
    {
      name: 'gupy-swapi-dev',
      script: './index.js',
      node_args: [
        '--inspect'
      ],
      watch: [
        './schema',
        './server',
        './*.js'
      ],
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      }
    }
  ]
}
