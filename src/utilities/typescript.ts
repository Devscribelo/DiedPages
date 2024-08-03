export function findAvailableFiles(): string[] {
    let fileNames: string[] = [];

    for(let counter = 1; counter < 9; counter++) {
        let fileName = `${counter}.jpeg");'`;
        let fileName1 = `background-image: url("/biography/${fileName}`;
        fileNames.push(fileName1);
    }

    return fileNames;
}
