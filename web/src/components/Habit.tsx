interface HabitProps {
  completed: number
}

export default function Habit(props: HabitProps) {
  return <p>{props.completed}</p>
}
