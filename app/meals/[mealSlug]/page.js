import Image from 'next/image';
import classes from './page.module.css';
import { getMealById } from '@/lib/meals';
import DeleteMealButton from '../../components/meals/delete-meal-button';

export async function generateMetadata({ params }) {
  const meal = await getMealById(params.mealSlug);
  
  return {
    title: meal.title,
    description: meal.summary,
  }
}

export default async function MealSlug ({ params }) {
  const meal = await getMealById(params.mealSlug);
  const instructions = meal.instructions.replaceAll('\n', '<br />')

  return (
    <>
      <div className={classes.buttonBlock}>
        <DeleteMealButton meal={meal} />
      </div>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill alt={meal.slug} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
          __html: instructions
        }} />
      </main>
    </>
  );
}