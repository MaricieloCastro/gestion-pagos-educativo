import { Mail } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonWithIcon(props) {
  const { text, icon, classNameVariants } = props;
  return (
    <Button className={buttonVariants({ className: classNameVariants })}>
      <FontAwesomeIcon icon={icon} className="pr-3" />{" "}
      <p className="font-normal">{text}</p>
    </Button>
  );
}

export default ButtonWithIcon;