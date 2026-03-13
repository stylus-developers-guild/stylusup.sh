import type { EcosystemProject } from './ecosystemData';

export interface ProjectStatusMeta {
    badgeClassName: string;
    dotClassName: string;
    filterLabel: string;
    label: string;
    textClassName: string;
}

const STATUS_META: Record<EcosystemProject['status'], ProjectStatusMeta> = {
    live: {
        badgeClassName: 'text-emerald-600 bg-emerald-50 border-emerald-100',
        dotClassName: 'bg-emerald-500 animate-pulse',
        filterLabel: 'Live',
        label: 'LIVE',
        textClassName: 'text-emerald-600',
    },
    building: {
        badgeClassName: 'text-amber-600 bg-amber-50 border-amber-100',
        dotClassName: 'bg-amber-400',
        filterLabel: 'Building',
        label: 'BUILDING',
        textClassName: 'text-amber-500',
    },
    shutdown: {
        badgeClassName: 'text-slate-600 bg-slate-100 border-slate-200',
        dotClassName: 'bg-slate-400',
        filterLabel: 'Shutdown',
        label: 'SHUTDOWN',
        textClassName: 'text-slate-500',
    },
};

export function getProjectStatusMeta(status: EcosystemProject['status']): ProjectStatusMeta {
    return STATUS_META[status];
}
