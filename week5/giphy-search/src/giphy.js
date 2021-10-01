import { useState, useEffect } from "react";

function GiphySearch({initialQuery}) {
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const[imgSrc, setImgSrc] = useState('');
    const[alt, setAlt] = useState('');

    const fetchImg = (query = initialQuery ) =>{

        setLoading(true);
        const encodedQuery = encodeURIComponent(query);
        const url = `http://api.giphy.com/v1/gifs/random?api_key=Uc98dyWOpwDnaLhGI7b7qgtz1EZMjwda&tag=${encodedQuery}`;

        fetch(url, {
            method:'GET',
        }).then(function(response) {
            if (response.ok) {
                return response.json();
            }
                return Promise.reject(response);
        }).then(function({data}){
            setLoading(false);
            setImgSrc(data.fixed_height_downsampled_url);
            setAlt(data.title)
        }).catch(function(error){
            setLoading(false);
            setError(true);
            console.warn('something isnt right',error);
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchImg(e.target.query.value)
    }
    useEffect(fetchImg, [initialQuery]);

    return (
        <div>
            <br/>
            <header>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="query" placeholder="search gifs" style={{width:"300px"}}/>
                    <button type="submit">change gif</button>
                </form>
            </header>
            <br/>
            <main>
                <section>
                    {loading &&<div>Loading...</div>}
                    {error &&<div>Error</div>}
                    {!loading && !error && !imgSrc &&
                    <div>Nothing Found</div>}
                     {!loading && !error && imgSrc &&
                     <div><img src={imgSrc} alt = {alt} style={{width:'400px'}}/></div>
                     }
                </section>
            </main>
        </div>
    )
 }                                    
    export default GiphySearch