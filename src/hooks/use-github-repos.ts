import { useQuery } from "@tanstack/react-query";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

const GITHUB_USERNAME = "Rishicreates20";

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    { headers: { Accept: "application/vnd.github.v3+json" } }
  );
  if (!res.ok) throw new Error("Failed to fetch GitHub repos");
  const data: GitHubRepo[] = await res.json();
  return data.filter((r) => !r.fork && !r.archived);
}

export function useGitHubRepos() {
  return useQuery<GitHubRepo[]>({
    queryKey: ["github-repos", GITHUB_USERNAME],
    queryFn: fetchGitHubRepos,
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
}
