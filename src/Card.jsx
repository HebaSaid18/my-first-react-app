const Card = ({ data }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: 16, width: 200, borderRadius: 8, textAlign: "center" }}>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                alt={data.name}
            />
            <h2>{data.name}</h2>
            <p>Type: {data.type}</p>
            <p>HP: {data.hp}</p>
            <p>Attack: {data.attack}</p>
        </div>
    );
};

export default Card;