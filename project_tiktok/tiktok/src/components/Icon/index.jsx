export const UploadIcon = ({ className, width = 24, height = 24 }) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide lucide-upload"
        >
            <path d="m4 16 8-8 8 8" />
            <path d="M12 16v-9" />  
            <path d="M12 7H4" />
        </svg>
    );
};

export const PlusIcon = ({ className, width = 24, height = 24 }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 1.5a.5.5 0 0 1 .5.5v6h6a.5.5 0 0 1 0 1h-6v6a.5.5 0 0 1-1 0v-6h-6a.5.5 0 0 1 0-1h6v-6a.5.5 0 0 1 .5-.5z"
            />
        </svg>
    );
};
