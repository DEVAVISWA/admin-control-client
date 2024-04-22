import React, { useEffect } from "react"; // Add missing import statement for useEffect
import BackButton from "../../components/BackButton";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react"; // Remove duplicate import statement for useState

const EditClients = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [notes, setNotes] = useState("");
    const [status, setStatus] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:3000/client/${id}`)
            .then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
                setDob(response.data.dob);
                setPhone(response.data.phone);
                setAddress(response.data.address);
                setNotes(response.data.notes);
                setStatus(response.data.status);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.response.data);
                setLoading(false);
            });
    }, []); // Remove extra pair of curly braces

    const handleEditClient = () => {
        const data = {
            name,
            email,
            dob,
            phone,
            address,
            notes,
            status,
        };
        setLoading(true);
        axios
            .put(`http://localhost:3000/client/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

    return (
        <div>
            <BackButton />
            <h1
                style={{
                    color: 'black',
                    margin: '1rem',
                }}
            >Edit client</h1>
            {loading ? <Spinner /> : ""}
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                borderWidth: "2px",
                borderRadius: "0.75rem",
                width: "600px",
                padding: '1rem',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}
            > 
                <div
                style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem'
                }}
                >
                    <label
                    style={{
                        fontSize: '1.5rem',
                        marginRight: '1rem'
                    }}
                    >Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    style={{
                        borderWidth: '2px',
                        borderRadius: '5px',
                        borderColor: '#DBDAEA',
                        padding: '0.5rem',
                        width: '100%'
                    }}
                    />
                </div>
                <div
                style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem'
                }}
                >
                    <label
                    style={{
                        fontSize: '1.5rem',
                        marginRight: '1rem'
                    }}
                    >Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    style={{
                        borderWidth: '2px',
                        borderRadius: '5px',
                        borderColor: '#DBDAEA',
                        padding: '0.5rem',
                        width: '100%'
                    }}
                    />
                </div>
                <div
                style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem'
                }}
                >
                    <label
                    style={{
                        fontSize: '1.5rem',
                        marginRight: '1rem'
                    }}
                    >DOB</label>
                    <input
                        type="text"
                        placeholder="DOB"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    style={{
                        borderWidth: '2px',
                        borderRadius: '5px',
                        borderColor: '#DBDAEA',
                        padding: '0.5rem',
                        width: '100%'
                    }}
                    />
                </div>
                <div
                style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem'
                }}>
                    <label
                    style={{
                        fontSize: '1.5rem',
                        marginRight: '1rem'
                    }}
                    >Phone</label>
                    <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    style={{
                        borderWidth: '2px',
                        borderRadius: '5px',
                        borderColor: '#DBDAEA',
                        padding: '0.5rem',
                        width: '100%'
                    }}
                    />
                </div>
                <div
                style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem'
                }}>
                    <label
                    style={{
                        fontSize: '1.5rem',
                        marginRight: '1rem'
                    }}
                    >Address</label>
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    style={{
                        borderWidth: '2px',
                        borderRadius: '5px',
                        borderColor: '#DBDAEA',
                        padding: '0.5rem',
                        width: '100%'
                    }}
                    />
                </div>
                <div
                style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem'
                }}>
                    <label
                    style={{
                        fontSize: '1.5rem',
                        marginRight: '1rem'
                    }}
                    >Notes</label>
                    <input
                        type="text"
                        placeholder="Notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    style={{
                        borderWidth: '2px',
                        borderRadius: '5px',
                        borderColor: '#DBDAEA',
                        padding: '0.5rem',
                        width: '100%'
                    }}
                    />
                </div>
                <div
                style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem'
                }}>
                    <label
                    style={{
                        fontSize: '1.5rem',
                        marginRight: '1rem'
                    }}
                    >Status</label>
                    <input
                        type="text"
                        placeholder="Status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    style={{
                        borderWidth: '2px',
                        borderRadius: '5px',
                        borderColor: '#DBDAEA',
                        padding: '0.5rem',
                        width: '100%'
                    }}
                    />
                </div>
                <button
                style={{
                    padding: '1rem',
                    backgroundColor: '#00a6ff',
                    color: '#ffffff',
                    margin: '2rem',
                    marginLeft: '0',
                    borderRadius: '0.5rem',
                    width: '100px',
                    border: 'none',
                    width: '100%'
                }}
                onClick={handleEditClient}>Save</button>
            </div>
        </div>
    )
};

export default EditClients;
