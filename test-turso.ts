import { createClient } from "@libsql/client";

const url = process.env.DATABASE_URL;
const authToken = process.env.DATABASE_AUTH_TOKEN;

const client = createClient({ url: url!, authToken: authToken! });

async function test() {
  try {
    const tables = await client.execute(
      "SELECT name FROM sqlite_master WHERE type='table'"
    );
    console.log("Tables:", tables.rows.map((r) => r.name));

    const services = await client.execute("SELECT COUNT(*) as c FROM services");
    console.log("Services rows:", services.rows[0]?.c);

    const portfolio = await client.execute("SELECT COUNT(*) as c FROM portfolio_items");
    console.log("Portfolio rows:", portfolio.rows[0]?.c);

    const testimonials = await client.execute("SELECT COUNT(*) as c FROM testimonials");
    console.log("Testimonials rows:", testimonials.rows[0]?.c);
  } catch (err: any) {
    console.error("Error:", err.message);
  } finally {
    client.close();
  }
}

test();
