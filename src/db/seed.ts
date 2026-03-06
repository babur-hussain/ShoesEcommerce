import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";
import dotenv from "dotenv";

dotenv.config();

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const nikeProducts = [
  {
    name: "Nike Air Max 90",
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.",
    price: "130.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/wzitsrb4oucx4wjtiifi/AIR+MAX+90.png",
    category: "Running",
    brand: "Nike",
    stock: 25,
  },
  {
    name: "Nike Air Force 1 '07",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/350e7f3a-979a-402b-9396-a7e4b0fb1c8b/AIR+FORCE+1+%2707.png",
    category: "Lifestyle",
    brand: "Nike",
    stock: 40,
  },
  {
    name: "Nike Dunk Low Retro",
    description:
      "Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colours.",
    price: "115.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcb3e4-e853-4a4f-8e1a-2b3e2be5a6a7/DUNK+LOW+RETRO.png",
    category: "Lifestyle",
    brand: "Nike",
    stock: 30,
  },
  {
    name: "Nike Pegasus 41",
    description:
      "Responsive cushioning in the Pegasus provides an energised ride for everyday road running.",
    price: "140.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a0a0a0-0a0a-0a0a-0a0a-0a0a0a0a0a0a/PEGASUS+41.png",
    category: "Running",
    brand: "Nike",
    stock: 20,
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    description:
      "In the '77 Blazer, Nike takes the classic basketball shoe and adds a vintage treatment for a pointed-toe look.",
    price: "105.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c1c1c1c1-1c1c-1c1c-1c1c-1c1c1c1c1c1c/BLAZER+MID+77+VINTAGE.png",
    category: "Lifestyle",
    brand: "Nike",
    stock: 15,
  },
  {
    name: "Nike Air Jordan 1 Retro High OG",
    description:
      "The Air Jordan 1 Retro High remakes the classic sneaker with new colours and fresh details.",
    price: "180.00",
    image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d1d1d1d1-1d1d-1d1d-1d1d-1d1d1d1d1d1d/AIR+JORDAN+1+RETRO+HIGH+OG.png",
    category: "Basketball",
    brand: "Nike",
    stock: 10,
  },
];

async function seed() {
  console.log("🌱 Seeding products...");
  await db.insert(products).values(nikeProducts);
  console.log("✅ Seeded", nikeProducts.length, "Nike products.");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
