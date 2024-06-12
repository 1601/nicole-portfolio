import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => (
  <div>
    <header className="bg-dark text-white text-center py-3">
      <h1>Nicole's Portfolio</h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/resume.pdf" download="Nicole_Resume.pdf">Resume</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
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
              image="https://picsum.photos/seed/highschool/1600/900"
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
              image="https://picsum.photos/seed/college/1600/900"
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
              image="https://picsum.photos/seed/dog/1600/900"
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
              image="https://picsum.photos/seed/anime/1600/900"
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
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <p>&copy; 2024 Nicole's Portfolio</p>
    </footer>
  </div>
);

export default App;
