module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "Zh7MmimhJds_GgwRNQpQ2gdvBZot-T00H-3NgF_obvQ",
      "spaceId": "adp96o2sx60u"
    }
  },
  {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "gatsbywebsite1",
    },
  }]
};