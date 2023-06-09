"use client";

import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "@/firebase";
import NewChat from "./NewChat";
import ChatRow from "./ChatRow";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && query(collection(db, "users", session.user?.email!, "chats"))
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/**Model Selection */}</div>

          {/**Map through the CharTows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          onClick={() => signOut()}
          className="w-12 h-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          src={session.user?.image!}
          alt="Profile picture"
        />
      )}
    </div>
  );
}
export default SideBar;
