module.exports={
  // publicPath:process.env.NODE_ENV==='production'?'./':'/'
  publicPath: process.env.NODE_ENV == 'development' ? './' : '/test-daily/', 
  entry: '@/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
        rules: [{
            test: /\.vue$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: require.resolve("@/main.js"),
                    options: {
                        prefix: true
                    }
                }
            ]
        }]
    }

}