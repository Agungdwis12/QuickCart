import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User"; // Tambahkan ini

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest function to save user data to database
export const syncUserCreation = inngest.createFunction(
  {
    id: "sync-user-clerk",
  },
  { event: "clerk/user.created" },
  async (event) => {
    console.log("Event received:", JSON.stringify(event, null, 2)); // Debugging
    if (!event.data) {
      console.error("Event data is undefined!");
      return;
    }

    const { id, first_name, last_name, email_addresses, image_url } = event.data;
    const userData = {
      _id: id,
      name: `${first_name} ${last_name}`,
      email: email_addresses[0]?.email_address || "", // Hindari error jika email kosong
      imageUrl: image_url,
    };

    await connectDB();
    await User.create(userData);
  }
);

// Inngest function to update user data in database
export const syncUserUpdation = inngest.createFunction(
  {
    id: "update-user-from-clerk",
  },
  { event: "clerk/user.updated" },
  async (event) => {
    console.log("User update event received:", JSON.stringify(event, null, 2));
    if (!event.data) {
      console.error("Event data is undefined!");
      return;
    }

    const { id, first_name, last_name, email_addresses, image_url } = event.data;
    const userData = {
      _id: id,
      name: `${first_name} ${last_name}`,
      email: email_addresses[0]?.email_address || "",
      imageUrl: image_url,
    };

    await connectDB();
    await User.findByIdAndUpdate(id, userData);
  }
);

// Inngest function to delete user data from database
export const syncUserDeletion = inngest.createFunction(
  {
    id: "delete-user-from-clerk",
  },
  { event: "clerk/user.deleted" },
  async (event) => {
    // Ubah dari ({ event }) ke (event)
    console.log("User delete event received:", JSON.stringify(event, null, 2));
    if (!event.data) {
      console.error("Event data is undefined!");
      return;
    }

    const { id } = event.data;
    await connectDB();
    await User.findByIdAndDelete(id);
  }
);
