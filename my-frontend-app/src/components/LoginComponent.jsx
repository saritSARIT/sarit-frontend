import React, { useState } from "react";
import { login } from "../servise/Http";

function LoginComponent() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            setError("");
            const token = await login(name, password);
            console.log("התחברת בהצלחה. הטוקן שהתקבל:", token);
            setName("");
            setPassword("");
        } catch (err) {
            console.error("שגיאת התחברות:", err.response?.data?.error || err.message);
            setName("");
            setPassword("");
        }
    };

    return (
        <div>
            <h2>התחברות משתמש</h2>
            <input
                type="text"
                placeholder="שם משתמש"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="password"
                placeholder="סיסמה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>התחבר</button>

        </div>
    );
}

export default LoginComponent;
