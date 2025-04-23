import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";

const ClientProfile = () => {
  const reservations = [
    { date: "2025-03-20", time: "19:00", guests: 2 },
    { date: "2025-03-15", time: "20:30", guests: 4 },
    { date: "2025-03-10", time: "18:45", guests: 3 },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "black",
        minHeight: "100vh",
        py: 8,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      {/* Profile Info */}
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#1E1E1E",
          borderRadius: 4,
          boxShadow: 5,
          p: { xs: 3, sm: 5 },
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          color="#F4C95D"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          My Profile
        </Typography>

        <Box display="flex" justifyContent="center" mb={3}>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              bgcolor: "#A68E5D",
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            C
          </Avatar>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mb={2}
          flexWrap="wrap"
        >
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{ style: { color: "white" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#555" },
                "&:hover fieldset": { borderColor: "#A68E5D" },
                "&.Mui-focused fieldset": { borderColor: "#A68E5D" },
              },
            }}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{ style: { color: "white" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#555" },
                "&:hover fieldset": { borderColor: "#A68E5D" },
                "&.Mui-focused fieldset": { borderColor: "#A68E5D" },
              },
            }}
          />

          <TextField
            fullWidth
            label="Phone Number"
            type="tel"
            variant="outlined"
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{ style: { color: "white" } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#555" },
                "&:hover fieldset": { borderColor: "#A68E5D" },
                "&.Mui-focused fieldset": { borderColor: "#A68E5D" },
              },
            }}
          />
        </Stack>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 1,
            backgroundColor: "#A68E5D",
            color: "black",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#8C7A4D" },
          }}
        >
          Update Profile
        </Button>
      </Container>

      {/* Reservation History */}
      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#1E1E1E",
          borderRadius: 4,
          boxShadow: 5,
          p: { xs: 3, sm: 5 },
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          color="#F4C95D"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Reservation History
        </Typography>

        {reservations.length > 0 ? (
          <List>
            {reservations.map((res, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={`Date: ${res.date} | Time: ${res.time}`}
                    secondary={`Guests: ${res.guests}`}
                    primaryTypographyProps={{ sx: { color: "white" } }}
                    secondaryTypographyProps={{ sx: { color: "#aaa" } }}
                  />
                </ListItem>
                {index < reservations.length - 1 && (
                  <Divider sx={{ backgroundColor: "#555" }} />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : (
          <Typography color="gray" align="center">
            No reservations found.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default ClientProfile;
