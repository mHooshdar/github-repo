import { useQuery } from '@tanstack/react-query';
import axios from '@utils/axios';
import type { RepositoryDTO } from '../types';

interface GetRepositoriesInput {
  q: string;
  order?: 'asc' | 'desc';
  per_page?: number;
  page?: number;
}

async function getRepositories(query: GetRepositoriesInput) {
  return axios.get<RepositoryDTO>('/repositories', { params: query });
}

export const useGetRepositories = (query: GetRepositoriesInput) => {
  return useQuery({
    queryKey: ['repositories'],
    queryFn: () => getRepositories(query),
  });
};
