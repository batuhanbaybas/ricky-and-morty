import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type ICharacterCardProps = {
  image: string;
  name: string;
  status?: string;
  locations?: string;
  onClick: () => void;
};

const CharacterCard: React.FC<ICharacterCardProps> = ({
  image,
  name,
  status,
  locations,
  onClick
}) => {
  return (
    <Card onClick={onClick} className="cursor-pointer">
      <CardHeader>
        <CardTitle className="text-center pb-2">{name}</CardTitle>
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="rounded-md"
        />
      </CardHeader>
      {status && locations && (
        <CardContent className="text-center">
          {status} , {locations}
        </CardContent>
      )}
    </Card>
  );
};
export default CharacterCard;
