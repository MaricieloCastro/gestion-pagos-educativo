import { Loader2 } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ButtonWithIcon(props) {
  const { text, icon, classNameVariants, classNameIcon, onClick, disabled } = props;
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      className={buttonVariants({ className: classNameVariants })}
    >
      {!disabled ? (
        <>
          <FontAwesomeIcon icon={icon} className={classNameIcon} />
          <p className="font-normal">{text}</p>
        </>
      ) : (
        <Loader2 className="animate-spin" />
      )}
    </Button>
  );
}

export default ButtonWithIcon;
