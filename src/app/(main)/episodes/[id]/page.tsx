"use client";

import CharacterCard from "@/components/product/character-card/CharacterCard";
import Loading from "@/components/product/loading/Loading";
import { GET_EPISODE_BY_ID } from "@/lib/queries/episodes/episodeQueries";
import { GetEpisodeById } from "@/lib/queries/episodes/types";
import { useQuery } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data, loading, error } = useQuery<GetEpisodeById>(GET_EPISODE_BY_ID, {
    variables: {
      id
    }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section>
      <div className="text-center text-4xl">
        <h1>{data?.episode.name}</h1>
        <p>
          {data?.episode.episode} / {data?.episode.air_date}
        </p>
      </div>
      <div>
        <section className="grid md:grid-cols-3 py-9 grid-cols-1 gap-5">
          {data?.episode.characters.map((item) => (
            <CharacterCard
              key={item.id}
              image={item.image}
              name={item.name}
              onClick={() => {
                router.push(`/character/${item.id}`);
              }}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Page;
