import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './index.scss';

export const SimilarProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://safegoldassignment-default-rtdb.firebaseio.com/products.json'
        );
        const data = response.data;

        // Convert the object to an array
        const productArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        setProducts(productArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="similarProductsSliderWrap">
      <Typography
        sx={{
          fontFamily: "'Sarabun', sans-serif !important",
          fontSize: '30px',
          fontWeight: '600',
        }}
        variant="h6"
        gutterBottom
      >
        Similar Products you may like
      </Typography>
      <Box sx={{ display: 'flex', overflowX: 'auto', padding: '30px 0' }}>
        {products.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 250,
              maxHeight: 300,
              margin: '0 10px',
              flex: '0 0 auto',
              justifyContent: 'center',
            }}
          >
            <div className="cardImageWrap">
              <CardMedia
                sx={{ width: 'unset' }}
                component="img"
                height="140"
                image={item.imageUrl}
                alt={item.name}
              />
            </div>

            <CardContent sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  wordBreak: 'break-word',
                  fontFamily: "'Sarabun', sans-serif !important",
                }}
                variant="h6"
                component="div"
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  marginTop: '30px',
                  fontFamily: "'Sarabun', sans-serif !important",
                }}
                variant="body2"
                color="text.secondary"
              >
                Minting Charges: ₹{item.mintingCharges}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};
