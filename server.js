const express = require('express');
const cors = require('cors');
const okresyData = require('./mockData');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Mock endpoint matching the original PAMIS API path
app.get('/pis/api/priv/user/cis/ciselnik-list-upvs', (req, res) => {
  const typCiselnika = req.query.typCiselnika;

  // Check if the requested codelist type matches
  if (typCiselnika === 'CL000024_OKRES') {
    // Return mock data in DataTables format matching PAMIS API
    res.json({
      sEcho: "",
      iTotalRecords: okresyData.length.toString(),
      iTotalDisplayRecords: okresyData.length.toString(),
      aaData: okresyData
    });
  } else {
    // Return error for unsupported codelist types
    res.status(400).json({
      success: false,
      error: `Unsupported codelist type: ${typCiselnika}. Only CL000024_OKRES is available in this mock.`
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'PAMIS Mock API is running' });
});

// Root endpoint with API info
app.get('/', (req, res) => {
  res.json({
    name: 'PAMIS Mock API',
    description: 'Mock API for PAMIS district codelist (CL000024_OKRES)',
    endpoints: {
      codelist: '/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES',
      health: '/health'
    },
    usage: 'GET /pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES'
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 PAMIS Mock API server is running!`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`\n📋 Available endpoints:`);
  console.log(`   GET http://localhost:${PORT}/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES`);
  console.log(`   GET http://localhost:${PORT}/health`);
  console.log(`\n💡 Test with: curl "http://localhost:${PORT}/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES"\n`);
});

module.exports = app;
