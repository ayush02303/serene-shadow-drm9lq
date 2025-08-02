export default function RandomPokemon() {
  const pokeNum = Math.floor(Math.random() * 150) + 1;
  return (
    <div>
      <h1>Pokemon #{pokeNum}</h1>
    </div>
  );
}
