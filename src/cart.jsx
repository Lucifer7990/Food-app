import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import Drawer from "@mui/material/Drawer";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import FastfoodRoundedIcon from "@mui/icons-material/FastfoodRounded";
import { pink } from "@mui/material/colors";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

export default function App() {
  const [state, setState] = React.useState({
    right: false,
  });
  const data = [
    {
      id: 1,
      foodName: "Pizza Margherita",
      price: 10.99,
      img: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1872&q=80",
      description:
        "Traditional Neapolitan pizza with tomato sauce, mozzarella, and fresh basil.",
    },
    {
      id: 2,
      foodName: "Chicken Alfredo Pasta",
      price: 12.5,
      img: "https://images.unsplash.com/photo-1522666257812-173fdc2d11fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      description:
        "Creamy pasta dish with grilled chicken, Alfredo sauce, and Parmesan cheese.",
    },
    {
      id: 3,
      foodName: "Vegetable Stir-Fry",
      price: 8.75,
      img: "https://images.unsplash.com/photo-1543826173-1beeb97525d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1142&q=80",
      description: "Healthy stir-fried vegetables served with jasmine rice.",
    },
    {
      id: 4,
      foodName: "Grilled Salmon",
      price: 15.25,
      img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description: "Fresh grilled salmon fillet seasoned with herbs and lemon.",
    },
    {
      id: 5,
      foodName: "Caesar Salad",
      price: 6.99,
      img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Classic Caesar salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
    },
    {
      id: 6,
      foodName: "Cheeseburger",
      price: 9.5,
      img: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      description:
        "Juicy beef patty topped with cheese, lettuce, tomato, and pickles in a bun.",
    },
    {
      id: 7,
      foodName: "Mushroom Risotto",
      price: 11.25,
      img: "https://images.unsplash.com/photo-1609770424775-39ec362f2d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      description:
        "Creamy Arborio rice cooked with mushrooms, onions, white wine, and Parmesan cheese.",
    },
    {
      id: 8,
      foodName: "BBQ Ribs",
      price: 16.99,
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      description:
        "Tender pork ribs glazed with barbecue sauce, served with coleslaw and fries.",
    },
    {
      id: 9,
      foodName: "Sushi Platter",
      price: 22.5,
      img: "https://images.unsplash.com/photo-1676037150408-4b59a542fa7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Assorted sushi rolls with fresh fish, avocado, cucumber, and pickled ginger.",
    },
    {
      id: 10,
      foodName: "Chocolate Brownie Sundae",
      price: 7.99,
      img: "https://images.unsplash.com/photo-1528740096961-3798add19cb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Warm chocolate brownie topped with vanilla ice cream, whipped cream, and chocolate sauce.",
    },
  ];

  const [cart, setCart] = React.useState([]);
  const addCart = (id) => {
    setCart([...cart, id]);
  };
  const removeCart = (id) => {
    setCart(cart.filter((item) => item !== id));
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = (id) => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  var action = (
    <React.Fragment>
      <Button
        color="secondary"
        size="small"
        onClick={() => {
          let id = cart.push();
          removeCart(id);
        }}
      >
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Item Added"
        action={action}
      />
      <AppBar position="static">
        <Toolbar>
          <RestaurantIcon />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "10px" }}
          >
            Eat Me
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={toggleDrawer("right", true)}
            >
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartTwoToneIcon />
              </Badge>
            </IconButton>
            <Drawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {cart.length > 0 ? (
                  cart.map((id) =>
                    data
                      .filter((item) => item.id === id)
                      .map((item) => (
                        <ListItem
                          key={item.id}
                          secondaryAction={
                            <IconButton
                              onClick={() => {
                                removeCart(item.id);
                              }}
                              edge="end"
                              aria-label="delete"
                            >
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: pink[500] }}>
                              <FastfoodRoundedIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.foodName}
                            secondary={"Price : " + item.price + "$"}
                            style={{ marginRight: "50px" }}
                          />
                        </ListItem>
                      ))
                  )
                ) : (
                  /**/
                  <Typography variant="h5" style={{ margin: "20px" }}>
                    No items in cart
                  </Typography>
                )}
              </List>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
      <Typography
        align="center"
        style={{ marginTop: "50px" }}
        variant="h3"
        gutterBottom
      >
        Products
      </Typography>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "20px",
          flexGrow: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 250, margin: "10px" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image={item.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.foodName}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Price : {item.price}$
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" disableElevation>
                order now
              </Button>
              <Button
                size="small"
                onClick={() => {
                  handleClick(item.id);
                  addCart(item.id);
                }}
                variant="outlined"
                disableElevation
              >
                add to cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </Box>
  );
}
