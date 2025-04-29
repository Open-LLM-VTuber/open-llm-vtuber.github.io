
interface ButtonProps {
    endpoint: string;
    buttonLabel?: string;
    placeholder?: string;
    predefinedQuestions?: string[];
}
export declare const Button: ({ endpoint, buttonLabel, placeholder, predefinedQuestions, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
