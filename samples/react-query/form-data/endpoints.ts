/**
 * Generated by orval v6.8.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, UseMutationOptions, MutationFunction } from 'react-query';
import type { Pet, Error, CreatePetsBody } from './models';
import { customInstance } from './custom-instance';

export type AwaitedInput<T> = PromiseLike<T> | T;

export type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary Create a pet
 */
export const createPets = (createPetsBody: CreatePetsBody) => {
  const formData = new FormData();
  formData.append('name', createPetsBody.name);
  formData.append('tag', createPetsBody.tag);

  return customInstance<Pet>({
    url: `/pets`,
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData,
  });
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = Error;

export const useCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >;
}) => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBody }
  > = (props) => {
    const { data } = props ?? {};

    return createPets(data);
  };

  return useMutation<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >(mutationFn, mutationOptions);
};
