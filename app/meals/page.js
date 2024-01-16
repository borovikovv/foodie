import { Suspense } from "react";
import Link from "next/link";
import MealsGrid from "./meals-grid";
import classes from './page.module.css'
import { getMeals } from '@/lib/meals'

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />
}


export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delision meals created,{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook!</p>
        <p className={classes.cta}>
          <Link href='meals/share'>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}