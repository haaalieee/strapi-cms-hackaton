module.exports = () => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "ST0bg0c4b4Dk_W0xIetFE-I7hMUZsqa6trGdIMIhSwA",
      sites: [
        {
          name: 'cms-web-ar',
          id: "083adf6c-a9e9-4297-8d5b-6432711e586c",
          buildHook: "https://api.netlify.com/build_hooks/6465d254e833ba4e40b80459",
          branch: 'master' // optional
        }
      ]
    },
  },
});
