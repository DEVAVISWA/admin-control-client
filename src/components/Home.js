import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from './Table';
import Spinner from './Spinner';
import BackButton from './BackButton';

const Home = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      axios
        .get(`https://admin-control-server.onrender.com/client`)
        .then((res) => {
        setClients(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }, []);
    console.log(clients);
    return (
      <div>
            {loading ? (<Spinner />) : <Table clients={clients} />}
        </div>
    )
}

export default Home;