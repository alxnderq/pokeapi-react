import Image from "next/image";

import pokeball from "~/images/pokeball.svg";
import "./pokemon-title.scss";

const PokemonTitle = (): JSX.Element => {
  return (
    <>
      <div className="pokemon-title-container">
        <div className="pokemon-title">
          <Image src={pokeball} alt="Pokemon Logo" width={40} />
          <h1>Pok&eacute;dex</h1>
        </div>
      </div>
    </>
  );
};

export default PokemonTitle;
