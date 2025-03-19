import React from 'react';

const Custom_Button = ({ text, custom_class }: { text: string, custom_class?: string }) => {
      return (
            <button type='submit' className={`bg-[var(--Bprimary)] hover:bg-[var(--Bprimary)]/60 cursor-pointer text-white rounded-full border-none outline-none transition-colors duration-100 ${custom_class}`}>{text}</button>
      );
};

export default Custom_Button;