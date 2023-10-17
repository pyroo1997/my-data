module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.REACT_APP_STRAPE_API_KEY': JSON.stringify(process.env.REACT_APP_STRAPE_API_KEY),
            'process.env.REACT_APP_DEV_URL': JSON.stringify(process.env.REACT_APP_DEV_URL),
        })
    ]
}