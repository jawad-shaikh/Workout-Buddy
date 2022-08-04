import { useState } from "react";

export default function WorkoutForm({workouts, setWorkouts}) {

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = { title, reps, load } 

        fetch('http://localhost:4400/api/workouts/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((data) => {
            setError(null)
            setTitle('')
            setReps('')
            setLoad('')
            
            setWorkouts([data, ...workouts])
        })
        .catch((error) => {
            setError(error.message)
        });
    };

  return (
    <div>
        <form className="create" onSubmit={handleSubmit}> 
            <h3>Add a New Workout</h3>

            <label>Excersize Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label>Load (in kg):</label>
            <input type="number" value={load} onChange={(e) => setLoad(e.target.value)} />

            <label>Number of Reps:</label>
            <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />

            <button>Add Workout</button>
            {error && <div className="error">{ error }</div>}
        </form>
    </div>
  )
}
