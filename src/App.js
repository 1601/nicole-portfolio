import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardMedia, CardContent } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Nicole's Portfolio
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Intern &amp; Fourth Year Student
        </Typography>
        <Typography variant="body1">
          I love dogs and anime. Here’s a bit more about me.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/1600x900/?highschool"
              alt="High School"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <Typography variant="body1">
                High School: Placeholder
              </Typography>
              <Typography variant="body1">
                College: Placeholder
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/1600x900/?college"
              alt="College"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Education
              </Typography>
              <Typography variant="body1">
                High School: Placeholder
              </Typography>
              <Typography variant="body1">
                College: Placeholder
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/1600x900/?dog"
              alt="Dog"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Hobbies
              </Typography>
              <Typography variant="body1">
                Dogs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/1600x900/?anime"
              alt="Anime"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Hobbies
              </Typography>
              <Typography variant="body1">
                Anime
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
