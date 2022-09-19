import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export function OutlinedCard() {
  const scrollPositionRef = useRef(0);
  const containerRef = useRef();

  const handleBack = () => {
    scrollPositionRef.current = scrollPositionRef.current - 200 < 0 ? 0 : scrollPositionRef.current - 200;
    containerRef.current.scroll({
      left: scrollPositionRef.current,
      behavior: 'smooth'
    });
  }

  const handleForward = () => {
    scrollPositionRef.current = scrollPositionRef.current + 200 > 7 * 200 ? 7 * 200 : scrollPositionRef.current + 200;
    containerRef.current.scroll({
      left: scrollPositionRef.current,
      behavior: 'smooth'
    });
  }

  return (
    <Box sx={{
      heightL: "200px",
      margin: "15px 15px 0 15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"

    }}>
      <div ref={containerRef} style={{
        width: "615px",
        overflowY: "scroll",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Card variant="outlined" style={{ minWidth: "205px" }}>{card}</Card>
        <Card variant="outlined" style={{ minWidth: "205px", border: "1px solid black" }}>{card}</Card>
        <Card variant="outlined" style={{ minWidth: "205px" }}>{card}</Card>
        <Card variant="outlined" style={{ minWidth: "205px" }}>{card}</Card>
        <Card variant="outlined" style={{ minWidth: "205px" }}>{card}</Card>
        <Card variant="outlined" style={{ minWidth: "205px" }}>{card}</Card>
        <Card variant="outlined" style={{ minWidth: "205px" }}>{card}</Card>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%"
      }}>
        <ArrowBackIcon onClick={handleBack} />
        <ArrowForwardIcon onClick={handleForward} />
      </div>
    </Box >
  );
}

export default OutlinedCard;
