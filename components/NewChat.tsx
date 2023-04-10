import { PlusIcon } from '@heroicons/react/24/solid';

function NewChat() {
  return(
    <div className="border-gray-700 border chatRow">
      <PlusIcon className='h-4 w-4'/>
      <h1>New Chat</h1>
      <p></p>
    </div>
  );
}
export default NewChat;
