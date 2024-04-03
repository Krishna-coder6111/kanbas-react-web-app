import React, { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");
    const [welcome, setWelcome] = useState("");
    const fetchWelcome = async () => {
      const response = await axios.get("http://localhost:4000/a5/welcome");
      setWelcome(response.data);
    };
    const [result, setResult] = useState(0);
    const fetchSum = async (a: string, b: string) => {
      const response = await
        axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
      setResult(response.data);
    };
    const fetchSubtraction = async (a: string, b: string) => {
      const response = await axios.get(
        `http://localhost:4000/a5/subtract/${a}/${b}`);
      setResult(response.data);
    };
  
    useEffect(() => {
      fetchWelcome();
      fetchSum(a, b);
      fetchSubtraction(a, b);
    }, []);

    return (
        <div>
          <h3>Encoding Parameters In URLs</h3>
          <h4>Integrating React with APIs</h4>
          <h5>Fetching Welcome</h5>
          <h6>{welcome}</h6>

          <h4>Calculator</h4>
          <input type="number" value={a}
            onChange={(e) => setA(e.target.value)}/>
          <input type="number"
            onChange={(e) => setB(e.target.value)} value={b}/>
          <h3>Path Parameters</h3>
          <a className="btn btn-primary m-1" href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
            Add {a} + {b}
          </a>
          <a className="btn btn-danger" href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
            Subtract {a} - {b}
          </a>
          <input value={result} type="number" readOnly />
          <h3>Fetch Result</h3>
          <button onClick={() => fetchSum(a, b)} >
            Fetch Sum of {a} + {b}
          </button>
          <button onClick={() => fetchSubtraction(a, b)} >
            Fetch Substraction of {a} - {b}
          </button>

        </div>
  );

}

export default EncodingParametersInURLs;
