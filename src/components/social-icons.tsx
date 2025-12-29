import type { SVGProps } from 'react';

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export const DiscordIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        {...props}
    >
        <path d="M20.222 0H3.778C2.551 0 1.545.923 1.453 2.14L.044 18.012C-.05 19.278.91 20.355 2.179 20.355h14.54l-1.464-2.196 1.091 1.091c1.269 0 2.228-.958 2.228-2.227V2.227C22.449.958 21.49 0 20.222 0zM8.338 13.385c-1.12 0-2.026-.864-2.026-1.934s.906-1.934 2.026-1.934c1.137 0 2.026.864 2.026 1.934.018 1.07-.889 1.934-2.026 1.934zm7.33 0c-1.12 0-2.026-.864-2.026-1.934s.906-1.934 2.026-1.934c1.137 0 2.026.864 2.026 1.934s-.889 1.934-2.026 1.934z" />
    </svg>
);
