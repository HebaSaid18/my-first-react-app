
// const [type, setType] = useState(null);

const Button = ({ data, onSelect, children }) => {
    return (
        <button style={{ padding: "8px 16px", borderRadius: 4, border: "1px solid #ccc", backgroundColor: "#f0f0f0", cursor: "pointer" }}
            onClick={() => onSelect(data.type)}>
            {children ?? data.type}
        </button>
    );
};

export default Button;