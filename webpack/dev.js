const developmentConfig = () => {
  const config = {
    devtool: 'source-map',
    devServer: {
      inline:true,   
      contentBase: path.resolve(__dirname, '../dist'),  
      // Enable history API fallback so HTML5 History API based
      // routing works. Good for complex setups.
      historyApiFallback: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Docker, Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
    },
  };

  return Object.assign(
    {},    
    config
  );
};

module.exports = developmentConfig;