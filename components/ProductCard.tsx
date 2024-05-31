import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Wrapper = styled.div`
  font-size: 4rem;
  .container {
    background: #323234;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    min-height: 80vh;
    flex-wrap: wrap;
  }

  .item-card {
    min-height: 70%;
    height: 100%;
    padding: 20px;
    border: 1px solid grey;
    margin: 30px;
    box-shadow: rgba(115, 169, 200, 70.2) 10px 0px 20px;
  }

.button-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
  }
`;

interface cardProps {
  data: {
    id: string;
    name: string;
    color: string;
    price: string;
    category: string;
    brand: string;
    photo: string;
  }[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export default function ProductCard({
  data,
  addToCart,
  removeFromCart,
}: cardProps) {
  console.log("data from card comp", data);
  return (
    <Wrapper>
      <div className="container">
        {data &&
          data?.map((item: any) => (
            <div key={item.id} className="item-card">
              <Card
                sx={{ maxWidth: 345, height: "70%", background: "#999999", }}
                key={item.id}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={item.photo}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.category} - {item?.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <div className="button-container">
                    <Button
                      variant="contained"
                      sx={{ margin: "5px", background: "#191919" }}
                      onClick={() => addToCart(item)}
                      startIcon={<AddShoppingCartIcon />}
                    >
                      Add to cart
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ margin: "5px", background: "#D05353" }}
                      onClick={() => {
                        removeFromCart(item);
                      }}
                      startIcon={<DeleteIcon />}
                    >
                      Remove from cart
                    </Button>
                  </div>
                </CardActions>
              </Card>
            </div>
          ))}
      </div>
    </Wrapper>
  );
}
