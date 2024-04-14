import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarCN = () => {
    return (
        <Avatar>
            <AvatarImage src="https://es.visafoto.com/img/ejemplo-de-foto-del-dni-peruano.webp" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
};

export default AvatarCN;