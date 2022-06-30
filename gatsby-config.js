module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "Zh7MmimhJds_GgwRNQpQ2gdvBZot-T00H-3NgF_obvQ",
      "spaceId": ""
    }
  }]
};