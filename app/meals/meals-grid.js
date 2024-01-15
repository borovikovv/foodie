import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal, idx) => {
        return (
          <li key={idx}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
} 