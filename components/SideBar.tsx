'use client';

import { useSession, signOut } from 'next-auth/react';
import NewChat from './NewChat';

function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>

          {/**New Chat */}
          <NewChat />

          <div>
            {/**Model Selection */}
          </div>

          {/**Map through the CharTows */}

        </div>
      </div>

      {
        session &&
        // eslint-disable-next-line @next/next/no-img-element
        <img
          onClick={() => signOut()}
          className="w-12 h-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          src={session.user?.image!}
          alt='Profile picture' />
      }
    </div>
  );
}
export default SideBar;