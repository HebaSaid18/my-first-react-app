import Card from "./Card";

const PokemonGrid = ({ data }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24, flexWrap: "wrap", marginTop: 24, borderRadius: 8, padding: 16, border: "1px solid #ccc" }}>
            {data.map((pokemon) => (
                <Card key={pokemon.id} data={pokemon} />
            ))}
        </div>
    );
};

export default PokemonGrid;