import { useMutation } from '@tanstack/react-query';
import type { CreatePostInput } from './types';
import { queryClient } from '../../../../lib/query';

export function useCreatePost() {
  return useMutation({
    mutationFn: async (data: CreatePostInput) => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },
  });
}
