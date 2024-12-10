import { certifications } from "../../database/about-data";
import DropdownContent from "./DropdownContent";
function Certification() {
    return <DropdownContent data={certifications}/>;
}

export default Certification;