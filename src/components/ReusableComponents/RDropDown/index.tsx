import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface RDropDownProps {
  value: any;
  handleChange: (e: any) => void;
  data: Array<{ dataValue: any; title: string }>;
  label?: string;
  isDark?: boolean;
  isLabel?: boolean;
  placeholder?: string;
}

const RDropDown: React.FC<RDropDownProps> = ({
  handleChange,
  data: [{ title = "cs", dataValue = 20 }],
  value,
  label = "Label",
  isDark = false,
  isLabel = true,
  placeholder = "Please select a value",
}) => {
  const data = [
    { value: 20, title: "Twenty" },
    { value: 30, title: "Thirty" },
    { value: 40, title: "Forty" },
  ];
  return (
    <div>
      <FormControl fullWidth>
        <div className={`flex flex-col ${!isLabel && "mt-[24px]"}`}>
          <label
            htmlFor={label}
            className={`mb-1 text-sm ${!isLabel && "hidden"}`}
          >
            {label}
          </label>
          <Select
            placeholder="Please select a value"
            id={label}
            className={`${isDark && "bg-[#141d40] text-white"}`}
            value={value}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            IconComponent={() => (
              <ArrowDropDownIcon style={{ color: isDark ? "#fff" : "" }} />
            )}
          >
            <MenuItem disabled value="">
              <em>{placeholder}</em>
            </MenuItem>
            {data.map(({ title, value }) => (
              <MenuItem key={value} value={value}>
                {title}
              </MenuItem>
            ))}
          </Select>
        </div>
      </FormControl>
    </div>
  );
};

export default RDropDown;
