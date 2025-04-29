
interface DialogProps {
    open: boolean;
    endpoint: string;
    placeholder?: string;
    predefinedQuestions?: string[];
    onClose: () => void;
}
export declare const DocumateDialog: ({ endpoint, open, placeholder, predefinedQuestions, onClose, ...props }: DialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
