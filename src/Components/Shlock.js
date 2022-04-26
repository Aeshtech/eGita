import React, { useState, useEffect } from 'react';



export default function Shlock() {

    // const [url,setUrl] = useState("https://bhagavadgitaapi.in/slok/1/1/")
    const [ch, setCh] = useState(1)                             //chapter number
    const [shlockNo, setShlockNo] = useState(1)        //shlock number
    const [shlock, setShlock] = useState()              //original shlock in Sanskrit
    const [shlockHi, setShlockHi] = useState()       //translated shlock in Hindi
    const [shlockEn, setShlockEn] = useState()      //translated shlock in English
    const [TS, setTS] = useState(47)                    //total shlock in chapter state

    //------------------------- Fetching Geeta Shlok API---------------------------------//

    useEffect(() => {

        fetch("https://bhagavadgitaapi.in/slok/" + ch + "/" + shlockNo + "/")
            .then(
                response => response.json()
            ).then(
                jsonData => {
                    setShlock(jsonData.slok)
                    setShlockHi(jsonData.tej.ht)
                    setShlockEn(jsonData.siva.et)
                }
            )
    }, [ch, shlockNo])


    //json array to store total shlocks in each chapter
    const totalShlockInCh = [
        { "ch": 1, "ts": 47 }, { "ch": 2, "ts": 72 }, { "ch": 3, "ts": 43 }, { "ch": 4, "ts": 42 }, { "ch": 5, "ts": 29 }, { "ch": 6, "ts": 47 }, { "ch": 7, "ts": 30 },
        { "ch": 8, "ts": 28 }, { "ch": 9, "ts": 34 }, { "ch": 10, "ts": 42 }, { "ch": 11, "ts": 55 }, { "ch": 12, "ts": 20 }, { "ch": 13, "ts": 35 }, { "ch": 14, "ts": 27 },
        { "ch": 15, "ts": 20 }, { "ch": 16, "ts": 24 }, { "ch": 17, "ts": 28 }, { "ch": 18, "ts": 78 }
    ]

    function chapterChange(event){
        let chapter = event.target.value
        setCh(chapter)
        setTS(totalShlockInCh[chapter-1].ts)
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-md-12 mt-4">
                        <img src="Assets/krishna.png" alt='Krishna_Image' className='d-block mx-auto'></img>
                    </div>

                    <div className="col-6 col-md-3  m-auto mb-3">
                        <select className="form-select border border-primary text-primary"  onChange={chapterChange} >

                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((i) => (
                                    <option value={i} key={i}>Chapter {i}</option>
                                ))
                            }

                        </select>
                    </div>

                    <div className="col-6 col-md-3 mx-auto">
                        <label className='text-primary fw-bold'>Shlock No </label>
                        <input type="number" className="btn btn-outline-primary w-50 ms-2" defaultValue={1} min="1" max={TS} onChange={(event) => setShlockNo(event.target.value)}></input>
                    </div>
                </div>


                {/* ----------------------Shlock Section--------------------- */}
                <div className="row">
                    <div className="col-md-8 mx-auto my-2 p-3 text-center">
                        <h1 className='shlock-title display-6 fw-bold lh-base'>||श्रीमद्‍भगवद्‍-गीता {ch}.{shlockNo}||</h1>
                    </div>

                    <div className="col-md-8 mt-2 mb-4 mx-auto text-center" style={{ color: "darkgoldenrod" }} >
                        <h4 className='fw-bold'>{shlock}</h4>
                    </div>

                    <div className="col-md-8 mt-5 mx-auto text-center fw-bolder fs-5" style={{ color: "var(--purple)" }} >
                        <p>{shlockHi}</p>
                    </div>

                    <div className="col-md-8 mt-3 mx-auto text-center fw-bolder fs-5" style={{ color: "var(--purple)" }} >
                        <p>{shlockEn}</p>
                    </div>

                    <p className='text-center mt-5 text-success'>(Bhagavad Gita, Chapter {ch}, Shloka {shlockNo}) <br />@
                        <a href="https://aeshtech.com" target="_blank" title='Aeshtech.com' className='text-success' rel="noreferrer">Ashish Sharma</a>
                    </p>

                </div>

            </div>
        </>
    )
}