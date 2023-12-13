"use client";

import Loading from "@/components/product/loading/Loading";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GET_SINGLE_CHARACTER_BY_ID } from "@/lib/queries/characters/characterQueries";
import { GetSingleCharacterByIdResponse } from "@/lib/queries/characters/types";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data, loading, error } = useQuery<GetSingleCharacterByIdResponse>(
    GET_SINGLE_CHARACTER_BY_ID,
    {
      variables: {
        id
      }
    }
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <Image
          src={data?.character.image ?? ""}
          alt={data?.character.name ?? ""}
          width={500}
          height={500}
          className="rounded-md"
        />
        <div className="text-center text-2xl md:py-0 py-4 md:px-3 px:0">
          <h2>{data?.character.name}</h2>
          <p>
            {data?.character.species} - {data?.character.gender} /{" "}
            {data?.character.status}
          </p>

          <Separator className="my-6" />

          <h3>Origin</h3>
          <p>{data?.character.origin.name}</p>

          <Separator className="my-6" />

          <h3>Location</h3>
          <p>{data?.character.location.name}</p>
        </div>
      </div>
      <section className="py-6">
        <h3 className="text-center text-3xl pb-6">Episodes</h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {data?.character.episode.map((item) => (
            <Badge
              key={item.id}
              className="cursor-pointer text-xl text-center"
              onClick={() => router.push(`/episodes/${item.id}`)}
            >
              {item.name} - {item.air_date}
            </Badge>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Page;
