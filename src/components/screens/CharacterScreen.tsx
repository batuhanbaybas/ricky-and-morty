"use client";

import { GET_ALL_CHARACTER } from "@/lib/queries/characters/characterQueries";

import { useQuery } from "@apollo/client";
import React from "react";
import CharacterCard from "../product/character-card/CharacterCard";
import {
  GetAllCharactersResponse,
  SingleCharacterMap
} from "@/lib/queries/characters/types";
import Pagination from "../product/pagination/Pagination";
import { useRouter } from "next/navigation";
import Loading from "../product/loading/Loading";

const CharacterScreen = () => {
  const [page, setPage] = React.useState(1);
  const router = useRouter();

  const { data, loading, error } = useQuery<GetAllCharactersResponse>(
    GET_ALL_CHARACTER,
    {
      variables: {
        page
      }
    }
  );

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setPage((prev) => prev - 1);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const total = data?.characters.info.pages;

  return (
    <>
      <main className="grid md:grid-cols-3 grid-cols-1 gap-3 ">
        {data?.characters.results.map(
          (character: SingleCharacterMap, index: number) => (
            <CharacterCard
              onClick={() => router.push(`/character/${character.id}`)}
              key={index}
              image={character.image}
              name={character.name}
              status={character.status}
              locations={character.location.name}
            />
          )
        )}
      </main>
      <Pagination
        page={page}
        total={total as number}
        loading={loading}
        next={handleNext}
        previous={handlePrevious}
      />
    </>
  );
};

export default CharacterScreen;
