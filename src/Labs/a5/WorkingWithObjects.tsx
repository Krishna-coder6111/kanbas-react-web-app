import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({ 
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2024-3-5",
        completed: false,
        score: 0,
    });
    const [module, setModule] = useState({
        id: 1,
        name: "NodeJS",
        description: "NodeJS Module",
        course: "CS4550",
    });

    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;

    const MODULE_URL = `${API_BASE}/a5/module`;
    
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      useEffect(() => {
        fetchAssignment();
      }, []);    
    
    return (
        <div>
            <h2>
                Working with Objects
            </h2>
            <h3>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                    ...assignment, title: e.target.value })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>
        </div>
    )
}

export default WorkingWithObjects;