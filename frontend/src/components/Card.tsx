import { Card as MuiCard, CardActionArea } from "@mui/material";
import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactElement } from "react";

interface CardProps {
    title: string;
    icon: ReactElement;
    link: string;
}

const Card = (
    { title, icon, link }: CardProps
) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <MuiCard
        sx={{
          width: 300, // Set the width of the card
          height: 200, // Set the height of the card
          backgroundColor: "#f5f5f5", // Set the background color of the card
          margin: 2, // Add margin
          padding: 2, // Add padding
          boxShadow: 3, // Add shadow
          borderRadius: 2, // Set border radius
          overflow: "hidden", // Ensure content does not overflow the rounded corners
          transition: "0.3s", // Add transition for smooth hover effect
          "&:hover": {
            backgroundColor: "#F57C00", // Change background color on hover
            boxShadow: 6, // Increase shadow on hover
          },
        }}
      >
        <CardActionArea>
          <CardHeader
            title={title}
            sx={{
              textAlign: "center",
              padding: 1,
              backgroundColor: "#e0e0e0",
              borderTopLeftRadius: "inherit", // Inherit border radius from the parent Card
              borderTopRightRadius: "inherit", // Inherit border radius from the parent Card
              borderBottomLeftRadius: "inherit", // Inherit border radius from the parent Card
              borderBottomRightRadius: "inherit", // Inherit border radius from the parent Card
              color: "#F57C00", // Set the color of the text
            }}
          />
          <CardContent
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} // Style the CardContent
          >
            {icon} 
          </CardContent>
        </CardActionArea>
      </MuiCard>
    </Link>
  );
};

export default Card;
