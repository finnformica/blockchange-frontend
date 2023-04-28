import { Button } from "@mui/material";

const PillButton = ({ children, variant, onClick }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      style={{
        backgroundColor: variant === "contained" ? "#8F8EDB" : "transparent",
        color: "#FFF",
        borderColor: "#98D5D5",
        borderRadius: 32,
        fontSize: 10,
        fontWeight: 600,
        padding: "10px 40px",
      }}
    >
      {children}
    </Button>
  );
};

export default PillButton;