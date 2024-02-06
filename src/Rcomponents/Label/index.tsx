import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

interface LabelComponentProps {
  text: string;
  className: "string";
  labelType: string;
}

const LabelComponent: React.FC<LabelComponentProps> = ({
  className,
  text,
  labelType = "label",
}) => {
  switch (labelType) {
    case "chip":
      return (
        <div
          className={`border px-[7px] py-[2px] border-[#141d40] flex justify-center items-center rounded-md text-[14px] ${className}`}
        >
          {text}
        </div>
      );

    case "amount":
      return (
        <div className={`text-[#0097cb] font-bold text-[20px] ${className}`}>
          ${text}
        </div>
      );
    case "name":
      return (
        <div className={`font-bold text-[#273567] ${className}`}>{text}</div>
      );
    case "location":
      return (
        <div className="w-full flex items-center gap-1 mt-[10px]">
          <LocationOnOutlinedIcon
            style={{ color: "#5c5c5c", marginLeft: "-4px" }}
          />
          <span className="text-[#848fac] text-[14px]">{text}</span>
        </div>
      );

    default:
      return <div className={`text-[12px] ${className}`}>{text}</div>;
  }
};

export default LabelComponent;
