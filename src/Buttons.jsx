import Button from './Button';

const Buttons = ({ data, onSelect }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24, flexWrap: "wrap", marginTop: 24, borderRadius: 8, padding: 16, border: "1px solid #ccc" }}>
            <Button data={{ type: null }} onSelect={onSelect}>
                All
            </Button>
            {data.map((pokemon) => (
                <Button key={pokemon.id} data={pokemon} onSelect={onSelect} />
            ))}
        </div>
    );
};

export default Buttons;