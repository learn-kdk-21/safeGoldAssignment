import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Advertisement } from '../Advertisement';
import './ProductCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateLoginStatus } from '../../store/reducers/authentication';

export const ProductCard = ({ productListData = [] }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openLoginModal = useSelector(
    (state) => state?.authentication?.auth?.openLoginModal
  );
  console.log('openLoginModal', openLoginModal);
  const authSafeGold = localStorage.getItem('authSafeGold');

  const handleNavigate = (path, productId) => {
    if (authSafeGold) {
      const fullPath = `${path}?productId=${encodeURIComponent(productId)}`;
      navigate(fullPath);
    } else {
      console.log('hi');
      dispatch(updateLoginStatus(true));
    }
  };

  return (
    <div className="productCardParent">
      {productListData.map((product, index) => {
        let differencePrice = product.marketPrice - product.currentPrice;
        return (
          <React.Fragment key={index}>
            <div className="productCardWrap">
              <Card
                sx={{
                  height: '100%',
                  width: '100%',
                  minWidth: 345,
                  position: 'relative',
                }}
              >
                {differencePrice > 0 ? (
                  <Card
                    sx={{
                      position: 'absolute',
                      padding: '5px 10px',
                      backgroundColor: 'rgba(203, 230, 230, 0.5)',
                      color: '#083863',
                      fontWeight: '600',
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <div className="percentWrap">%</div>
                    {product.offer}
                  </Card>
                ) : (
                  <></>
                )}

                <div className="contentDiv">
                  <div className="cardContentWrap">
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      sx={{
                        width: '13rem',
                        margin: 'auto',
                        height: '15rem',
                      }}
                      image={product.imageUrl}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="product-price"
                      >
                        ₹ {product?.currentPrice}
                      </Typography>
                      {differencePrice > 0 ? (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="product-price"
                        >
                          <span className="cancelLine">
                            ₹ {product?.marketPrice}
                          </span>{' '}
                          Save ₹ {product?.marketPrice - product?.currentPrice}
                        </Typography>
                      ) : (
                        <></>
                      )}
                    </CardContent>
                  </div>
                  <CardActions className="cardButtonWrap">
                    <Button
                      onClick={() =>
                        handleNavigate('/product-details', product?.id)
                      }
                      variant="contained"
                      size="small"
                      className="buttonViewDetails"
                      style={{
                        backgroundColor: '#00bbb4',
                        color: '#fff',
                        height: '48px',
                        borderRadius: '5px',
                        minWidth: '120px',
                      }}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </div>
            {index === 2 && <Advertisement />}
          </React.Fragment>
        );
      })}
    </div>
  );
};
