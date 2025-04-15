import React from 'react';

const TransText = ({ text = '' }) => {
  const safeText = String(text || '');

  const formattedText = safeText
    .replace(/\*\*(.*?)\*\*/g, "<span class='highlight'>$1</span>")
    .replace(/\*(.*?)\*/g, "<span class='highlight-soft'>$1</span>")
    .replace(
      /\[(.*?)\]\((.*?)\)/g,
      "<a href='$2' target='_blank' rel='noopener noreferrer' class='link-clean highlight-soft'>$1</a>"
    );

  return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

export default TransText;
