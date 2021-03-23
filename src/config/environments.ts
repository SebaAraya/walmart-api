export const environments = {
  port: process.env.PORT || 3000,

  database: {
    connectionString:
      process.env.DB_STR ||
      "mongodb://brandDiscountsUser:brandDiscountsPassword@localhost:27017/desafio_walmart?authSource=admin"
  }
};
