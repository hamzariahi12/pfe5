import React from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const dishes = [
  { 
    name: "abd lekrim", 
    image: "/assets/steak.jpg", 
    category: "Main Course", 
    description: "Juicy and tender steak, grilled to perfection and served with a side of vegetables."
  },
  { 
    name: "laaaroussy", 
    image: "/assets/pasta.jpg", 
    category: "Pasta", 
    description: "Creamy Alfredo sauce tossed with fettuccine and topped with parmesan cheese."
  },
  { 
    name: "crispy nan", 
    image: "/assets/salad.jpg", 
    category: "Salad", 
    description: "Fresh romaine lettuce, croutons, and parmesan cheese with a classic Caesar dressing."
  },
  { 
    name: "bahroun", 
    image: "/assets/dessert.jpg", 
    category: "Dessert", 
    description: "Warm and gooey chocolate cake with a melted chocolate center, served with vanilla ice cream."
  }
];

const FeaturedDishes = () => {
  
  return (
    <Box sx={{ width: "100%", py: 5, backgroundColor: "black", color: "white", textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" mb={4} color="whitesmoke">
        🍽️ Featured restaurant 🍽️
      </Typography>

      {/* Cards Wrapper */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        gap: 3, 
        px: 5, 
        flexWrap: "wrap" // Ensures responsiveness
      }}>
        {dishes.map((dish, index) => (
          <Card 
            key={index} 
            sx={{ 
              maxWidth: 300, 
              minWidth: 250,
              backgroundColor: "#1a1a1a", 
              border: "1px solid #A68E5D", 
              borderRadius: 3, 
              boxShadow: 3, 
              transition: "0.3s", 
              "&:hover": { boxShadow: 6 }
            }}
          >
            <CardMedia 
              component="img" 
              image={dish.image} 
              alt={dish.name} 
              sx={{ 
                width: "100%", 
                height: 200, 
                objectFit: "cover", 
                borderRadius: "5px 5px 0 0" 
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="white">
                {dish.name}
              </Typography>
              <Typography variant="body2" color="#A68E5D">
                {dish.category}
              </Typography>
              <Typography variant="body2" color="gray" mt={1}>
                {dish.description}
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: "#A68E5D", 
                  color: "white", 
                  fontWeight: "bold", 
                  mt: 2, 
                  "&:hover": { backgroundColor: "#8c7845" }
                }}
              >
                Order Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* View More Dishes Button */}
      <Box sx={{ mt: 5 }}>
        <Button
          variant="contained" 
          sx={{ 
            backgroundColor: "#A68E5D", 
            color: "white", 
            fontWeight: "bold", 
            mt: 2, 
            "&:hover": { backgroundColor: "#8c7845" }
          }}
        >
          View More Dishes
        </Button>
      </Box>
    </Box>
  );
};

export default FeaturedDishes;