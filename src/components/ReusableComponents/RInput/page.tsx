import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

interface RInputProps {
  value: string;
  onChange: (e: any) => void;
  label: string;
  type?: string;
  error?: boolean;
}

const RInput: React.FC<RInputProps> = ({
  onChange,
  value,
  label,
  type = "text",
  error = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => setShowPassword((pre) => !pre);

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={label}>{label}</label>
      <TextField
        id={label}
        type={showPassword ? "text" : type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        error={error}
        InputProps={
          type === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : {}
        }
      />
    </div>
  );
};

export default RInput;
