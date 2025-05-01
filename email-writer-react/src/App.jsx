import { useState } from 'react'
import './App.css'
import { Container, TextField, Typography,Box, FormControl, Select, MenuItem, InputLabel, CircularProgress, Button } from '@mui/material';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async () => {

  };


  return (
    <Container maxWidth='md' sx={{py:4}}>
      <Typography variant='h3' component='h1' gutterButton>
        Email Reply Generator
      </Typography>

      <Box sx={{ mx: 3}}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant='outlined'
          label="Initial Email Content"
          value={emailContent || ''}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb:2 }}/>

          <FormControl fullWidth sx={{ mb:2 }}>
            <InputLabel>Tone (optional) </InputLabel>
            <Select
              value={tone || ''}
              label={"Tone (optional)"}
              onChange={(e) => setTone(e.target.value)}>
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
              </Select>
          </FormControl>

          <Button
            variant ='contained'
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth>
            {loading ? <CircularProgress size ={24}/> : "Generete Reply"}
          </Button>
      </Box>

      {error && (
        <Typography color='error' sx={{ mb:2 }}>
          {error}
        </Typography> 
      )}

      {generatedReply && (
        <Box sx={{ mt: 3}}>
          <Typography variant='h6' gutterBottom>
            Generated Reply:
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant='outlined'
            value={generatedReply || ''}
            inputProps={{ readOnly: true}}/>

          <Button
            variant='outlined'
            sx={{ mt:2 }}
            onClick={() => navigator.clipboard.writeText(generatedReply)}>
              Copy to clipboard
          </Button>    
        </Box>  
      )}
    </Container>
  )
}

export default App
