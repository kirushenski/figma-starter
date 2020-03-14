type ISvg = React.FC<
    React.SVGProps<SVGSVGElement> & {
        title?: string;
    }
>;

declare module '*.svg' {
    const value: ISvg;
    export default value;
}
