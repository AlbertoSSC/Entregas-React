import React from "react";
import { useParams } from "react-router-dom";

import { getCharacter, CharacterEntity, EpisodeEntity, getEpisode } from "@/pods";
import { EpisodeDetailComponent } from "./Ep-Detail.component";

export const EpisodeDetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [episodeDetail, setEpisodeDetail] = React.useState<EpisodeEntity>();
  const [characterData, setCharacterData] = React.useState<CharacterEntity[]>([]);

  React.useEffect(() => {
    if (episodeDetail && episodeDetail.characters) {
      const getCharacterData = async () => {
        let characterDataDetail = [];
        await Promise.all(
          episodeDetail.characters.map(async (character) => {
            const CharacterSplit = character.split("/");
            const CharacterId = CharacterSplit[CharacterSplit.length - 1];

            const fetchCharacterData = await getCharacter(CharacterId);
            characterDataDetail.push(fetchCharacterData);
          })
        );
        setCharacterData(characterDataDetail);
      };
      getCharacterData();
    }
  }, [episodeDetail]);

  React.useEffect(() => {
    getEpisode(id).then(setEpisodeDetail);
  }, [id]);

  return !episodeDetail || !characterData ? (
    <h4>Cargando...</h4>
  ) : (
    <EpisodeDetailComponent epDetailVM={episodeDetail} characterData={characterData} />
  );
};
