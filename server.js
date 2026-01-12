const express = require('express');
const cors = require('cors');
const okresyData = require('./mockData');
const obceData = require('./mockDataObce');
const katastralneData = require('./mockDataKatastralne');
const uzpfData = require('./mockDataUzpf');

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

// ÚZPF validation endpoint
app.post('/pis/api/priv/user/eform-support/valid-cislo-uzpf', (req, res) => {
  const { cisloUzpf, druhNkp, okresKod } = req.body;

  // Check if ÚZPF number exists in mock data
  if (uzpfData[cisloUzpf]) {
    // Return valid ÚZPF data
    res.json(uzpfData[cisloUzpf]);
  } else {
    // Return invalid response
    res.json({
      cisloUzpf: cisloUzpf,
      valid: false,
      err: "Neznáme číslo ÚZPF"
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
    description: 'Mock API for PAMIS codelists and ÚZPF validation',
    endpoints: {
      districts: 'GET /pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000024_OKRES',
      municipalities: 'GET /pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000025_OBEC',
      cadastral_territories: 'GET /pis/api/priv/user/cis/ciselnik-list-upvs?typCiselnika=CL000026_KATASTRALNE_UZEMIE',
      uzpf_validation: 'POST /pis/api/priv/user/eform-support/valid-cislo-uzpf',
      health: 'GET /health'
    },
    available_codelists: {
      'CL000024_OKRES': '78 Slovak districts',
      'CL000025_OBEC': '2928 Slovak municipalities',
      'CL000026_KATASTRALNE_UZEMIE': '3559 Slovak cadastral territories'
    },
    uzpf_validation: {
      method: 'POST',
      endpoint: '/pis/api/priv/user/eform-support/valid-cislo-uzpf',
      payload_example: {
        cisloUzpf: "1",
        druhNkp: "NNKP",
        okresKod: "101"
      },
      available_test_numbers: ["1", "2", "100", "500", "1000", "2000", "5000", "10000"]
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
  console.log(`   POST http://localhost:${PORT}/pis/api/priv/user/eform-support/valid-cislo-uzpf (ÚZPF validation)`);
  console.log(`   GET http://localhost:${PORT}/health`);
  console.log(`\n💡 Test ÚZPF validation (valid): curl -X POST http://localhost:${PORT}/pis/api/priv/user/eform-support/valid-cislo-uzpf -H "Content-Type: application/json" -d "{\\"cisloUzpf\\":\\"1\\",\\"druhNkp\\":\\"NNKP\\",\\"okresKod\\":\\"101\\"}"`);
  console.log(`💡 Test ÚZPF validation (invalid): curl -X POST http://localhost:${PORT}/pis/api/priv/user/eform-support/valid-cislo-uzpf -H "Content-Type: application/json" -d "{\\"cisloUzpf\\":\\"99999\\",\\"druhNkp\\":\\"NNKP\\",\\"okresKod\\":\\"101\\"}"\n`);
});

module.exports = app;
