import { useState } from "react";
import { formatUserName } from "./utils/formatUserName";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const formatted = formatUserName(firstName, lastName);
            setMessage(`Bonjour ${formatted}, bienvenue sur notre site !`);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
            <h1>Bienvenue !</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Prénom :</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Nom :</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <button type="submit">Envoyer</button>
            </form>

            {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
        </div>
    );
}

export default App;