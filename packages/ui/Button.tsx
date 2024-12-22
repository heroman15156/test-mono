import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            style={{ background: 'red'}}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-red"
        >
            {children}
        </button>
    );
};
