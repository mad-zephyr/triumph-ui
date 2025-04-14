'use server';

import { revalidatePath } from 'next/cache';

export async function createPost() {
  // Invalidate the /posts route in the cache
  revalidatePath('/posts');
}
