'use server';
import { saveMeal , deleteMeal} from "./meals";
import { redirect } from 'next/navigation'


export async function shareMeal (formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instruction: formData.get('instruction'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email') 
  }

  await saveMeal(meal);
  redirect('/meals');
}

export async function deleteMealAction(id) {
  await deleteMeal(id);
  redirect('/meals');
}