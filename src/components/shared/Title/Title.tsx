import React from 'react';
type TitleProps = {
      title_first: string
      title_second: string
      description: string
}

const Title = ({ title_first, title_second, description }: TitleProps) => {
      return (
            <div className='flex flex-col justify-center items-center gap-4'>
                  <h1 className='text-5xl font-semibold flex gap-2'><span className='text-[var(--Bsecondary)]'>{title_first}</span> <span className='text-[var(--Bprimary)]'>{title_second}</span></h1>
                  <p className='max-w-2xl text-center text-[var(--Bgray)] text-sm'>{description}</p>
            </div>
      );
};

export default Title;