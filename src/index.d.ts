type ISvg = React.FC<
    React.SVGProps<SVGSVGElement> & {
        /** Alternative text (a11y) */
        title?: string;
    }
>;

declare module '*.svg' {
    const value: ISvg;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.webp' {
    const value: string;
    export default value;
}
