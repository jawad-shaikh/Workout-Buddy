import React from 'react'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import trashcan from '../icons/trash-can-solid.svg'

export default function WorkoutDetails({ workout, deleteWorkout }) {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span onClick={() => deleteWorkout(workout._id)}><img width="16px" src={trashcan} alt="" /></span>
    </div>
  )
}
