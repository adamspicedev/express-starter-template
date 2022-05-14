const fs = require('fs');

const path = './src/resources';

const createFiles = async () => {
  if (!fs.existsSync(`${path}/${process.argv[2]}`)) {
    fs.mkdirSync(`${path}/${process.argv[2]}`);
    fs.writeFileSync(
      `${path}/${process.argv[2]}/${process.argv[2]}.controller.ts`,
      ''
    );
    fs.writeFileSync(
      `${path}/${process.argv[2]}/${process.argv[2]}.interface.ts`,
      ''
    );
    fs.writeFileSync(
      `${path}/${process.argv[2]}/${process.argv[2]}.model.ts`,
      ''
    );
    fs.writeFileSync(
      `${path}/${process.argv[2]}/${process.argv[2]}.service.ts`,
      ''
    );
    fs.writeFileSync(
      `${path}/${process.argv[2]}/${process.argv[2]}.validation.ts`,
      ''
    );
  }
};

createFiles();
