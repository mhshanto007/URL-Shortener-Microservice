const express = require("express")
const dns = require("dns")
const { URL } = require("url")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// In memory database:
const urlDatabase = []


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/api/shorturl", (req, res) => {

  const originalUrl = req.body.url

  let hostname

  try {
    const parsedUrl = new URL(originalUrl)
    hostname = parsedUrl.hostname
  } catch (err) {
    return res.json({ error: "invalid url" })
  }

  dns.lookup(hostname, (err) => {

    if (err) {
      return res.json({ error: "invalid url" })
    }

    const shortUrl = urlDatabase.length + 1

    urlDatabase.push({
      original_url: originalUrl,
      short_url: shortUrl
    })

    res.json({
      original_url: originalUrl,
      short_url: shortUrl
    })
  })
})

app.get("/api/shorturl/:short_url", (req, res) => {

  const shortUrl = parseInt(req.params.short_url)

  const entry = urlDatabase.find(
    item => item.short_url === shortUrl
  )

  if (!entry) {
    return res.json({ error: "No short URL found" })
  }

  res.redirect(entry.original_url);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})