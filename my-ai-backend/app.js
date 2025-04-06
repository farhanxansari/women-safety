// app.js
const express = require('express');
const { spawn } = require('child_process');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint for model prediction
app.post('/api/predict', (req, res) => {
  const input = req.body.input; // Expecting input to be an array of numbers
  if (!input || !Array.isArray(input)) {
    return res.status(400).json({ error: 'Input must be an array of numbers' });
  }

  // Convert input array to a comma-separated string, e.g., "5.1,3.5,1.4,0.2"
  const inputStr = input.join(',');

  // Spawn a Python process to run the model
  const pythonProcess = spawn('python', ['model.py', inputStr]);

  let output = '';

  // Collect stdout data
  pythonProcess.stdout.on('data', (data) => {
    output += data.toString();
  });

  // Log any errors from stderr
  pythonProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  // When Python process ends, return the result to the client
  pythonProcess.on('close', (code) => {
    if (code !== 0) {
      return res.status(500).json({ error: 'Error in Python process' });
    }
    res.json({ prediction: output.trim() });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port 3000`);
});
