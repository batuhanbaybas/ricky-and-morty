"use client";

import Pagination from "@/components/product/pagination/Pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { GET_ALL_EPISODE } from "@/lib/queries/episodes/episodeQueries";
import {
  GetAllEpisodesResponse,
  SingleEpisodeResponse
} from "@/lib/queries/episodes/types";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Loading from "../product/loading/Loading";

const EpisodesScreen = () => {
  const router = useRouter();
  const [page, setPage] = React.useState(1);
  const { data, loading, error } = useQuery<GetAllEpisodesResponse>(
    GET_ALL_EPISODE,
    {
      variables: {
        page
      }
    }
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setPage((prev) => prev - 1);
  };

  const numberOfPages = data?.episodes.info.pages;

  return (
    <>
      <Accordion className="text-lg" type="single" collapsible>
        {data?.episodes.results.map((episode: SingleEpisodeResponse) => (
          <AccordionItem key={episode.name} value={episode.name}>
            <AccordionTrigger>
              {episode.name} - {episode.episode} / {episode.air_date}{" "}
            </AccordionTrigger>
            <AccordionContent className="text-lg">
              <h3 className="text-center pb-10 text-3xl">Characters</h3>
              <ul className="grid md:grid-cols-4 grid-cols-2 gap-y-5 gap-x-3">
                {episode.characters.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => router.push(`/character/${item.id}`)}
                    className="flex flex-col justify-center py-1 items-center gap-y-3 cursor-pointer  hover:bg-gray-100 hover:rounded-md dark:hover:bg-gray-700"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <Pagination
        page={page}
        total={numberOfPages as number}
        loading={loading}
        next={handleNext}
        previous={handlePrevious}
      />
    </>
  );
};

export default EpisodesScreen;
