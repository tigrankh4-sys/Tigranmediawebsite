'use client';
import { useState } from 'react';
import { faqs } from '@/data/content';

interface Props { cls: string; }

export default function FaqAccordion({ cls }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ul className={`${cls}-faq-list`}>
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <li className={`${cls}-faq-item faq-item`} key={i}>
            <button className={`${cls}-faq-question`} onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
              <span>{item.q}</span>
              <span className={`${cls}-faq-icon`} style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
            </button>
            <div className={`${cls}-faq-answer${isOpen ? ' is-open' : ''}`} style={{ maxHeight: isOpen ? '400px' : '0' }}>
              <p className={`${cls}-faq-answer-inner`}>{item.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
