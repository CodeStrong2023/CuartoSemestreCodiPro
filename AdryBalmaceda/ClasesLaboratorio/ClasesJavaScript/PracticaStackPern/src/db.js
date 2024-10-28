import pg from "pg";

export const pool = new pg.Pool({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "PERN",
});

pool.on("connect", () => {
    console.log("Conectando a la base de datos...")
});