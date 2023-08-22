const UserModel =(sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });

  (async () => {
    await sequelize.sync({ force: true });
      // Existem varias formas de inserir, modificar ou deletar algum dado no banco, a baixo encontraremos algumas formas;

      // O metodo. build não se comunica 
      // const sara = User.build({
      //   fullName: 'Sara Silva Santos',
      //   email: 'sara.ss@trybe.com',
      // });

      // console.log(sara instanceof User); // true
      // console.log(sara.fullName); // "Sara Silva Santos"

      // // Usando .build o dado só sera savo após o uso do .save;
      // await sara.save();
      // console.log('Pessoa salva no banco de dados!');

      // // O .create uni o .build e .save em uma una função, com o create não precisamos utlizar o .save;
      // const sarah = await User.create({
      //   fullName: 'Sara Silva Santos',
      //   email: 'sdss@trybe.com',
      // });

      // console.log(sara instanceof User); // true
      // console.log(sara.name); // "Sara Silva Santos"

      // // Mas se fizermos uma modificação como essa:
      // sarah.fullName = "Sarah Da Silva Souza";
      // // Ai sim precisamos passar um metodo .save, porquê só assim os dados seram salvos no db;

      // //Também temos o metodo .set, usamos ele para setar mais de um campo de uma vez;
      // const lucas = await User.create({
      //   fullName: 'Lucas Silva Santos',
      //   email: 'lucas.ss@trybe.com',
      // });
      
      // lucas.set({
      //   fullName: "Pedro Silva Santos",
      //   email: "pedro.ss@trybe.com"
      // });
      // // O nome ainda está "Lucas Silva Santos" no banco de dados!
      
      // await lucas.save();
      // // Agora o nome foi atualizado para "Pedro Silva Santos", e o email para pedro.ss@trybe.com no banco de dados!

      // // Para atualizar apenar os campos especificos que foram modificados, podemos usar o metodo .update;
      // const jane = await User.create({
      //   fullName: "Jane Doe",
      //   email: "jane.doe@trybe.com",
      //   });
        
      //   jane.email = "ada.doe@trybe.com";
      //   await jane.update({ fullName: "Ada Joe" });
        
      //   // O banco de dados agora tem "Ada Joe" para o nome, mas o email ainda é "jane.doe@trybe.com".
        
      //   await jane.save();
      //   // O banco de dados agora tem "ada.doe@trybe.com" para o email.

      //   // Quando precisamos excluir um model do banco de dados, podemos usar o método destroy:
      //   const mario = await User.create({ fullName: "Mario Bors" });
      //   console.log(mario.fullName); // "Mario Bors"
      //   await mario.destroy();
      //   // Agora essa entrada não existe mais no banco de dados!
  })();

  return User;
};

module.exports = UserModel;