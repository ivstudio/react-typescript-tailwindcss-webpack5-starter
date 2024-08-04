import React from 'react';

interface TextProps {
    tag?: 'p' | 'h1';
    variant: 'title' | 'subtitle';
    children: React.ReactNode;
    className?: string;
}

const styles = {
    title: 'text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-white',
    subtitle: 'text-base md:text-lg lg:text-xl font-light text-slate-400',
};

const Text = ({
    tag: Tag = 'p',
    variant,
    children,
    className = '',
}: TextProps) => {
    return <Tag className={`${styles[variant]} ${className}`}>{children}</Tag>;
};

export default Text;
