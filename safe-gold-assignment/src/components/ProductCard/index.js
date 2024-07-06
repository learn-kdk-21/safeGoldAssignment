import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import oneGmBack from "../../assets/1gm_back.jpeg";
import "./ProductCard.scss";

export const ProductCard = ({ productListData }) => {
  // const productListDataArr = productListData.productListData;
  return (
    <div className="productCardParent">
      {productListData.map((product, index) => {
        let differencePrice = product.fullPrice - product.discountedPrice;
        return (
          <div key={index} className="productCardWrap">
            <Card
              sx={{
                maxWidth: 345,
                position: "relative",
                marginRight: "1%",
                marginBottom: "1%",
              }}
            >
              {differencePrice > 0 ? (
                <Card
                  sx={{
                    position: "absolute",
                    padding: "5px 10px",
                    backgroundColor: "#E7F5F6",
                    color: "#083863",
                    fontWeight: "600",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div className="percentWrap">%</div>Akshay Tritya Offer
                </Card>
              ) : (
                <></>
              )}

              <div className="contentDiv">
                <div className="cardContentWrap">
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ width: "65%", margin: "auto", height: "auto" }}
                    // height="140"
                    image={product.imgAddress}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="product-price"
                    >
                      ₹ {product.discountedPrice}
                    </Typography>
                    {differencePrice > 0 ? (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="product-price"
                      >
                        <span className="cancelLine">
                          ₹ {product.fullPrice}
                        </span>{" "}
                        Save ₹ {product.fullPrice - product.discountedPrice}
                      </Typography>
                    ) : (
                      <></>
                    )}
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
          </div>
        );
      })}
    </div>
  );
};
