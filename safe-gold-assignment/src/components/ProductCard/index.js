import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import oneGmBack from "../../assets/1gm_back.jpeg";
import "./ProductCard.scss";

export const ProductCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        position: "relative",
        marginRight: "1%",
        marginBottom: "1%",
      }}
    >
      <div className="contentDiv">
        <div className="cardContentWrap">
          <CardMedia
            component="img"
            alt="green iguana"
            sx={{ width: "65%", margin: "auto", height: "auto" }}
            // height="140"
            image={oneGmBack}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              1gm Gold Coin SafeGold (99.99%)
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="product-price"
            >
              ₹ 4235
            </Typography>
          </CardContent>
        </div>
        <CardActions className="cardButtonWrap">
          <Button
            variant="contained"
            size="small"
            className="buttonViewDetails"
            style={{
              backgroundColor: "#00bbb4",
              color: "#fff",
              height: "48px",
              borderRadius: "5px",
              minWidth: "120px",
            }}
          >
            View Details
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
