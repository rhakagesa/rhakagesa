import { certifications } from "../../database/about-data";
import DropdownContent from "./DropdownContentCard";
function Certification() {
    return <DropdownContent data={certifications}/>;
}

export default Certification;