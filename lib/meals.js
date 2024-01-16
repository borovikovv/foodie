import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  return db.prepare('SELECT * FROM meals').all();
}

export async function getMealById(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
} 