export function findAvailableFiles(): string[] {
    let fileNames: string[] = [];

    for(let counter = 1; counter < 9; counter++) {
        let fileName = `/biography/${counter}.jpeg`;
        fileNames.push(fileName);
    }

    return fileNames;
}

export function imgGallery(): string[] {
    let fileNames: string[] = [];

    for(let counter = 1; counter < 21; counter++) {
        let fileName = `cristiano${counter}.jpg");'`;
        let fileName1 = `background-image: url("/gallery/${fileName}`;
        fileNames.push(fileName1);
    }

    return fileNames;
}