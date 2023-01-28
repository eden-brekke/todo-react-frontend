import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

export default function TaskList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://localhost:8000/api/task-list/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Box>
        <Typography variant='h1'>
          Current To Do List
        </Typography>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.title} {item.description} {item.priority} {item.completed}
            </li>
          ))}
        </ul>
      </Box>
    );
  }
}