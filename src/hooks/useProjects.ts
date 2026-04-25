import { useState, useEffect } from 'react';
import type { EcosystemProject } from '../data/ecosystemData';

interface UseProjectsResult {
    projects: EcosystemProject[];
    loading: boolean;
    error: string | null;
}

/** Fisher–Yates shuffle (in-place, returns the same array). */
function shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let cachedProjects: EcosystemProject[] | null = null;

export function useProjects(): UseProjectsResult {
    const [projects, setProjects] = useState<EcosystemProject[]>(cachedProjects ?? []);
    const [loading, setLoading] = useState<boolean>(cachedProjects === null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (cachedProjects !== null) {
            setProjects(cachedProjects);
            setLoading(false);
            return;
        }

        let cancelled = false;
        setLoading(true);

        fetch('/projects.json')
            .then((res) => {
                if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);
                return res.json() as Promise<EcosystemProject[]>;
            })
            .then((data) => {
                if (!cancelled) {
                    // Randomise project order on each fresh page load
                    const shuffled = shuffle([...data]);
                    cachedProjects = shuffled;
                    setProjects(shuffled);
                    setLoading(false);
                }
            })
            .catch((err: Error) => {
                if (!cancelled) {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => { cancelled = true; };
    }, []);

    return { projects, loading, error };
}
