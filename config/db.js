module.exports = {
    host: process.env.DB_HOST ?? "127.0.0.1",
    port: process.env.DB_PORT ?? 27017,
    db: process.env.DB_NAME ?? "messages",
    user: process.env.DB_USER ?? "",
    password: process.env.DB_PASS ?? "",
};
