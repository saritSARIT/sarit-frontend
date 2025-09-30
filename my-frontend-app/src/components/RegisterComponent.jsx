import React, { useState } from "react";
import { register } from "../servise/Http";

function RegisterComponent() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async () => {
        try {
            setMessage("");
            const result = await register(name, password);
            console.log("הרשמתך בוצעה בהצלחה! כעת תוכל להתחבר.", result);
            setName("");
            setPassword("");
        } catch (err) {
            console.log("שגיאת רישום:", err.response?.data?.error || err.message);
            setName("");
            setPassword("");
        }
    };

    return (
        <div>
            <h2>רישום משתמש חדש</h2>
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
            <button onClick={handleRegister}>הרשם</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default RegisterComponent;
