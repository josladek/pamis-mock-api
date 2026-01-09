const express = require('express');
const cors = require('cors');
const okresyData = require('./mockData');
const obceData = require('./mockDataObce');
const katastralneData = require('./mockDataKatastralne');

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
    // Return mock data for districts (okresy) in DataTables format
    res.json({
      sEcho: "",
      iTotalRecords: okresyData.length.toString(),
      iTotalDisplayRecords: okresyData.length.toString(),
      aaData: okresyData
    });
  } else if (typCiselnika === 'CL000025_OBEC') {
    // Return mock data for municipalities (obce) in DataTables format
    res.json(obceData);
  } else if (typCiselnika === 'CL000026_KATASTRALNE_UZEMIE') {
    // Return mock data for cadastral territories (katastrálne územia) in DataTables format
    res.json({
      sEcho: "",
      iTotalRecords: katastralneData.length.toString(),
      iTotalDisplayRecords: katastralneData.length.toString(),
      aaData: katastralneData
    });
  } else {
    // Return error for unsupported codelist types
    res.status(400).json({
      success: false,
      error: `Unsupported codelist type: ${typCiselnika}. Supported types: CL000024_OKRES, CL000025_OBEC, CL000026_KATASTRALNE_UZEMIE`
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
    description: 'Mock API for PAMIS codelists (CL000024_OKRES, CL000025_OBEC, CL000026_KATASTRALNE_UZEMIE)',
    endpoints: {
      districts: '/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES',
      municipalities: '/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000025_OBEC',
      cadastral_territories: '/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000026_KATASTRALNE_UZEMIE',
      health: '/health'
    },
    available_codelists: {
      'CL000024_OKRES': '78 Slovak districts',
      'CL000025_OBEC': '2928 Slovak municipalities',
      'CL000026_KATASTRALNE_UZEMIE': '3559 Slovak cadastral territories'
    }
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 PAMIS Mock API server is running!`);
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`\n📋 Available endpoints:`);
  console.log(`   GET http://localhost:${PORT}/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES (78 districts)`);
  console.log(`   GET http://localhost:${PORT}/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000025_OBEC (2928 municipalities)`);
  console.log(`   GET http://localhost:${PORT}/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000026_KATASTRALNE_UZEMIE (3559 cadastral territories)`);
  console.log(`   GET http://localhost:${PORT}/health`);
  console.log(`\n💡 Test districts: curl "http://localhost:${PORT}/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES"`);
  console.log(`💡 Test municipalities: curl "http://localhost:${PORT}/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000025_OBEC"`);
  console.log(`💡 Test cadastral territories: curl "http://localhost:${PORT}/pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000026_KATASTRALNE_UZEMIE"\n`);
});

module.exports = app;
