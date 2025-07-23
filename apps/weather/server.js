import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather Dashboard',
    apiKey: process.env.OPENWEATHERMAP_API_KEY || ''
  });
});

app.get('/api/weather/:city', async (req, res) => {
  const { city } = req.params;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenWeatherMap API key not configured' });
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error('Weather data not found');
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Weather app running at http://localhost:${port}`);
});