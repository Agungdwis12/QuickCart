import { Inngest } from "inngest";
import connectDB from "./db";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

//ingest fungcion to save user data to ad database
export const syncUserCreation = inngest.createFunction(
    {
        id:'sync-user-clerk'
    },
    { event: 'clerk/user.created' },
    async (event) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            name: `${first_name} ${last_name}`,
            email: email_addresses[0].email_address,
            imageUrl: image_url
        }
        await connectDB()
        await User.create(userData)
    }
)

//ingest function to save user data to ad database
export const syncUserUpdateion = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    { event: 'clerk/user.updated' },
    async (event) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
          _id: id,
          name: `${first_name} ${last_name}`,
          email: email_addresses[0].email_address,
          imageUrl: image_url,
        }
        await connectDB()
        await User.findByIdAndUpdate(id, userData)
    }
)

//inngest function to delete user data from ad database
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-from-clerk'
    },
    { event: 'clerk/user.deleted' },
    async ({event}) => {
        const { id } = event.data
        await connectDB()
        await User.findByIdAndDelete(id)
    }
)