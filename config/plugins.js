module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "gocha.berulava@gmail.com",
        defaultReplyTo: "juliasedefdjian@strapi.io",
        testAddress: "gocha.berulava@gmail.com",
      },
      "routes": [
        {
          "method": "POST",
          "path": "/email",
          "handler": "Email.send",
          "config": {
            "policies": []
          }
        },
      ],
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
