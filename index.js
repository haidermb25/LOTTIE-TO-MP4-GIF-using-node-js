const express = require('express');
const converter = require('lottie-converter');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Helper function to convert Lottie file to the desired format
async function convertToFormat(format, filename) {
    try {
        const lottieData = JSON.parse(await fs.readFileSync('lottieFiles.json', 'utf8'));
        
        // Get the width and height from the Lottie JSON file
        let width = lottieData.w || 1024;  
        let height = lottieData.h || 1024; 
        
        // For mp4 format, force width and height to 1024
        if (format === 'mp4') {
            width = 1024;
            height = 1024;
        }

        // Perform conversion
        const converted = await converter({
            file: await fs.readFileSync('lottieFiles.json'),
            filename: 'hi.json', 
            format: format,
            width: width,    
            height: height   
        });

        const outputFile = `${filename}.${format}`;
        fs.writeFileSync(outputFile, converted, 'base64');
        return outputFile;
    } catch (error) {
        console.error(`Conversion to ${format} failed:`, error);
        throw error;
    }
}

// Route to convert and download in specified format
app.get('/', async (req, res) => {
    const format = 'mp4'; 
    let filename = 'converted';

    // Check if the requested format is supported
    const supportedFormats = ['gif', 'mp4'];
    if (!supportedFormats.includes(format)) {
        return res.status(400).send('Unsupported format');
    }

    try {
        const outputFile = await convertToFormat(format, filename);
        res.download(outputFile, (err) => {
            if (err) {
                console.error('File download failed:', err);
                res.status(500).send('File download failed');
            }
            // Optionally, delete the file after download
            fs.unlinkSync(outputFile);
        });
    } catch (error) {
        res.status(500).send('An error occurred during conversion');
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
