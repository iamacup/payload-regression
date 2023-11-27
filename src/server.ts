import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const seed = async () => {
  const modelPlayer = await payload.create({
    collection: "features",
    data: {
      selector: [
        {
          blockType: "SelectorSizeBlock",
          default: [
            {
              blockType: "BasicSelector",
              query: "some-value",
              matchNumber: 0,
            },
          ],
        },
      ],
    },
  });
};

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3000);

  seed();
}

start()
