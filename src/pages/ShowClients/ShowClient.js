import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import BackButton from "../../components/BackButton";

const ShowClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/client/${id}`)
      .then((response) => {
        setClient(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
        <BackButton />
        <h1
        style={{
            color: 'black',
            margin: '2rem',
        }}
        >Details</h1>
        {loading ? <Spinner /> : (
            <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                flexDirection: 'column',
                margin: 'auto',
                backgroundColor: '#DBDAEA',
                color: 'black',
                borderRadius: '10px',
                maxWidth: '1000px',
                padding: '20px',
            }}>
                <div 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    flexDirection: 'column',
                    fontSize: '1.5rem'}}
                >
                    <div
                    style={{
                        padding: '10px',
                    }}
                    >
                        <span>Name: {client.name}</span>
                    </div>
                    <div
                    style={{
                        padding: '10px',
                    }}>
                        <span>Email: {client.email}</span>
                    </div>
                    <div
                    style={{
                        padding: '10px',
                    }}>
                        <span>DOB: {client.dob}</span>
                    </div>
                    <div
                    style={{
                        padding: '10px',
                    }}>
                        <span>Phone: {client.phone}</span>
                    </div>
                    <div
                    style={{
                        padding: '10px',
                    }}>
                        <span>Address: {client.address}</span>
                    </div>
                    <div
                    style={{
                        padding: '10px',
                    }}>
                        <span>Notes: {client.notes}</span>
                    </div>
                    <div
                    style={{
                        padding: '10px',
                    }}>
                        <span>Status: {client.status}</span>
                    </div>
                </div>
            </div>
        )}
    </div>
    );
}

export default ShowClient;


