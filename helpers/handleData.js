import fs from 'fs';

const file = './db/data.json';

export function saveData(data) {
    fs.writeFileSync(file, JSON.stringify(data));
}

export const readData = ( ) => {
    if (!fs.existsSync(file)) {
        return null;
    }
    const data = fs.readFileSync(file, {enconding: 'utf-8'});
    const dataObj = JSON.parse(data);
    return dataObj;
}