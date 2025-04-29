import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar';
import Spinner from '../components/Spinner';
import DataCard from '../components/DataCard';
const apis={
    apod: 'https://api.nasa.gov/planetary/apod?api_key=Gjws7SlgSwN7LLrvNHxWblQx7eilYaN884inHpgF'
}
const LandingPage = () => {
    const [selectedAPI, setSelectedAPI]=useState('apod');
    const [data, setData]=useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]=useState('');
    const [search, setSearch]=useState('');
    useEffect(()=>{
        if(!selectedAPI) return;
        setLoading(true);
        setError('');
        setData(null);
        let isMounted=true;
        fetch(apis[selectedAPI])
        .then(res=>res.json())
        .then(json=>{
            if(isMounted){
                setData(json);
                setLoading(false);
            }
        })
        .catch(()=>{
            if(isMounted){
                setError('Failed to fetch data');
                setLoading(false);
            }
        })
        return()=>(isMounted=false);
    },[selectedAPI]);
  return (
    <div>
        <h4>Select NASA API</h4>
        <select className='form-select w-50 mb-3'
        onChange={(e)=>setSelectedAPI(e.target.value)} value={selectedAPI}>
            <option value="apod">Astromy Picture of the Day</option>
        </select>
        <SearchBar search={search} setSearch={setSearch}/>
        {loading && <Spinner/>}
        {error && <div className='alert alert-danger'>{error}</div>}
        {data && <DataCard data={data} search={search}/>}
      
    </div>
  )
}

export default LandingPage
