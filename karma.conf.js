// Karma configuration
// Generated on Sat Feb 14 2015 18:21:02 GMT-0500 (EST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-chai',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

        frameworks: ['mocha', 'chai'],

        files: [
            'test/**/*.js'
        ],





        preprocessors: {
            'test/js/**/*.js': ['webpack']
        },


        reporters: ['progress'],


        port: 9876,

        colors: true,


        logLevel: config.LOG_INFO,


        autoWatch: true,


        browsers: ['Chrome'],


        singleRun: false,

        webpack: {
            module: {
                loaders: [
                    {test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader'}
                ]
            }
        }



    });
};
