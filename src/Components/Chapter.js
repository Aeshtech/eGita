import React, { useState, useEffect } from 'react'
import Carousel from './Carousel';


export default function Chapter() {

    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // states to hold data of a chapter
    const [chapter_number, setChapter_number] = useState(0);
    const [verses_count, setVerses_count] = useState(0);
    const [nameHi, setNameHi] = useState("");
    const [nameEn, setNameEn] = useState("");
    const [summaryHi, setSummaryHi] = useState("");
    const [summaryEn, setSummaryEn] = useState("");
    const [meaningEn, setMeaningEn] = useState("");
    const [meaningHi, setMeaningHi] = useState("");

    //change the language state of text on user requested
    const [readLang, setReadLang] = useState(true);


    //------------------------- Fetching Geeta API---------------------------------//

    useEffect(() => {

        fetch('https://bhagavadgitaapi.in/chapters/?api_key=b11f734eb00d87849')
            .then(
                response => response.json()
            ).then(
                jsonData => {
                    setData(jsonData)
                    loadFirstCh(jsonData)
                }
            )
    }, [])



    //defining function for updating chapter on change option
    function chapter(event) {
        const ch = event.target.value   //taking chapter selected by the user
        setChapter_number(data[ch].chapter_number)
        setNameHi(data[ch].name)                 //setting hindi name state for requested chapter
        setNameEn(data[ch].translation)          //setting english translatd name state for requested chapter
        setVerses_count(data[ch].verses_count)   //setting verse_count state for requested chapter
        setSummaryHi(data[ch].summary.hi)       //setting hindi summary  state for requested chapter
        setSummaryEn(data[ch].summary.en)       //setting english summary state for requested chapter
        setMeaningEn(data[ch].meaning.en)           //setting english meaning of chapter name
        setMeaningHi(data[ch].meaning.hi)           //setting hindi meaning of chapter name

    }

      //function to setStates for first chapter by default on load
      function loadFirstCh(data){
        setChapter_number(data[0].chapter_number)
        setNameHi(data[0].name)        
        setNameEn(data[0].translation)   
        setVerses_count(data[0].verses_count)  
        setSummaryHi(data[0].summary.hi) 
        setSummaryEn(data[0].summary.en) 
        setMeaningEn(data[0].meaning.en) 
        setMeaningHi(data[0].meaning.hi)
    }


    return (
        <>
            <Carousel/>
            <div className='container-fluid bg-dark text-light overflow-auto'>
                <div className="row">
                    <div className="col-12 mb-">
                        <h2 className='text-center mt-4 mb-5 text-warning'> Srimad Bhagavad-Gita Summary</h2>
                    </div>
                    <div className="col-7 col-md-4  m-auto">
                        <select className="form-select" aria-label="Default select example" onChange={chapter}>
                            <option value="0" >Chapter 1</option>
                            <option value="1">Chapter 2</option>
                            <option value="2">Chapter 3</option>
                            <option value="3">Chapter 4</option>
                            <option value="4">Chapter 5</option>
                            <option value="5">Chapter 6</option>
                            <option value="6">Chapter 7</option>
                            <option value="7">Chapter 8</option>
                            <option value="8">Chapter 9</option>
                            <option value="9">Chapter 10</option>
                            <option value="10">Chapter 11</option>
                            <option value="11">Chapter 12</option>
                            <option value="12">Chapter 13</option>
                            <option value="13">Chapter 14</option>
                            <option value="14">Chapter 15</option>
                            <option value="15">Chapter 16</option>
                            <option value="16">Chapter 17</option>
                            <option value="17">Chapter 18</option>
                        </select>
                    </div>
                    <div className="col-5 col-md-4">
                        <button type="button" className="btn btn-outline-info" onClick={() => setReadLang(!readLang)}>{readLang ? "Read in Hindi" : "Read in English"}</button>
                    </div>
                </div>

                {/* -----------------------------------------About Chapter--------------------------------------------- */}
                <div className="row">

                    <div className="col-12 col-md-4 m-auto mt-5 text-center">
                        <h3 className='fw-bold text-warning'>{readLang ? "Chapter" : "अध्याय"} - {chapter_number}</h3>

                        <ul className='mt-4 list-group list-group-flush'>
                            <li className='list-group-item mb-2 fw-bold'>{readLang ? "Name - " + nameEn : "नाम - " + nameHi}</li>
                            <li className='list-group-item mb-2 fw-bold'>{readLang ? "Total Shlokas" : "कुल श्लोक"} -  {verses_count}</li>
                            <li className='list-group-item mb-2 fw-bold'>{readLang ? "Meaning of Name - " + meaningEn : "नाम का अर्थ - " + meaningHi}</li>
                        </ul>
                    </div>


                    <div className="col-12 col-md-6 m-auto mt-5">
                        <h3 className='text-center fw-bold text-warning'>{readLang ? "Summary" : "सारांश"}</h3>
                        <p className='lh-lg mt-4 fw-bold text-info'>{readLang ? (summaryEn) : (summaryHi)}</p>
                    </div>

                    <p className='text-center mt-5' style={{color:"#3dfba3"}}>(Bhagavad Gita, Chapter {chapter_number}) <br />@
                        <a href="https://aeshtech.com" target="_blank" title='Aeshtech.com' style={{color:"#3dfba3"}}  rel="noreferrer">Ashish Sharma</a>
                    </p>


                </div>
            </div>
        </>
    )
}