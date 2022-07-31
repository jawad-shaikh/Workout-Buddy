import React, { useEffect, useState } from 'react'

import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

export default function Home() {

  const [workouts, setWorkouts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getWorkouts();
  }, []);

  async function getWorkouts() {
    const response = await fetch('http://localhost:4400/api/workouts/');
    const data = await response.json();
    setWorkouts(data);
    setIsLoading(false);
  }

  const deleteWorkout = (id) => {
    fetch(`http://localhost:4400/api/workouts/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      setWorkouts(workouts.filter(workout => workout._id !== data._id))
    })
  }

  return (
    <div className='home'>
      <div className="workouts">
        { isLoading && <h2><i>Loading ..</i></h2> }
        { workouts && workouts.length == 0 ? <h2>Nothing to show ..</h2> : '' }
        {workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} deleteWorkout={deleteWorkout} />
        ))}
      </div>
      <WorkoutForm getWorkouts={getWorkouts} />
    </div>
  )
}
