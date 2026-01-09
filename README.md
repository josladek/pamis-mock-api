# PAMIS Mock API

Public mock API server for the PAMIS district codelist (`CL000024_OKRES`).

## Overview

This mock API replicates the PAMIS endpoint for Slovak districts (okresy), making it publicly accessible for testing without authentication.

**Original endpoint (requires auth):**
```
https://www.pamiatky.sk/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES
```

**Mock endpoint (public, no auth):**
```
http://localhost:3000/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Usage

### Start the server locally

```bash
npm start
```

The server will start on `http://localhost:3000`

### Test the endpoint

```bash
curl "http://localhost:3000/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES"
```

## Response Format

```json
{
  "success": true,
  "data": [
    {
      "kod": "BA1",
      "nazov": "Bratislava I",
      "kraj": "Bratislavský"
    },
    {
      "kod": "BA2",
      "nazov": "Bratislava II",
      "kraj": "Bratislavský"
    }
    // ... more districts
  ],
  "count": 79,
  "typCiselnika": "CL000024_OKRES"
}
```

## Data Coverage

The mock includes all 79 Slovak districts (okresy) organized by regions (kraje):
- Bratislavský kraj (8 districts)
- Trnavský kraj (7 districts)
- Trenčiansky kraj (8 districts)
- Žilinský kraj (11 districts)
- Banskobystrický kraj (13 districts)
- Prešovský kraj (13 districts)
- Košický kraj (11 districts)
- Nitriansky kraj (7 districts)

## Deploying Publicly

To make this available on a public URL, you can deploy to:

### Option 1: Render.com (Free)
1. Push this code to a GitHub repository
2. Go to [render.com](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Use these settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Deploy

### Option 2: Railway.app (Free tier)
1. Push this code to a GitHub repository
2. Go to [railway.app](https://railway.app)
3. Create a new project from GitHub repo
4. Railway will auto-detect and deploy

### Option 3: Glitch.com (Free)
1. Go to [glitch.com](https://glitch.com)
2. Create a new project
3. Import from GitHub or copy the files
4. It will auto-start

### Option 4: Vercel (Free)
Add `vercel.json`:
```json
{
  "version": 2,
  "builds": [{ "src": "server.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "/server.js" }]
}
```
Then deploy with Vercel CLI.

## Environment Variables

- `PORT` - Server port (default: 3000)

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES` | GET | Get district codelist |
| `/health` | GET | Health check |
| `/` | GET | API information |

## Features

- CORS enabled for all origins
- Exact path matching with original PAMIS API
- All 79 Slovak districts included
- No authentication required
- JSON response format

## License

MIT
