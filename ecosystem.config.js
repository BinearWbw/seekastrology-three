module.exports = {
  apps: [
    {
      name: 'taptogame',
      exec_mode: 'cluster',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      instances: 'max',
      autorestart: true,
      watch: true,
      max_memory_restart: '4G',
      max_restarts: 10, // 做多重启次数
      ignore_watch: ['node_modules', 'logs'],
    },
  ],
}
