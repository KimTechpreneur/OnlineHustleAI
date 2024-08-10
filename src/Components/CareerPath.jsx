import React from 'react';
import { Container, Typography, Box, Paper, Tooltip, MenuItem, Select } from '@mui/material';
import useStyles from './CareerPathStyles';

const CareerPath = () => {
  const classes = useStyles();
  const milestones = [
    { title: 'Start', description: 'Begin your journey with us.', color: '#d1c4e9' },
    { title: 'Step 1', description: 'Complete your profile.', color: '#b3e5fc' },
    { title: 'Step 2', description: 'Explore side hustles.', color: '#c8e6c9' },
    { title: 'Step 3', description: 'Choose a path.', color: '#ffe0b2' },
    { title: 'Success', description: 'Achieve your goals!', color: '#ffccbc' },
  ];

  return (
    <section className={classes.careerPathSection}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Hi [UserName], This is Your Path to Success
        </Typography>
        <Box className={classes.changePathSection}>
          <Typography variant="h6" component="h3" gutterBottom>
            Change Your Path Based on Skill Level
          </Typography>
          <Select
            className={classes.difficultySelect}
            defaultValue="easy"
            variant="outlined"
            fullWidth
          >
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </Box>
        <Box className={classes.roadmap}>
          <div className={classes.line}></div>
          {milestones.map((milestone, index) => (
            <Tooltip key={index} title={milestone.description} arrow>
              <Paper
                elevation={3}
                className={`${classes.milestone} ${index % 2 === 0 ? classes.milestoneLeft : classes.milestoneRight}`}
                style={{ backgroundColor: milestone.color }}
              >
                <Typography variant="h6" component="h3">
                  {milestone.title}
                </Typography>
              </Paper>
            </Tooltip>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default CareerPath;
