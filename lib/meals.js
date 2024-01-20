import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {
  return db.prepare('SELECT * FROM meals').all();
}

export async function getMealById(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
} 

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instruction = xss(meal.instruction);
  const date = Date.now();

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}-${date}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer()
  stream.write(Buffer.from(bufferedImage), (error, ) => {
    if(error) {
      throw new Error('Saving image  error');
    }
  });

  meal.image = `/images/${fileName}`;
  db.prepare(`
    INSERT INTO meals
      (title, summary, instruction, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instruction,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}