module.exports = {
  siteMetadata: {
    title: `Shaykh Fadhlalla Haeri`,
    siteUrl: "https://thebookofguidance.com",
    url: "https://thebookofguidance.com",
    description:
      "Who are you, really?",
    image:
      "https://thebookofguidance.com/img/tree_structure.jpg",
    twitterUsername: "@SFH_Foundation",
  },
  plugins: [
    {
      resolve: `gatsby-theme-andy`,
      options: {
        hideDoubleBrackets: true,
        mdxOtherwiseConfigured: true,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [`gatsby-remark-embedder`],
      },
    },
  ],
};
