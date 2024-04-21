import { Mail } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonWithIcon(props) {
  const { text, icon, classNameVariants, classNameIcon, onClick } = props;
  return (
    <Button
      onClick={onClick}
      className={buttonVariants({ className: classNameVariants })}
    >
      <FontAwesomeIcon icon={icon} className={classNameIcon} />
      <p className="font-normal">{text}</p>
    </Button>
  );
}

export default ButtonWithIcon;
