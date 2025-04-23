import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";

const ReservationCard = () => {
  const [reservations, setReservations] = useState([
    { id: 1, date: "2025-03-20", time: "19:00", guests: 2, selected: false },
    { id: 2, date: "2025-03-15", time: "20:30", guests: 4, selected: false },
    { id: 3, date: "2025-03-10", time: "18:45", guests: 3, selected: false },
  ]);

  const handleSelect = (id) => {
    setReservations((prev) =>
      prev.map((res) =>
        res.id === id ? { ...res, selected: !res.selected } : res
      )
    );
  };

  const handleDelete = () => {
    setReservations((prev) => prev.filter((res) => !res.selected));
  };

  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 6,
        px: 2,
      }}
    >
      <Card
        sx={{
          backgroundColor: "#1E1E1E",
          borderRadius: 4,
          boxShadow: 5,
          width: "100%",
          maxWidth: 800,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ color: "#F4C95D", fontWeight: 600 }}
          >
            Verify Your Reservations
          </Typography>

          {reservations.length > 0 ? (
            <List>
              {reservations.map((res) => (
                <React.Fragment key={res.id}>
                  <ListItem
                    sx={{
                      bgcolor: res.selected ? "#2a2a2a" : "transparent",
                      borderRadius: 2,
                      transition: "0.3s",
                      px: 2,
                    }}
                  >
                    <Checkbox
                      checked={res.selected}
                      onChange={() => handleSelect(res.id)}
                      sx={{
                        color: "#A68E5D",
                        "&.Mui-checked": {
                          color: "#F4C95D",
                        },
                      }}
                    />
                    <ListItemText
                      primary={`Date: ${res.date} | Time: ${res.time}`}
                      secondary={`Guests: ${res.guests}`}
                      primaryTypographyProps={{ sx: { color: "white" } }}
                      secondaryTypographyProps={{ sx: { color: "gray" } }}
                    />
                  </ListItem>
                  <Divider sx={{ backgroundColor: "#444" }} />
                </React.Fragment>
              ))}
            </List>
          ) : (
            <Typography color="gray" align="center" mt={3}>
              No reservations available.
            </Typography>
          )}

          <Stack spacing={2} mt={4}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#A68E5D",
                color: "black",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#8C7A4D" },
              }}
            >
              Confirm Selected Reservations
            </Button>

            <Button
              fullWidth
              variant="outlined"
              onClick={handleDelete}
              sx={{
                color: "#A68E5D",
                borderColor: "#A68E5D",
                fontWeight: 600,
                "&:hover": {
                  color: "#8C7A4D",
                  borderColor: "#8C7A4D",
                },
              }}
            >
              Delete Selected Reservations
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ReservationCard;
