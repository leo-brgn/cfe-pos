import type { ReactNode, ButtonHTMLAttributes } from 'react';
export function Button({children,className='',...props}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={`button ${className}`} {...props}>{children}</button>}
export function Badge({children,tone='neutral'}:{children:ReactNode;tone?:string}){return <span className={`badge ${tone}`}><span aria-hidden="true" className="badge-dot"/>{children}</span>}
export function SectionHeading({title,children}:{title:string;children?:ReactNode}){return <div className="section-heading"><h2>{title}</h2>{children}</div>}
