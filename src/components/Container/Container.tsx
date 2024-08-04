import React from 'react';

interface ContainerProps {
    tag?: 'div' | 'main' | 'section';
    children: React.ReactNode;
}

const Container = ({ tag: Tag = 'div', children }: ContainerProps) => {
    return (
        <Tag className="mx-auto bg-slate-950 min-h-screen flex flex-col items-center justify-center">
            {children}
        </Tag>
    );
};

export default Container;
