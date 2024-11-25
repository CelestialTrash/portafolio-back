// encryptPassword.js
const bcrypt = require('bcryptjs');

const encryptPassword = async (plainPassword) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    console.log("Hashed Password:", hashedPassword);
};

encryptPassword("NamXxcool2850309"); // Reemplaza "1234" con la contraseña que deseas encriptar
