import * as childProcess from 'child_process';
const fs = require('fs');

const pullSchemaAndGenerateErd = () => {
  childProcess.exec(
    'npx prisma db pull && npx prisma generate',
    (error: any, stdout: any, stderr: any) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  );
};


const exportSvg = () => {
  let svg = undefined;

  fs.readFile(
    `${process.cwd()}/prisma/ERD.svg`,
    'utf8',
    (err: any, data: any) => {
      if (err) throw err;
      console.log(data);
      svg = data;
    }
  );

  return svg;
};

export const getErd = () => {
  pullSchemaAndGenerateErd();
  return exportSvg();
}




