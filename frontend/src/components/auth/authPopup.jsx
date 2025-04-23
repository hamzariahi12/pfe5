// src/components/auth/index.jsx
import React, { useState } from "react";
import {
  Dialog,
  IconButton,
  DialogContent,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";
import ResetPasswordForm from "./resetPasswordForm";

const AuthPopup = ({ open, onClose }) => {
  const [view, setView] = useState("login");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSuccess = () => {
    onClose();
  };

  const getTitle = () => {
    switch (view) {
     
      
      case "reset":
        return "Reset Your Password";
      default:
        return "";
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      PaperProps={{
        sx: {
          borderRadius: 4,
          minWidth: fullScreen ? "100%" : 800,
          maxWidth: fullScreen ? "100%" : "90%",
          boxShadow: 10,
          overflow: "hidden",
        },
      }}
    >
      <DialogContent sx={{ px: 0, py: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: fullScreen ? "column" : "row",
            height: fullScreen ? "auto" : "100%",
            width: "100%",
          }}
        >
          {/* Gauche : Form + titre */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#fff",
              px: 4,
              py: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Bouton de fermeture */}
            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                color: "#1a1a1a",
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Titre */}
            <Box
              sx={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#1a1a1a",
                mb: 3,
              }}
            >
              {getTitle()}
            </Box>

            {/* Formulaires */}
            {view === "login" && (
              <LoginForm
                onSuccess={handleSuccess}
                switchToSignup={() => setView("signup")}
                switchToReset={() => setView("reset")}
              />
            )}
            {view === "signup" && (
              <SignupForm
                onSuccess={handleSuccess}
                switchToLogin={() => setView("login")}
              />
            )}
            {view === "reset" && (
              <ResetPasswordForm switchToLogin={() => setView("login")} />
            )}
          </Box>

          {/* Droite : Image */}
          {!fullScreen && (
            <Box
              sx={{
                flex: 1.5,
                backgroundImage: "url('back.avif')", // Assure-toi que l’image est dans public/images/
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 400, // très important
              }}
            />
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AuthPopup;
