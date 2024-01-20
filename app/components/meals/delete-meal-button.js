'use client';
import { useState } from 'react';
import { deleteMealAction } from '@/lib/actions';

export default function DeleteMealButton({ meal }) {
  const [submittind, setSubmitting] = useState(false);

  const onDelete = async () => {
    if(!meal) return;
    setSubmitting(true);
    await deleteMealAction(meal.id);
    setSubmitting(false);
  }

  return (
    <button disabled={submittind} onClick={onDelete}>{submittind ? 'Deleting...' : 'Delete this meal'}</button>
  )
}