import { logosIcon } from "../../database/about-data";
import IconLogo from "./IconLogo";

function ToolTechnology() {
  return (
    <div className="flex flex-wrap gap-2 max-sm:justify-center">
      {logosIcon &&
        logosIcon.map((item, index) => <IconLogo key={index} imgsrc={item} />)}
    </div>
  );
}

export default ToolTechnology;
