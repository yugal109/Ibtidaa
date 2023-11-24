import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography } from "@mui/material";

export default function BottomBar() {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      style={{
        marginTop: "2rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ToggleButton
        style={{
          backgroundColor: "black",
          width: "22%",
          border: "1px solid red",
          color: "white",
        }}
        value="left"
        aria-label="left aligned"
      >
        <Typography>Website</Typography>
      </ToggleButton>
      <ToggleButton
        style={{ backgroundColor: "white", width: "22%" }}
        value="center"
        aria-label="centered"
      >
        <Typography>App</Typography>
      </ToggleButton>
      <ToggleButton
        style={{ backgroundColor: "white", width: "22%" }}
        value="right"
        aria-label="right aligned"
      >
        <Typography>Digital Marketing</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
