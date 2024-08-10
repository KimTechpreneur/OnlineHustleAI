import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  careerPathSection: {
    padding: theme.spacing(8, 0),
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  roadmap: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  milestone: {
    position: 'relative',
    margin: theme.spacing(2, 0),
    padding: theme.spacing(2),
    width: '220px',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    zIndex: 1,
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    '&:hover': {
      backgroundColor: '#e0f7fa',
      transform: 'scale(1.05)',
    },
  },
  milestoneLeft: {
    marginRight: 'auto',
    marginLeft: '10px',
    transform: 'translateX(-50%)',
  },
  milestoneRight: {
    marginLeft: 'auto',
    marginRight: '10px',
    transform: 'translateX(50%)',
  },
  line: {
    position: 'absolute',
    top: '0',
    left: '50%',
    width: '4px',
    height: '100%',
    backgroundColor: '#FFA500',
    transform: 'translateX(-50%)',
    zIndex: 0,
  },
  changePathSection: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: '#ffffff',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
  },
  difficultySelect: {
    marginTop: theme.spacing(2),
    width: '100%',
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  '@media (max-width: 768px)': {
    milestoneLeft: {
      marginLeft: 'auto',
      marginRight: 'auto',
      transform: 'translateX(0)',
    },
    milestoneRight: {
      marginRight: 'auto',
      marginLeft: 'auto',
      transform: 'translateX(0)',
    },
  },
  '@media (min-width: 769px)': {
    roadmap: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: theme.spacing(4),
    },
    milestone: {
      margin: theme.spacing(4, 0),
    },
    milestoneLeft: {
      marginLeft: '0',
      marginRight: 'auto',
      position: 'relative',
      transform: 'translateX(0)',
      '&:before': {
        content: '""',
        position: 'absolute',
        left: '-8px',
        top: '50%',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: '#FFA500',
      },
    },
    milestoneRight: {
      marginLeft: 'auto',
      marginRight: '0',
      position: 'relative',
      transform: 'translateX(0)',
      '&:before': {
        content: '""',
        position: 'absolute',
        right: '-8px',
        top: '50%',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: '#FFA500',
      },
    },
    line: {
      left: 'calc(50% - 4px)',
      width: '4px',
      backgroundColor: '#FFA500',
    },
  },
}));

export default useStyles;
