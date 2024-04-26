import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { Wrapper, Form } from "./Create.styles";

const CreateClients = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [notes, setNotes] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleSaveClient = () => {
        setLoading(true);
        axios
            .post("https://admin-control-server.onrender.com/client", {
                name,
                email,
                dob,
                phone,
                address,
                notes,
                status,
            })
            .then((res) => {
                console.log(res.data);
                setLoading(false);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    return (
        <Wrapper>
            {loading ? <Spinner /> : ""}
            <Form>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>DOB</label>
                <input
                    type="text"
                    placeholder="DOB"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                />
                <label>Phone</label>
                <input
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <label>Address</label>
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <label>Notes</label>
                <input
                    type="text"
                    placeholder="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <label>Status</label>
                <input
                    type="text"
                    placeholder="Status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <button onClick={handleSaveClient}>Save</button>
            </Form>
        </Wrapper>
    );
}

export default CreateClients;