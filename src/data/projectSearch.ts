import {
    Code,
    Coins,
    Gamepad2,
    Layers,
    Lock,
    Network,
    Wrench,
    type LucideIcon,
} from 'lucide-react';
import type { EcosystemProject } from './ecosystemData';

export interface ProjectSearchItem extends EcosystemProject {
    category: string;
    icon: LucideIcon;
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
    'Dev Tools': Wrench,
    'DeFi': Coins,
    'Gaming & NFTs': Gamepad2,
    'Cryptography': Lock,
    'Bridges & Oracles': Network,
    'Infrastructure': Layers,
};

function getPrimaryCategory(project: EcosystemProject): string {
    return project.categories[0] ?? 'Other';
}

function getCategoryIcon(category: string): LucideIcon {
    return CATEGORY_ICONS[category] ?? Code;
}

export function buildProjectSearchItems(projects: EcosystemProject[]): ProjectSearchItem[] {
    return projects.map((project) => {
        const category = getPrimaryCategory(project);

        return {
            ...project,
            category,
            icon: getCategoryIcon(category),
        };
    });
}
