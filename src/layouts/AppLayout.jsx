import React from 'react'
import { ProfileToFollow } from '../components/ProfileToFollow';

const AsideRightCard = ({ title, children }) => {
  return (
    <article className='bg-tw-gray rounded-lg'>
      <p className='text-lg font-bold p-4'>{title}</p>
      {children}
    </article>
  );
};

export const AppLayout = () => {
    return (
      <section className="grid grid-cols-[1fr_1.5fr_1fr]">
        <aside></aside>
        <main></main>
        <aside>
          <AsideRightCard title="Who to follow"></AsideRightCard>
          <AsideRightCard title="Who to follow">
            <ProfileToFollow 
            profileAvatarURL="https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg"
            name="Rodrigo Medina"
            username={"@roeeyn"}
            />
            <ProfileToFollow 
            profileAvatarURL="https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg"
            name="Rodrigo Medina"
            username={"@roeeyn"}
            />
            <ProfileToFollow 
            profileAvatarURL="https://pbs.twimg.com/profile_images/1085693738775506944/9JKQ9Et2_400x400.jpg"
            name="Rodrigo Medina"
            username={"@roeeyn"}
            />
          </AsideRightCard>
        </aside>
      </section>
    )
  }