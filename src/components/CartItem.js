import { Card, CardMedia, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useShoppingCart } from '../context/shoppingCartContext';
import {useSelector} from 'react-redux';
import {combineReducers} from 'redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartItem = (props) => {
  const { removeFromCart } = useShoppingCart();
  const { item } = props;

  return (
    <Card>
      <Box display="flex">
        <Box>
            <CardMedia
              component="img"
              sx={{ width: 80, height: 80, p:1 }}
              image={item.image}
              alt="Live from space album cover"
              />
        </Box>
        <Box px={2} display="flex" flexDirection="column" justifyContent="center" flexGrow={1}>
          <Box>
            <Typography fontWeight="bold">
              {item.title}
            </Typography>
          </Box>
          <Box>
          <Typography fontWeight="bold" color="primary">
            $ {item.price/100}
            </Typography>
          </Box>
        </Box>
        <Box px={2} display="flex" flexDirection="column" justifyContent="center">
          <Typography fontWeight="bold" color="primary">
            x {item.quantity}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <IconButton aria-label="delete" onClick={() => removeFromCart(item.id)}>
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default CartItem;