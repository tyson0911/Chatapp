import { StreamChat, TokenManager } from "stream-chat";
import { clerkClient } from '@clerk/nextjs/server'


const api_key = "6tmcs5ukuv6y";
const api_secret =
  "mceagsp2bu4zzdwz2ub3hz3r7va796mjr8uhrgt8kjy7mven2ytpgbzbycybykt6";


export async function POST(request) {
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);

    }


    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();
  const token = serverClient.createToken(user.data.id);
      console.log(token);

      const client = await clerkClient()
    await serverClient.upsertUser({id: user.data.id})  


  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token
    },
  })
   //giving access to users for all the chats 
  const slugs = ["python-new", "javascript-new", "java-new", "c++-new", "chash-new"]
  slugs.forEach((item)=> {
    
    const channel = serverClient.channel('messaging', item, {
        image: 'https://getstream.io/random_png/?name=react',
        name: capitalize(item) + "discussion",
        created_by_id: user.data.id,
        
      });
  })
  await channel.create();
  channel.addMembers([user.data.id]);
  return Response.json({ message: "Hello World" });
}
